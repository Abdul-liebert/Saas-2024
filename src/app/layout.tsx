import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";  // CSS global
import { cn } from "@/lib/utils";  // Utility untuk className
  // Sidebar untuk layout default

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={cn(
          "min-h-screen w-full bg-white text-black font-sans",
          inter.variable
        )}
      >

        {/* Layout ini hanya diterapkan untuk app/page.tsx */}
        <div className="">{children}</div>
      </body>
    </html>
  );
}
