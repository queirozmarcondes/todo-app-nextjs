import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    // capturar o accestoken da requisição
    // verifica se o token é valido,
    // se for valido da um next
    // return NextResponse.next();
    // Se for não for valido 
    return NextResponse.redirect(
      new URL('/auth', request.nextUrl)
    )
}

export const config = {
  matcher: '/todo/:path*',
}