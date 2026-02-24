import ReactDOMServer from 'react-dom/server';
import { 
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router';
import App from './App';

// We need to define the routes for the static handler
const routes = [{ path: "*", element: <App /> }];
const handler = createStaticHandler(routes);

export function render(url: string) {
  // Mock the context since we don't have a real request
  const context = {
    basename: "/",
    location: { pathname: url, search: '', hash: '', state: null, key: 'default' },
    matches: [{
      params: {},
      pathname: url,
      pathnameBase: url,
      route: routes[0]
    }],
    loaderData: {},
    actionData: null,
    errors: null,
    statusCode: 200,
    loaderHeaders: {},
    actionHeaders: {},
    activeDeferreds: null,
  };

  const router = createStaticRouter(routes, context as any);

  const html = ReactDOMServer.renderToString(
    <StaticRouterProvider 
      router={router} 
      context={context as any}
    />
  );

  return html;
}
