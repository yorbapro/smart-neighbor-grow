// Ensure production mode so react-dom loads the production CJS build
// (avoids DOM feature detection in development build that crashes in Node)
process.env.NODE_ENV = 'production'

import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Minimal browser-like globals for SSR/prerender
const mockStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
  length: 0,
  key: () => null,
}

const mockLocation = {
  href: 'https://brightlaunchiq.com/',
  origin: 'https://brightlaunchiq.com',
  pathname: '/',
  search: '',
  hash: '',
}

const createMockElement = (tagName = 'div') => {
  const element = {
    style: {},
    styleSheet: null,
    children: [],
    childNodes: [],
    tagName: tagName.toUpperCase(),
    nodeName: tagName.toUpperCase(),
    nodeType: 1,
    ownerDocument: null,
    parentNode: null,
    attributes: {},
    className: '',
    textContent: '',
    innerHTML: '',
    id: '',
    dataset: {},
    setAttribute: (name, value) => {
      element.attributes[name] = String(value)
      if (name === 'id') element.id = String(value)
      if (name === 'class') element.className = String(value)
    },
    getAttribute: (name) => element.attributes[name] ?? null,
    hasAttribute: (name) => name in element.attributes,
    removeAttribute: (name) => {
      delete element.attributes[name]
    },
    appendChild: (child) => {
      if (child && typeof child === 'object') child.parentNode = element
      element.childNodes.push(child)
      return child
    },
    insertBefore: (child, ref) => {
      if (child && typeof child === 'object') child.parentNode = element
      const idx = ref ? element.childNodes.indexOf(ref) : 0
      element.childNodes.splice(idx >= 0 ? idx : 0, 0, child)
      return child
    },
    removeChild: (child) => {
      element.childNodes = element.childNodes.filter((node) => node !== child)
      if (child && typeof child === 'object') child.parentNode = null
      return child
    },
    replaceChild: (newChild, oldChild) => {
      const idx = element.childNodes.indexOf(oldChild)
      if (idx >= 0) element.childNodes[idx] = newChild
      return oldChild
    },
    cloneNode: () => createMockElement(tagName),
    contains: () => false,
    matches: () => false,
    closest: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementsByTagName: () => [],
    getElementsByClassName: () => [],
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
    getBoundingClientRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }),
    focus: () => {},
    blur: () => {},
    click: () => {},
    remove: () => {},
    classList: {
      add: () => {},
      remove: () => {},
      toggle: () => {},
      contains: () => false,
    },
  }

  Object.defineProperty(element, 'firstChild', {
    get: () => element.childNodes[0] ?? null,
  })
  Object.defineProperty(element, 'lastChild', {
    get: () => element.childNodes[element.childNodes.length - 1] ?? null,
  })
  Object.defineProperty(element, 'nextSibling', { get: () => null })
  Object.defineProperty(element, 'previousSibling', { get: () => null })

  return element
}

const mockHead = createMockElement('head')
const mockBody = {
  ...createMockElement('body'),
  classList: { add: () => {}, remove: () => {} },
}

const mockDocument = {
  hidden: false,
  head: mockHead,
  body: mockBody,
  documentElement: {
    lang: 'en',
    setAttribute: () => {},
    getAttribute: () => null,
    style: {},
    classList: { add: () => {}, remove: () => {}, toggle: () => {}, contains: () => false },
  },
  createElement: (tagName = 'div') => {
    const element = createMockElement(tagName)
    element.ownerDocument = mockDocument
    return element
  },
  createElementNS: (_namespace, tagName = 'div') => {
    const element = createMockElement(tagName)
    element.ownerDocument = mockDocument
    return element
  },
  createTextNode: (text = '') => ({ nodeType: 3, textContent: String(text), parentNode: null }),
  createDocumentFragment: () => createMockElement('fragment'),
  createComment: (text = '') => ({ nodeType: 8, textContent: String(text), parentNode: null }),
  querySelector: () => null,
  querySelectorAll: () => [],
  getElementById: () => null,
  getElementsByTagName: (tagName) => {
    if (tagName === 'head') return [mockHead]
    if (tagName === 'body') return [mockBody]
    return []
  },
  getElementsByClassName: () => [],
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => true,
  createEvent: () => ({ initEvent: () => {} }),
  cookie: '',
  title: '',
  readyState: 'complete',
}

