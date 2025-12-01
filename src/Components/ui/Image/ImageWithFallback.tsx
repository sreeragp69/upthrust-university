import { useState } from "react";
import clsx from "clsx";
import FallbackImage from "../../../assets/images/error/fallback.png";
import { motion } from "framer-motion";

interface ImageWithFallbackProps {
  src?: string;
  alt?: string;
  className?: string;
  fallback?: string; // Path to fallback image
}

const ImageWithFallback = ({
  src,
  alt = "image",
  className,
  fallback = FallbackImage,
}: ImageWithFallbackProps) => {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // if no src is provided, just use fallback directly
  const displaySrc = !src || hasError ? fallback : src;

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl md:rounded-3xl lg:rounded-[40px] xl:rounded-3xl   2xl:rounded-[40px]   shadow-lg">
      {/* Loader while loading */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse" />
      )}

      <motion.img
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        src={displaySrc}
        alt={alt}
        className={clsx(
          "w-full h-full object-cover transition-opacity duration-300",
          loading ? "opacity-0" : "opacity-100",
          className
        )}
        loading="lazy"
        onLoad={() => setLoading(false)}
        onError={() => {
          if (!hasError) {
            setHasError(true);
            setLoading(false);
          }
        }}
      />
    </div>
  );
};

export default ImageWithFallback;
