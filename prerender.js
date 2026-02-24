import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'
import { JSDOM } from 'jsdom'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// Mock browser globals for SSR
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'https://brightlaunchiq.com'
});

const mockStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
  length: 0,
  key: () => null
};

Object.defineProperties(global, {
  window: { value: dom.window, writable: true },
  document: { value: dom.window.document, writable: true },
  navigator: { value: dom.window.navigator, writable: true },
  localStorage: { value: mockStorage, writable: true },
  sessionStorage: { value: mockStorage, writable: true },
  location: { value: dom.window.location, writable: true },
});

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

const sitemap = fs.readFileSync(toAbsolute('public/sitemap.xml'), 'utf-8')
const routesToPrerender = [...sitemap.matchAll(/<loc>https:\/\/brightlaunchiq\.com([^<]*)<\/loc>/g)]
  .map(match => match[1] || '/')
  .filter(route => !route.includes(':'))

console.log('Routes to pre-render:', routesToPrerender)

const generateNoscriptContent = (appHtml) => {
  const dom = new JSDOM(appHtml);
  const document = dom.window.document;
  const main = document.querySelector('main');
  let content = '';
  if (main) {
    content = main.innerHTML;
  } else {
    const h1 = document.querySelector('h1');
    if (h1) content += `<h1>${h1.textContent}</h1>`;
    const ps = Array.from(document.querySelectorAll('p')).slice(0, 10);
    ps.forEach(p => content += `<p>${p.textContent}</p>`);
  }
  return `<noscript>${content}</noscript>`;
}

;(async () => {
  for (const url of routesToPrerender) {
    try {
      const appHtml = render(url);
      const noscriptHtml = generateNoscriptContent(appHtml);
      const html = template
        .replace(`<!--app-html-->`, appHtml)
        .replace(`<div id="noscript-placeholder"></div>`, noscriptHtml);
      const fileName = url === '/' ? 'index.html' : `${url.slice(1)}.html`;
      const filePath = `dist/client/${fileName}`;
      const dir = path.dirname(toAbsolute(filePath));
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(toAbsolute(filePath), html)
      console.log('pre-rendered:', filePath)
    } catch (e) {
      console.error(`Failed to pre-render ${url}:`, e);
    }
  }
  console.log('Pre-rendering complete.');
})()
