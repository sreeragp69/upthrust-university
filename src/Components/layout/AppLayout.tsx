// AppLayout.tsx
import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Backdrop from "./Backdrop";
// import AppSidebar from "./AppSidebar";
// import AppHeaderSkeleton from "../components/AppHeader/Skeletons/AppHeaderSkeleton";
import { useEffect, useState } from "react";
// import AppFooter from "./AppFooter";
// import {
//   BreakPointProvider,
//   useBreakPoint,
// } from "../context/BreakPointContext";
import AppFooter from "./Footer";

const LayoutContent: React.FC = () => {
  const { isMobileOpen, setIsMobileOpen } = useSidebar();
//   const { useBreakpoints } = useBreakPoint(); // 👈 consume context
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* <AppSidebar /> */}

      {isMobileOpen && <Backdrop onClick={() => setIsMobileOpen(false)} />}

      <div className="flex-1 bg-themeBackgroundColor transition-all duration-300 ease-in-out">
        {/* {loading ? <HeaderSkeleton /> : <Header />} */}
        <Header />

        {/* 🔹 Conditional breakpoints */}
        <div
          className={` mx-autop-2 sm:p-4 pb-0  max-w-(--breakpoint-2xl) 2xl:max-w-(--breakpoint-3xl) 4xl:max-w-(--breakpoint-4xl)`}
        >
          <Outlet />
        </div>

        {/* <AppFooter /> */}
        <AppFooter />
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => (
  <SidebarProvider>
    {/* <BreakPointProvider> */}
      <LayoutContent />
    {/* </BreakPointProvider> */}
  </SidebarProvider>
);

export default AppLayout;