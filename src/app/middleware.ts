import { NextResponse } from "next/server";

export default function middleware(req: Request) {
  const token = req.headers.get("cookie")?.includes("token=my-auth-token");

  // Jika pengguna sudah login, arahkan ke dashboard
  if (req.url.includes("/dashboardlogin") && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Jika pengguna belum login, arahkan ke halaman login
  if (req.url.includes("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/dashboardlogin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/dashboardlogin"],
};
