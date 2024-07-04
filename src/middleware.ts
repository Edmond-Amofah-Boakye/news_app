import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {

    if(req.nextUrl.pathname.startsWith("/articles") && req.nextauth.token?.role !== "admin" ){
      return NextResponse.rewrite(new URL('/auth/signin', req.url))
    }
  },
  
  {
    callbacks: {
      authorized: ({ token }) => (token ? true : false),
    },
  }
);

export const config = {
  matcher: ["/articles/:path*", "/category/:path*", "/profile/:path*"],
};
