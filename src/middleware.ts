import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has('auth-token');
  const {pathname} = request.nextUrl;

  if (pathname.startsWith('/admin')) {
    if (!isAuthenticated) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  } else if (pathname === '/login') {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  // Apply middleware to all admin routes and the login page.
  // Explicitly listing /admin in addition to /admin/:path* makes the matching more robust.
  matcher: ['/admin', '/admin/:path*', '/login'],
};
