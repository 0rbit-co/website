"use client";
import React from "react";
import { FloatingNav } from "@/app/components/ui/floating-navbar";
function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Team",
      link: "/team",
    },
    {
      name: "Docs",
      link: "https://docs.0rbit.co/",
    },
    {
      name: "Quests",
      link: "https://github.com/0rbit-co/quest/blob/main/quest.md",
    }
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

export default FloatingNavDemo;
