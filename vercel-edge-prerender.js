import { NextResponse } from 'next/server';

export const config = {
  matcher: '/:path*',
};

export async function middleware(request) {
  const userAgent = request.headers.get('user-agent');
  const isCrawler = userAgent && /bot|crawler|spider|prerender/i.test(userAgent);

  if (isCrawler) {
    const prerenderUrl = `https://service.prerender.io${request.nextUrl.pathname}${request.nextUrl.search}`;
    try {
      const prerenderResponse = await fetch(prerenderUrl, {
        headers: {
          'X-Prerender-Token': 'TXpWnFkc9Aac7rs0xVIA',
        },
      });

      const body = await prerenderResponse.text();
      return new NextResponse(body, { status: prerenderResponse.status, headers: prerenderResponse.headers });
    } catch (error) {
      console.error('Prerender.io fetch error:', error);
      // Fallback to serving the SPA if Prerender.io fails
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}
