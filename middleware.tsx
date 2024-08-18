import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_NAME } from "./utils/constants";
import { redirect } from "next/navigation";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!request.cookies.has(COOKIE_NAME)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/tutors")) {
    if (request.cookies.has(COOKIE_NAME)) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  if (request.nextUrl.pathname === "/") {
    if (request.cookies.has(COOKIE_NAME)) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/", "/tutors/:path*"],
};
