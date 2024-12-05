"use client";

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideNavbar from "@/components/sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}> {/* Menambahkan Inter di HTML */}
      <body
        className={cn(
          "min-h-screen w-full bg-white text-black flex font-sans", // font-sans untuk font default
          inter.variable,
          { "debug-screens": process.env.NODE_ENV === "development" }
        )}
      >
        <SideNavbar />
        <div className="p-8 w-full">{children}</div>
      </body>
    </html>
  );
}
