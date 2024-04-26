"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function NavBar() {
  const navItems = [
    {
      name: "Nos services",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "Projets",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "Offres",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-white" />
      ),
    },
  ];
  return (
    <div className="relative bg-black w-full border-white">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
