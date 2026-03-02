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

// Define critical pages to pre-render for SEO/AEO
const criticalPages = new Set([
  '/',
  '/about',
  '/pricing',
  '/contact',
  '/faq',
  '/get-started',
  '/aeo-audit',
  '/terms',
  '/privacy',
  '/accessibility',
  '/resources/blog',
  '/resources/glossary',
  '/resources/case-studies',
  '/resources/comparison',
  '/resources/how-it-works',
  '/resources/blog/what-is-aeo',
  '/resources/blog/ai-lead-generation-guide',
  '/resources/blog/human-guided-ai-vs-automated',
  '/resources/blog/speed-to-lead-problem',
  '/resources/blog/gbp-optimization-ai',
  '/resources/blog/crm-integration-ai',
  '/industries',
  '/locations',
  '/locations/sacramento',
  '/locations/bakersfield',
  '/locations/fresno',
  '/locations/stockton',
  '/locations/culver-city',
  '/locations/monterey',
  '/locations/henderson'
]);

const sitemap = fs.readFileSync(toAbsolute('public/sitemap.xml'), 'utf-8')
const routesToPrerender = [...sitemap.matchAll(/<loc>https:\/\/brightlaunchiq\.com([^<]*)<\/loc>/g)]
  .map(match => match[1] || '/')
  .filter(route => !route.includes(":") && criticalPages.has(route))

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
  for (const routeUrl of routesToPrerender) {
    try {
      const result = render(routeUrl);
      // Handle both old format (string) and new format (object with html and statusCode)
      const appHtml = typeof result === 'string' ? result : result.html;
      const statusCode = typeof result === 'string' ? 200 : (result.statusCode || 200);
      
      // Skip rendering 404 pages to avoid duplicate content
      if (statusCode === 404) {
        console.log('skipped (404):', routeUrl);
        continue;
      }
      
      const noscriptHtml = generateNoscriptContent(appHtml);
      const html = template
        .replace(`<!--app-html-->`, appHtml)
        .replace(`<div id="noscript-placeholder"></div>`, noscriptHtml);
      const fileName = routeUrl === '/' ? 'index.html' : `${routeUrl.slice(1)}.html`;
      const filePath = `dist/client/${fileName}`;
      const dir = path.dirname(toAbsolute(filePath));
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(toAbsolute(filePath), html)
      console.log('pre-rendered:', filePath)
    } catch (e) {
      console.error(`Failed to pre-render ${routeUrl}:`, e);
    }
  }
  // Explicitly generate 404.html for static hosting providers
  try {
    console.log('Generating 404.html...');
    const result = render('/404-not-found-page-test');
    const appHtml = typeof result === 'string' ? result : result.html;
    const noscriptHtml = generateNoscriptContent(appHtml);
    const html = template
      .replace(`<!--app-html-->`, appHtml)
      .replace(`<div id="noscript-placeholder"></div>`, noscriptHtml);
    fs.writeFileSync(toAbsolute('dist/client/404.html'), html);
    console.log('pre-rendered: dist/client/404.html');
    
    // Also write to dist/404.html in case the hosting provider serves from dist
    const distDir = toAbsolute('dist');
    if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });
    fs.writeFileSync(path.join(distDir, '404.html'), html);
    console.log('pre-rendered: dist/404.html');
  } catch (e) {
    console.error('Failed to pre-render 404.html:', e);
  }

  // Generate _redirects file for Netlify to handle 404s correctly
  try {
    console.log('Generating _redirects...');
    let redirects = '';
    for (const routeUrl of routesToPrerender) {
      if (routeUrl === '/') continue;
      redirects += `${routeUrl}  ${routeUrl}.html  200\n`;
    }
    // Product pages and industry pages will be rendered client-side
    // Add catch-all 404 rule for non-prerendered routes
    redirects += '/*  /404.html  404\n';
    fs.writeFileSync(toAbsolute('dist/client/_redirects'), redirects);
    console.log('pre-rendered: dist/client/_redirects');
  } catch (e) {
    console.error('Failed to generate _redirects:', e);
  }

  console.log('Pre-rendering complete.');
})()
