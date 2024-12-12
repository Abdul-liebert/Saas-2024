"use client";
import React, { useState,useEffect } from "react";
import { Nav } from "./ui/nav";
import { useRouter } from "next/navigation";


// type Props = {};

import {
  LayoutDashboard,
  File,
  Send,
  LogOut,
  ChevronRight,
  Info,
} from "lucide-react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";

export default function SideNavbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    if (token) {
      setIsLoggedIn(true); // Jika ada token, berarti sudah login
    } else {
      router.push("/"); // Redirect ke halaman landing jika belum login
    }
  }, [router]);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlywidth = useWindowWidth();
  const handleLogout = () => {
    // Hapus token dari cookie
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    setIsLoggedIn(false); // Ubah status menjadi belum login
    router.push("/"); // Redirect ke halaman landing
  };

  const mobileWidth = onlywidth < 768;
  function toggleCollapse() {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleCollapse}
            variant={"secondary"}
            className="rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
     
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            icon: LayoutDashboard,
            variant: "default",
            href: "/dashboard",
          },
          {
            title: "Resource",
            icon: File,
            variant: "ghost",
            href: "/dashboard/data",
          },
          {
            title: "About",
            icon: Info,
            variant: "ghost",
            href: "/dashboard/about",
          },
        ]}
        
      />
       {isLoggedIn && (
        <div
          className={`${
            isCollapsed ? "flex items-center justify-center" : "block"
          } mt-4 w-full`} // Menyembunyikan tombol saat collapsed
        >
          <Button
            variant={"outline"}
            onClick={handleLogout}
            className={"w-full"}
          >
            {isCollapsed  ? (
              <LogOut className="w-5 h-5"/>
            ): (
              <>
              Logout 
              <LogOut className="w-5 h-5 mr-2"/>
              </>
            )
            }
          </Button>
        </div>
      )}
    </div>
  );
}
