import { NextResponse } from "next/server";

export function proxy(request) {
  const token = request.cookies.get("token")?.value;

  const path = request.nextUrl?.pathname || ""; 

  const protectedRoutes = ["/profile", "/all-photos"];

  const isProtected = protectedRoutes.some((route) =>
    path.startsWith(route)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/all-photos/:path*"],
};