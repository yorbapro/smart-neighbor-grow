import fs from 'node:fs/promises'
import path from 'node:path'
import url from 'node:url'

// Mock browser APIs for SSR
if (typeof global !== 'undefined') {
  global.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    key: () => null,
    length: 0,
  };
  global.sessionStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    key: () => null,
    length: 0,
  };
}

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = await fs.readFile(toAbsolute('dist/client/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Dynamically determine routes to pre-render from src/pages
const getRoutes = async () => {
  const pagesDir = toAbsolute('src/pages');
  const files = await fs.readdir(pagesDir, { recursive: true });
  const routes = [];

  for (const file of files) {
    if (file.endsWith('.tsx') && !file.includes('NotFound')) {
      let route = file.replace(/\.tsx$/, '').toLowerCase();
      // Handle nested routes, e.g., industries/hvac-contractors.tsx -> /industries/hvac-contractors
      route = route.replace(/index$/, '').replace(/\/$/, ''); // Remove 'index' and trailing slash
      if (route.startsWith('resources/blog/')) {
        // Handle blog articles, assuming a slug structure
        const slug = route.split('/').pop();
        routes.push(`/learning-center/blog/${slug}`);
      } else if (route.startsWith('learning-center/')) {
        routes.push(`/${route}`);
      } else if (route.startsWith('industries/')) {
        routes.push(`/${route}`);
      } else if (route.startsWith('locations/')) {
        routes.push(`/${route}`);
      } else if (route === 'index') {
        routes.push('/');
      } else if (route === 'about') {
        routes.push('/about');
      } else if (route === 'faq') {
        routes.push('/faq');
      } else if (route === 'pricing') {
        routes.push('/pricing');
      } else if (route === 'contact') {
        routes.push('/contact');
      } else if (route === 'getstarted') {
        routes.push('/get-started');
      } else if (route === 'howitworks') {
        routes.push('/how-it-works');
      } else if (route === 'aeoaudit') {
        routes.push('/aeo-audit');
      } else if (route === 'ai-receptionist-readiness-assessment') {
        routes.push('/ai-receptionist-readiness-assessment');
      } else if (route === 'onboarding') {
        routes.push('/onboarding');
      } else if (route === 'payment-success') {
        routes.push('/payment-success');
      } else if (route === 'terms') {
        routes.push('/terms');
      } else if (route === 'privacy') {
        routes.push('/privacy');
      } else if (route === 'accessibility') {
        routes.push('/accessibility');
      } else if (route === 'trustsecurity') {
        routes.push('/trust-security');
      } else if (route === 'comparison') {
        routes.push('/comparison');
      } else if (route === 'glossary') {
        routes.push('/glossary');
      } else if (route === 'casestudies') {
        routes.push('/case-studies');
      } else if (route === 'whitepaperpage') {
        // This is a dynamic route, will need to handle separately if we want to prerender specific whitepapers
      } else if (route === 'adminauth') {
        routes.push('/admin');
      } else if (route === 'adminleads') {
        routes.push('/admin/leads');
      } else if (route === 'adminemailtemplates') {
        routes.push('/admin/email-templates');
      } else if (route === 'login') {
        routes.push('/login');
      } else if (route === 'resetpassword') {
        routes.push('/reset-password');
      } else if (route === 'dashboard') {
        routes.push('/dashboard');
      } else if (route.startsWith('products/')) {
        routes.push(`/${route}`);
      }
    }
  }
  return routes;
};

(async () => {
  const routesToPrerender = await getRoutes();

  for (const url of routesToPrerender) {
    try {
      const appHtml = render(url);
      const html = template.replace(`<!--app-html-->`, appHtml);

      const filePath = `dist/client${url === '/' ? '/index' : url}.html`;
      const dir = path.dirname(toAbsolute(filePath));
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(toAbsolute(filePath), html);
      console.log('pre-rendered:', filePath);
    } catch (e) {
      console.error(`Failed to pre-render ${url}:`, e);
    }
  }
  console.log('Pre-rendering complete.');
})();
