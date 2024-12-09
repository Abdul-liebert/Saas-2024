"use client";
import React, { useState } from "react";
import { Nav } from "./ui/nav";

type Props = {};

import {
  LayoutDashboard,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
  ChevronFirst,
  ChevronRight,
  Info,
} from "lucide-react";
import { Button } from "./ui/button";

import {
    useWindowWidth,
  } from '@react-hook/window-size'
  

export default function SideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlywidth = useWindowWidth();
  const mobileWidth = onlywidth <768;
  function toggleCollapse() {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
        {!mobileWidth && (<div className="absolute right-[-20px] top-7">

      <Button onClick={toggleCollapse} variant={"secondary"} className="rounded-full p-2">
        <ChevronRight/>
      </Button>
        </div>)}
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
            title: "Drafts",
            icon: File,
            variant: "ghost",
            href: "dashboard/drafts",
          },
          {
            title: "Sent",
            label: "",
            icon: Send,
            variant: "ghost",
            href: "dashboard/tasks",
          },
          {
            title: "About",
            icon: Info,
            variant: "ghost",
            href: "dashboard/about",
          },
        ]}
      />
    </div>
  );
}
