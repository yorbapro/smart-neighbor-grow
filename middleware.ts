import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent');
  const isCrawler = userAgent && /bot|crawler|spider|prerender/i.test(userAgent);

  if (isCrawler) {
    const prerenderUrl = `https://service.prerender.io/${request.url}`;
    const response = await fetch(prerenderUrl, {
      headers: {
        'X-Prerender-Token': 'TXpWnFkc9Aac7rs0xVIA',
      },
    });
    return response;
  }

  return NextResponse.next();
}

