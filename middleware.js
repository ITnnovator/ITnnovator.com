import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // If you want to restrict based on role:
    // if (req.nextUrl.pathname.startsWith("/admin") && req.nextauth.token?.role !== "admin") {
    //   return NextResponse.rewrite(new URL("/auth/login?message=You Are Not Authorized!", req.url));
    // }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/admin/login",
    },
  }
);

export const config = {
  matcher: ["/admin/:path*"],
};
