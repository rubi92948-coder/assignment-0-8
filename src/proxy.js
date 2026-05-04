import { NextResponse } from "next/server";

export function proxy(request) {
  const token = request.cookies.get("token")?.value;

  const path = request.nextUrl.pathname;

  const isProtected =
    path.startsWith("/profile") ||
    path.startsWith("/all-photos");

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/all-photos/:path*"],
};