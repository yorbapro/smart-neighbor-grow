import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';

export function render(url: string) {
  // Reset the 404 flag before rendering
  (globalThis as any).__404__ = false;

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );

  return {
    html,
    statusCode: (globalThis as any).__404__ ? 404 : 200,
  };
}
