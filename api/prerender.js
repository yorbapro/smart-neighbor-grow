module.exports = async (req, res) => {
  const userAgent = req.headers["user-agent"];
  const isCrawler = userAgent && /bot|crawler|spider|prerender/i.test(userAgent);

  if (isCrawler) {
    const prerenderUrl = `https://service.prerender.io${req.url}`;
    try {
      const prerenderResponse = await fetch(prerenderUrl, {
        headers: {
          "X-Prerender-Token": "TXpWnFkc9Aac7rs0xVIA",
        },
      });

      const body = await prerenderResponse.text();
      res.status(prerenderResponse.status).send(body);
      return; // Important: Stop execution for crawlers
    } catch (error) {
      console.error("Prerender.io fetch error:", error);
      // Fallback to serving the SPA if Prerender.io fails
      res.status(500).send("<!-- Prerender.io fallback due to error -->");
      return;
    }
  }

  // For regular users, allow the request to fall through to the SPA (handled by vercel.json rewrite)
  // No explicit action needed here, as vercel.json will handle the rewrite to /index.html
  res.status(200).send("<!-- Regular user request, serving SPA -->"); // This will be replaced by the SPA
};
