import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_NAME } from "./utils/constants";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!request.cookies.has(COOKIE_NAME)) {
      console.log(request.url);
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (request.nextUrl.pathname === "/") {
    if (request.cookies.has(COOKIE_NAME)) {
      console.log(request.url);
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/"],
};
