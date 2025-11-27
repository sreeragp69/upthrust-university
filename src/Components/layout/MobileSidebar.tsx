"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebar } from "../context/SidebarContext";
import { Home, Settings, Bell, User, X } from "lucide-react";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
  iconColor: string;
}

const menuItems: MenuItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "#",
    gradient:
      "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <Bell className="h-5 w-5" />,
    label: "About",
    href: "#",
    gradient:
      "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    icon: <Settings className="h-5 w-5" />,
    label: "Programs",
    href: "#",
    gradient:
      "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "Our Centre",
    href: "#",
    gradient:
      "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
  {
    icon: <User className="h-5 w-5" />,
    label: "Contact",
    href: "#contact-us",
    gradient:
      "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
];

const MobileSidebar: React.FC = () => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();

  return (
    <AnimatePresence>
      {isMobileOpen && (
        <>
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ 
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="fixed inset-0 bg-white z-50 lg:hidden overflow-hidden flex flex-col"
          >
            {/* Header with Logo and Close Button */}
            <div 
              className="flex items-center justify-between p-6 border-b border-gray-200 shrink-0"
            >
              <img
                src="/logo.svg"
                alt="Upthrust University"
                className="h-12 sm:h-14 md:h-16 w-auto"
              />
              <button
                onClick={toggleMobileSidebar}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 p-6 overflow-y-auto">
              <ul className="space-y-4">
                <AnimatePresence>
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ 
                        delay: 0.2 + index * 0.1,
                        duration: 0.4,
                        ease: "easeOut"
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={() => {
                          toggleMobileSidebar();
                        }}
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <span
                          className={`transition-colors duration-300 ${item.iconColor}`}
                        >
                          {item.icon}
                        </span>
                        <span className="font-alexandria text-lg font-medium text-gray-900 uppercase group-hover:text-themePrimary transition-colors">
                          {item.label}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;