mockHead.ownerDocument = mockDocument
mockBody.ownerDocument = mockDocument

const mockWindow = {
  location: mockLocation,
  document: mockDocument,
  localStorage: mockStorage,
  sessionStorage: mockStorage,
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => true,
  scrollTo: () => {},
  scrollBy: () => {},
  scroll: () => {},
  getComputedStyle: () => new Proxy({}, { get: () => '' }),
  requestAnimationFrame: (cb) => setTimeout(cb, 0),
  cancelAnimationFrame: () => {},
  innerWidth: 1280,
  innerHeight: 800,
  outerWidth: 1280,
  outerHeight: 800,
  devicePixelRatio: 1,
  history: { pushState: () => {}, replaceState: () => {}, back: () => {}, forward: () => {} },
  performance: globalThis.performance || { now: () => Date.now(), mark: () => {}, measure: () => {} },
  matchMedia: () => ({
    matches: false,
    media: '',
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
  }),
  ResizeObserver: class { observe() {} unobserve() {} disconnect() {} },
  IntersectionObserver: class { observe() {} unobserve() {} disconnect() {} },
  MutationObserver: class { observe() {} disconnect() {} takeRecords() { return [] } },
  HTMLElement: function HTMLElement() {},
  CustomEvent: class CustomEvent { constructor(type, opts) { this.type = type; this.detail = opts?.detail } },
}

Object.defineProperty(globalThis, 'window', { value: mockWindow, writable: true, configurable: true })
Object.defineProperty(globalThis, 'document', { value: mockDocument, writable: true, configurable: true })
Object.defineProperty(globalThis, 'navigator', { value: { userAgent: 'node', language: 'en-US', languages: ['en-US'] }, writable: true, configurable: true })
Object.defineProperty(globalThis, 'location', { value: mockLocation, writable: true, configurable: true })
Object.defineProperty(globalThis, 'localStorage', { value: mockStorage, writable: true, configurable: true })
Object.defineProperty(globalThis, 'sessionStorage', { value: mockStorage, writable: true, configurable: true })
globalThis.ResizeObserver = globalThis.ResizeObserver || mockWindow.ResizeObserver
globalThis.IntersectionObserver = globalThis.IntersectionObserver || mockWindow.IntersectionObserver
globalThis.MutationObserver = globalThis.MutationObserver || mockWindow.MutationObserver
globalThis.HTMLElement = globalThis.HTMLElement || mockWindow.HTMLElement
globalThis.requestAnimationFrame = globalThis.requestAnimationFrame || mockWindow.requestAnimationFrame
globalThis.cancelAnimationFrame = globalThis.cancelAnimationFrame || mockWindow.cancelAnimationFrame
globalThis.getComputedStyle = globalThis.getComputedStyle || mockWindow.getComputedStyle
globalThis.scrollTo = globalThis.scrollTo || mockWindow.scrollTo

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

const sitemap = fs.readFileSync(toAbsolute('public/sitemap.xml'), 'utf-8')
const parsedRoutes = [...sitemap.matchAll(/<loc>https:\/\/brightlaunchiq\.com([^<]*)<\/loc>/g)]
  .map((match) => match[1] || '/')
  .filter((route) => !route.includes(':'))

const uniqueRoutes = [...new Set(parsedRoutes)]

const industryPagesToKeep = [
  '/industries/hvac-contractors',
  '/industries/dental-clinics',
  '/industries/personal-injury-lawyers'
]

const pagesToExclude = [
  '/ai-receptionist-guide'
]

const filteredRoutes = uniqueRoutes.filter(route => {
  if (pagesToExclude.includes(route)) {
    return false
  }
  if (!route.startsWith('/industries/')) {
    return true
  }
  return industryPagesToKeep.includes(route)
})

