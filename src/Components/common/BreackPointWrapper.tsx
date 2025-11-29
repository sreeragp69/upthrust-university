import React from "react";

const BreackPointWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" max-w-(--breakpoint-2xl) 2xl:max-w-(--breakpoint-3xl) 4xl:max-w-(--breakpoint-4xl) mx-auto px-15">
      {children}
    </div>
  );
};

export default BreackPointWrapper;
