const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  const userAgent = req.headers['user-agent'];
  const isCrawler = userAgent && /bot|crawler|spider|prerender/i.test(userAgent);

  if (isCrawler) {
    const prerenderUrl = `https://service.prerender.io${req.url}`;
    try {
      const prerenderResponse = await fetch(prerenderUrl, {
        headers: {
          'X-Prerender-Token': 'TXpWnFkc9Aac7rs0xVIA',
        },
      });

      const body = await prerenderResponse.text();
      res.status(prerenderResponse.status).send(body);
      return;
    } catch (error) {
      console.error('Prerender.io fetch error:', error);
      // Fallback to serving the SPA if Prerender.io fails
      const indexPath = path.join(__dirname, '..', 'dist', 'client', 'index.html');
      const indexHtml = fs.readFileSync(indexPath, 'utf-8');
      res.status(200).send(indexHtml);
      return;
    }
  }

  // For regular users, serve the SPA's index.html
  const indexPath = path.join(__dirname, '..', 'dist', 'client', 'index.html');
  const indexHtml = fs.readFileSync(indexPath, 'utf-8');
  res.status(200).send(indexHtml);
};
