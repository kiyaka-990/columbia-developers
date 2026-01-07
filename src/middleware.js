import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // If the user tries to access ANY page starting with /admin
  if (pathname.startsWith('/admin')) {
    const adminToken = request.cookies.get('admin_token')?.value;

    // Check if the cookie matches your secret password
    if (adminToken !== process.env.ADMIN_PASSWORD) {
      // If not, send them to the login page
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

// Ensure the middleware only runs for admin paths to stay fast
export const config = {
  matcher: '/admin/:path*',
};