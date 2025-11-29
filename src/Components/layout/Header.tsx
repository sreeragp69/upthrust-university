"use client";

import React from "react";
import { MenuBar } from "../header/menu-bar";
import { useSidebar } from "../context/SidebarContext";
import { Menu } from "lucide-react";

const Header: React.FC = () => {
  const { toggleMobileSidebar } = useSidebar();

  return (
    <>
      {/* Fixed Desktop Menu Container (visible from lg and above) */}
      <div className="hidden lg:block fixed top-8 right-0 left-0 xl:right-12 2xl:right-0 z-50 pointer-events-none">
        <div className="w-full mx-auto px-4 md:px-0 max-w-(--breakpoint-2xl) 2xl:max-w-(--breakpoint-3xl) 4xl:max-w-(--breakpoint-4xl)">
          <div className="mx-auto relative sm:px-1 lg:px-2 xl:px-3">
            <div className="flex justify-end pointer-events-auto">
              <MenuBar />
            </div>
          </div>
        </div>
      </div>

      <header className="w-full mx-auto  px-4  md:px-0  pb-0  max-w-(--breakpoint-2xl) 2xl:max-w-(--breakpoint-3xl) 4xl:max-w-(--breakpoint-4xl)">
        <div className=" mx-auto  relative sm:px-1 lg:px-2 xl:px-3 py-8 pt-16 lg:pt-8 xl:pt-10  ">
          <div className="h-96 w-96 -left-[10%] -top-[50%]  absolute rounded-full  blur-[150px]  opacity-40 bg-themePrimary"></div>
          <div className=" items-center justify-between">
       
            <div className="text-xl absolute top-13 xl:top-11 2xl:top-13 xl:left-[14.5%] 2xl:left-[10%] transform -translate-x-1/2 font-bold text-gray-900">
              <img
                src="/logo.svg"
                alt="Upthrust University"
                className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-24 2xl:h-36 w-auto z-50"
              />
            </div>

            {/* Desktop Menu placeholder (hidden but maintains layout spacing) */}
            <div className="hidden lg:block invisible">
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
    </>
  );
};

export default Header;
