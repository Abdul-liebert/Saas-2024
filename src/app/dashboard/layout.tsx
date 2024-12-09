"use client";

import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import SideNavbar from "@/components/sidebar";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});



export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={cn(
          "min-h-screen w-full bg-white text-black flex font-sans",
          inter.variable,
          { "debug-screens": process.env.NODE_ENV === "development" }
        )}
      >
        {/* Sidebar khusus dashboard */}
        <SideNavbar />
        {/* Konten halaman dashboard */}
        <div className="p-8 w-full">{children}</div>
      </body>
    </html>
  );
}
