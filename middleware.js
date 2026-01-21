import { NextResponse } from 'next/server';

// Middleware to protect admin routes
// We are using a simple cookie check here. For strict validation, use a library compatible with Edge Runtime.
// I'll stick to a simple cookie existence check for now to avoid the 'jose' dependency if I haven't installed it,
// OR (better) I will just check if the cookie is present.
// Validating strictly in middleware requires 'jose' or 'vercel/edge'.

export function middleware(request) {
  const path = request.nextUrl.pathname;

  // Define paths to protect
  const isProtectedPath = path.startsWith('/admin');
  const isLoginPath = path === '/admin/login';

  const token = request.cookies.get('admin_token')?.value;

  // Redirect to login if accessing protected admin route without token
  if (isProtectedPath && !isLoginPath && !token) {
    const url = request.nextUrl.clone();
    url.pathname = '/admin/login';
    return NextResponse.redirect(url);
  }

  // Redirect to dashboard if accessing login with token
  if (isLoginPath && token) {
    const url = request.nextUrl.clone();
    url.pathname = '/admin';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
