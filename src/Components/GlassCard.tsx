
import { motion } from "framer-motion";

interface CardWrapperProps {
  children: React.ReactNode;
  className?: string; // optional extra styling
}

export default function CardWrapper({
  children,
  className = "",
}: CardWrapperProps) {
  
  return (
    <motion.div
      // ref={modalRef}
      className={` relative xl:w-full! h-full! glass-card  rounded-4xl overflow-hidden shadow-2xl ${className}`}
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      }}
    >
      {/* Inject any children inside */}
      <div className="relative z-50 w-full h-full">{children}</div>
      {/* Glass Filter Layer */}
      <div className="glass-filter" />

      {/* Glass Distortion Overlay */}
      <div className="glass-distortion-overlay " />

      {/* Glass Overlay */}
      <div className="glass-overlay" />

      {/* Glass Specular */}
     
    </motion.div>
  );
}
