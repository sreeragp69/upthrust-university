"use client";

import React from "react";
import { MenuBar } from "../header/menu-bar";
import { useSidebar } from "../context/SidebarContext";
import { Menu } from "lucide-react";

const Header: React.FC = () => {
  const { toggleMobileSidebar } = useSidebar();

  return (
    <header className="w-full mx-auto  px-4  md:px-0  pb-0  max-w-(--breakpoint-2xl) 2xl:max-w-(--breakpoint-3xl) 4xl:max-w-(--breakpoint-4xl)">
      <div className=" mx-auto  relative sm:px-1 lg:px-2 xl:px-3 py-8 pt-16  ">
        <div className="h-96 w-96 -left-[10%] -top-[50%]  absolute rounded-full  blur-[150px]  opacity-40 bg-themePrimary"></div>
        <div className="grid grid-cols-2  items-center justify-between">
          <div className=""></div>
          <div className="text-xl absolute top-13 left-[10%] transform -translate-x-1/2 font-bold text-gray-900">
            <img
              src="/logo.svg"
              alt="Upthrust University"
              className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-36 w-auto z-50"
            />
          </div>

          {/* Desktop Menu (visible from lg and above) */}
          <div className="hidden lg:block">
            <MenuBar />
          </div>

          {/* Hamburger Menu Button (visible below lg) - Right side */}
          <div className="flex justify-end lg:hidden">
            <button
              onClick={toggleMobileSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors z-50 relative"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
