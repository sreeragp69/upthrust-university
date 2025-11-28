// AppLayout.tsx
import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Backdrop from "./Backdrop";
import MobileSidebar from "./MobileSidebar";
// import AppSidebar from "./AppSidebar";
// import AppHeaderSkeleton from "../components/AppHeader/Skeletons/AppHeaderSkeleton";
// import AppFooter from "./AppFooter";
// import {
//   BreakPointProvider,
//   useBreakPoint,
// } from "../context/BreakPointContext";
import AppFooter from "./Footer";
import { BreakPointProvider, useBreakPoint } from "../context/BreackPointContext";

const LayoutContent: React.FC = () => {
  const { isMobileOpen, setIsMobileOpen } = useSidebar();
  const { useBreakpoints } = useBreakPoint(); // 👈 consume context

  return (
    <div className="min-h-screen flex">
      {/* <AppSidebar /> */}

      {/* Mobile Sidebar */}
      <MobileSidebar />

      {/* Backdrop overlay for mobile */}
      {isMobileOpen && <Backdrop onClick={() => setIsMobileOpen(false)} />}

      <div className="flex-1 bg-themeBackgroundColor transition-all duration-300 ease-in-out">
        {/* {loading ? <HeaderSkeleton /> : <Header />} */}
        <Header />

        {/* 🔹 Conditional breakpoints */}
        <div
          className={` mx-auto ${
            useBreakpoints
              ? ""
              : "  max-w-(--breakpoint-2xl) 2xl:max-w-(--breakpoint-3xl) 4xl:max-w-(--breakpoint-4xl)"
          }`}
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
    <BreakPointProvider>
      <LayoutContent />
    </BreakPointProvider>
  </SidebarProvider>
);

export default AppLayout;