import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';

export function render(url: string) {
  // Create a context object to track status codes
  const context: { statusCode?: number } = {};

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>
  );

  return {
    html,
    statusCode: context.statusCode || 200,
  };
}
