import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const adminToken = request.cookies.get('admin_token')?.value;

  if (pathname.startsWith('/admin')) {
    // If password doesn't match, redirect to login WITH an error parameter
    if (adminToken !== process.env.ADMIN_PASSWORD) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('error', '1'); 
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};