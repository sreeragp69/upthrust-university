// src/context/BreakPointContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, matchPath } from "react-router-dom";

interface BreakPointContextType {
  useBreakpoints: boolean;
}

const BreakPointContext = createContext<BreakPointContextType>({
  useBreakpoints: false,
});

export const BreakPointProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const [useBreakpoints, setUseBreakpoints] = useState(false);

  useEffect(() => {
    // Define routes where breakpoints should be applied
    const breakpointRoutes = [
      "/blog/:id",
      "/course",
      "/events",
      "/career",
      "/about-us",
      "/contact-us",
    ];

    const shouldUseBreakpoints = breakpointRoutes.some((route) =>
      matchPath({ path: route, end: true }, location.pathname)
    );

    setUseBreakpoints(!!shouldUseBreakpoints);
  }, [location.pathname]);

  return (
    <BreakPointContext.Provider value={{ useBreakpoints }}>
      {children}
    </BreakPointContext.Provider>
  );
};

export const useBreakPoint = () => useContext(BreakPointContext);