const baseRoutes = filteredRoutes.includes('/') ? filteredRoutes : ['/', ...filteredRoutes]
const routeLimit = Number(process.env.PRERENDER_ROUTE_LIMIT || 0)
const routesToPrerender = Number.isFinite(routeLimit) && routeLimit > 0
  ? baseRoutes.slice(0, routeLimit)
  : baseRoutes

const progressEvery = Number(process.env.PRERENDER_PROGRESS_EVERY || 25)
const silentPrerender = process.env.PRERENDER_SILENT !== '0'
const noscriptHtml = '<noscript><p>Please enable JavaScript to use this site.</p></noscript>'

const originalConsoleWarn = console.warn
const originalConsoleInfo = console.info

if (silentPrerender) {
  console.warn = () => {}
  console.info = () => {}
}

const logProgress = (done, total) => {
  if (done === total || (progressEvery > 0 && done % progressEvery === 0)) {
    console.log(`Pre-render progress: ${done}/${total}`)
  }
}

console.log(`Pre-rendering ${routesToPrerender.length} route(s)...`)

let errorSamplesLogged = 0
const MAX_ERROR_SAMPLES = 5

const renderRoute = (routeUrl) => {
  try {
    const result = render(routeUrl)
    const appHtml = typeof result === 'string' ? result : result.html
    const statusCode = typeof result === 'string' ? 200 : (result.statusCode || 200)

    if (statusCode === 404) {
      return { status: 'skipped404', routeUrl }
    }

    const html = template
      .replace(`<!--app-html-->`, appHtml)
      .replace(`<div id="noscript-placeholder"></div>`, noscriptHtml)

    const fileName = routeUrl === '/' ? 'index.html' : `${routeUrl.slice(1)}.html`
    const filePath = `dist/client/${fileName}`
    const dir = path.dirname(toAbsolute(filePath))
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

    fs.writeFileSync(toAbsolute(filePath), html)
    return { status: 'rendered', routeUrl }
  } catch (e) {
    if (errorSamplesLogged < MAX_ERROR_SAMPLES) {
      errorSamplesLogged++
      console.error(`[prerender] FAILED ${routeUrl}: ${e.message}`)
      console.error(e.stack)
    }
    return { status: 'failed', routeUrl, error: e.message }
  }
}

;(async () => {
  let renderedCount = 0
  let skipped404Count = 0
  let failedCount = 0
  let exitCode = 0
  const batchSize = 3 // Render 3 routes in parallel to balance speed and memory

  try {
    for (let i = 0; i < routesToPrerender.length; i += batchSize) {
      const batch = routesToPrerender.slice(i, i + batchSize)
      const results = batch.map(renderRoute)

      for (const result of results) {
        if (result.status === 'rendered') renderedCount += 1
        else if (result.status === 'skipped404') skipped404Count += 1
        else if (result.status === 'failed') failedCount += 1
      }

      logProgress(renderedCount + skipped404Count + failedCount, routesToPrerender.length)
    }

    // Explicitly generate 404.html for static hosting providers
    try {
      const result = renderRoute('/404-not-found-page-test')
      if (result.status !== 'failed') {
        const routeUrl = '/404-not-found-page-test'
        const renderResult = render(routeUrl)
        const appHtml = typeof renderResult === 'string' ? renderResult : renderResult.html
        const html = template
          .replace(`<!--app-html-->`, appHtml)
          .replace(`<div id="noscript-placeholder"></div>`, noscriptHtml)

        fs.writeFileSync(toAbsolute('dist/client/404.html'), html)

        const distDir = toAbsolute('dist')
        if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true })
        fs.writeFileSync(path.join(distDir, '404.html'), html)
      }
    } catch (e) {
      console.error('Failed to pre-render 404.html:', e.message)
      exitCode = 1
    }

    if (failedCount > 0) {
      exitCode = 1
    }

    console.log(`Pre-render complete. Rendered: ${renderedCount}, skipped 404: ${skipped404Count}, failed: ${failedCount}`)
  } finally {
    console.warn = originalConsoleWarn
    console.info = originalConsoleInfo
    process.exit(exitCode)
  }
})()
