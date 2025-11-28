// import { motion } from "framer-motion";
// import Title from "../common/Title";
// import Desc from "../common/Desc";
// import Video1 from "../../assets/images/video/videoImage.png";

// const VideoSection = () => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   return (
//     <motion.section
//       id="about-us"
//       className="mx-auto w-full  xl:px-36 2xl:px-48 py-8 xs:py-10 px-3 lg:px-3 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-50px" }}
//       variants={containerVariants}
//     >
//       <div className="flex flex-col gap-4 items-center justify-center">
//         <Title
//           title="Videos for Student Learning and Information"
//           className="text-center xl:w-[60%] 2xl:w-[90%] xl:leading-16"
//         />

//         <Desc
//           className="text-center text-[#585D69]! font-normal"
//           desc="With clear instructions, examples, and insights that improve comprehension and memory. These films, which are intended to assist self-paced learning and ongoing skill development, help students understand difficult subjects by guiding them through principles, real-world applications, and industry practices."
//         />
//       </div>
//       <motion.div
//         className=" mx-auto  lg:mt-10   py-5"
//         variants={containerVariants}
//       >
//         <img
//           src={Video1}
//           alt="Video 1"
//           className="w-full h-full object-cover  rounded-2xl"
//         />
//       </motion.div>
//     </motion.section>
//   );
// };

// export default VideoSection;

import { motion } from "framer-motion";
import Title from "../common/Title";
import Desc from "../common/Desc";
import Video1 from "../../assets/images/video/videoImage.png";
import VideoModal from "../common/VideoModal"; // Make sure this path is correct
import { useState } from "react";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  // Replace this with your actual YouTube video ID
  const YOUTUBE_VIDEO_ID = "XnkPOI-HRes"; // Change this to your real video

  const thumbnailUrl = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`;

  const openVideo = () => {
    setVideoUrl(embedUrl);
    setIsModalOpen(true);
  };

  // Animation variants (unchanged)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <>
      <motion.section
        id="about-us"
        className="mx-auto w-full xl:px-36 2xl:px-48 py-8 xs:py-10 px-3 lg:px-3 sm:py-12 md:py-16 lg:py-20 overflow-hidden bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="max-w-(--breakpoint-2xl) 2xl:max-w-(--breakpoint-3xl) 4xl:max-w-(--breakpoint-4xl) mx-auto">
          <div className="flex flex-col gap-4 items-center justify-center">
            <Title
              title="Videos for Student Learning and Information"
              className="text-center xl:w-[60%] 2xl:w-[90%] xl:leading-16"
            />
            <Desc
              className="text-center text-[#585D69]! font-normal"
              desc="With clear instructions, examples, and insights that improve comprehension and memory. These films, which are intended to assist self-paced learning and ongoing skill development, help students understand difficult subjects by guiding them through principles, real-world applications, and industry practices."
            />
          </div>

          {/* Clickable Video Thumbnail */}
          <motion.div
            className="mx-auto lg:mt-10 py-5 cursor-pointer group"
            variants={containerVariants}
            onClick={openVideo}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={thumbnailUrl}
                alt="Watch Video"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="p-5 md:p-6 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-white/30 transition-all duration-300 border border-white/30">
                  <Play
                    size={48}
                    className="text-white drop-shadow-2xl"
                    fill="white"
                    strokeWidth={1}
                  />
                </div>
              </div>

              {/* Optional: Pulse Effect */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-24 h-24 rounded-full bg-white/10 scale-0 group-hover:scale-150 animate-ping absolute" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Reusable Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        videoUrl={videoUrl}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default VideoSection;
