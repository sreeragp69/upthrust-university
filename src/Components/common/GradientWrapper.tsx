import React from "react";
import clsx from "clsx";

type GradientWrapperProps = {
  children?: React.ReactNode;
  image: string;
  topGradient?: boolean;
  bottomGradient?: boolean;
  alt?: string;
  className?: string;
  ImageClassName?: string;
};

const GradientWrapper = ({
  children,
  image,
  topGradient,
  bottomGradient,
  alt,
  className,
  ImageClassName,
}: GradientWrapperProps) => {
  return (
    <div
      className={clsx(
        "relative w-full  overflow-hidden",
        className
      )}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={alt || "background image"}
        className={clsx(
          "absolute inset-0 w-full h-full object-cover object-center",
          ImageClassName
        )}
      />

      {/* Top Gradient */}
      {topGradient && (
        <div className="absolute inset-0 bg-gradient-to-b from-themeBackgroundColor to-transparent"></div>
      )}

      {/* Bottom Gradient */}
      {bottomGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-themeBackgroundColor to-transparent"></div>
      )}

      {/* Content Above Background */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientWrapper;
