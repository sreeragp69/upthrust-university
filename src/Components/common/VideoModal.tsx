import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string | null;
  onClose: () => void;
}

const VideoModal = ({ isOpen, videoUrl, onClose }: VideoModalProps) => {
  if (!isOpen || !videoUrl) return null;

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Make sure autoplay = 1 only once
  const finalUrl = videoUrl.includes("?")
    ? `${videoUrl}&autoplay=1`
    : `${videoUrl}?autoplay=1`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-[999] p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl"
      >
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-black rounded-3xl overflow-hidden shadow-2xl border border-slate-800/50">
          <div className="relative bg-black">
            <div className="relative pb-[56.25%] h-0 overflow-hidden bg-black">
              <iframe
                src={finalUrl}
                className="absolute top-0 left-0 w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all duration-200 z-10"
            aria-label="Close video"
          >
            <X size={20} strokeWidth={2.5} />
          </motion.button>

          <div className="px-6 py-4 bg-gradient-to-r from-slate-900/50 to-slate-950/50 border-t border-slate-800/50 flex items-center justify-between">
            <p className="text-sm text-slate-400">Press ESC to close</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium backdrop-blur-md border border-white/20 transition-all duration-200"
            >
              Close
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VideoModal;
