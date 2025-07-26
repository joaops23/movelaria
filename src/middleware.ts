import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
const secureRoutes = ['/admin', "/admin/:path*"];

export function middleware(request: NextRequest) {
  // Protege rotas seguras

  const activeSession = request.cookies.get('access_token');
  const { pathname } = request.nextUrl;

  // caso esteja em ambiente fechado, valida se cookie de sessão está inativo e redireciona para login
  if (!activeSession && pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (activeSession && (pathname === '/login' || pathname === '/register')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: secureRoutes,
};