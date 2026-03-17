module.exports = async (req, res) => {
  const userAgent = req.headers["user-agent"];
  const isCrawler = userAgent && /bot|crawler|spider|prerender/i.test(userAgent);

  if (isCrawler) {
    const prerenderUrl = `https://service.prerender.io/${req.url}`;
    const prerenderResponse = await fetch(prerenderUrl, {
      headers: {
        "X-Prerender-Token": "TXpWnFkc9Aac7rs0xVIA",
      },
    });

    const body = await prerenderResponse.text();
    res.status(prerenderResponse.status).send(body);
  } else {
    // For regular users, serve the SPA
    res.status(200).send("<!-- Prerender.io fallback -->"); // This will be replaced by the SPA
  }
};
