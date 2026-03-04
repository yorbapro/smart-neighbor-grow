import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'
import { JSDOM } from 'jsdom'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Mock browser globals for SSR
const globalDom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'https://brightlaunchiq.com',
})

const mockStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
  length: 0,
  key: () => null,
}

Object.defineProperties(global, {
  window: { value: globalDom.window, writable: true },
  document: { value: globalDom.window.document, writable: true },
  navigator: { value: globalDom.window.navigator, writable: true },
  localStorage: { value: mockStorage, writable: true },
  sessionStorage: { value: mockStorage, writable: true },
  location: { value: globalDom.window.location, writable: true },
})

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

const sitemap = fs.readFileSync(toAbsolute('public/sitemap.xml'), 'utf-8')
const parsedRoutes = [...sitemap.matchAll(/<loc>https:\/\/brightlaunchiq\.com([^<]*)<\/loc>/g)]
  .map((match) => match[1] || '/')
  .filter((route) => !route.includes(':'))

const uniqueRoutes = [...new Set(parsedRoutes)]
const baseRoutes = uniqueRoutes.includes('/') ? uniqueRoutes : ['/', ...uniqueRoutes]
const routeLimit = Number(process.env.PRERENDER_ROUTE_LIMIT || 0)
const routesToPrerender = Number.isFinite(routeLimit) && routeLimit > 0
  ? baseRoutes.slice(0, routeLimit)
  : baseRoutes

console.log(`Pre-rendering ${routesToPrerender.length} route(s)...`)

const generateNoscriptContent = (appHtml) => {
  const noscriptDom = new JSDOM(appHtml)
  try {
    const document = noscriptDom.window.document
    const main = document.querySelector('main')

    if (main) {
      return `<noscript>${main.innerHTML}</noscript>`
    }

    let content = ''
    const h1 = document.querySelector('h1')
    if (h1) content += `<h1>${h1.textContent}</h1>`

    const ps = Array.from(document.querySelectorAll('p')).slice(0, 10)
    ps.forEach((p) => {
      content += `<p>${p.textContent}</p>`
    })

    return `<noscript>${content}</noscript>`
  } finally {
    noscriptDom.window.close()
  }
}

;(async () => {
  let renderedCount = 0
  let skipped404Count = 0

  try {
    for (const routeUrl of routesToPrerender) {
      try {
        const result = render(routeUrl)
        const appHtml = typeof result === 'string' ? result : result.html
        const statusCode = typeof result === 'string' ? 200 : (result.statusCode || 200)

        if (statusCode === 404) {
          skipped404Count += 1
          continue
        }

        const noscriptHtml = generateNoscriptContent(appHtml)
        const html = template
          .replace(`<!--app-html-->`, appHtml)
          .replace(`<div id="noscript-placeholder"></div>`, noscriptHtml)

        const fileName = routeUrl === '/' ? 'index.html' : `${routeUrl.slice(1)}.html`
        const filePath = `dist/client/${fileName}`
        const dir = path.dirname(toAbsolute(filePath))
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

        fs.writeFileSync(toAbsolute(filePath), html)
        renderedCount += 1
      } catch (e) {
        console.error(`Failed to pre-render ${routeUrl}:`, e)
      }
    }

    // Explicitly generate 404.html for static hosting providers
    try {
      const result = render('/404-not-found-page-test')
      const appHtml = typeof result === 'string' ? result : result.html
      const noscriptHtml = generateNoscriptContent(appHtml)
      const html = template
        .replace(`<!--app-html-->`, appHtml)
        .replace(`<div id="noscript-placeholder"></div>`, noscriptHtml)

      fs.writeFileSync(toAbsolute('dist/client/404.html'), html)

      const distDir = toAbsolute('dist')
      if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true })
      fs.writeFileSync(path.join(distDir, '404.html'), html)
    } catch (e) {
      console.error('Failed to pre-render 404.html:', e)
      process.exitCode = 1
    }

    console.log(`Pre-render complete. Rendered: ${renderedCount}, skipped 404: ${skipped404Count}`)
  } finally {
    globalDom.window.close()
  }
})()

