import { motion } from "framer-motion";
import SuccessStoryLeft from "../SuccessStory/SuccessStoryLeft";
import ImageWithFallback from "../ui/Image/ImageWithFallback";
import Title from "../common/Title";
import VideoModal from "../common/VideoModal";
import { useState } from "react";
import { Play } from "lucide-react";

const SuccessStory = () => {
  const [openModal, setOpenModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const videoList = [
    { id: "ies0MY2-duk" },
    { id: "Sf1ihkqo4uk" },
    { id: "Q9-GiLgiQMc" },
    { id: "T_p8VzLtkrQ" },
  ];

  const getThumbnail = (id: string) =>
    `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

  const getEmbedUrl = (id: string) => `https://www.youtube.com/embed/${id}`;

  const handleOpenVideo = (url: string) => {
    setVideoUrl(url);
    setOpenModal(true);
  };

  // Animation variants
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <motion.section
        id="about-us"
        className="mx-auto w-full  py-8 xs:py-10  lg:px-3 sm:py-12 md:py-16 xl:py-10 2xl:py-20 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <Title title="Student Success Story" />
        <motion.div
          className=" mx-auto  lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 py-5"
          variants={containerVariants}
        >
          {/* Left Text Section */}
          <SuccessStoryLeft itemVariants={itemVariants} />

          {/* Middle Images */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col h-full justify-center sm:col-span-2 lg:col-span-7"
          >
            <motion.div
              className="relative w-full lg:h-72 xl:h-80 2xl:h-112 overflow-hidden rounded-3xl lg:rounded-[40px] cursor-pointer group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => handleOpenVideo(getEmbedUrl(videoList[0].id))}
            >
              <ImageWithFallback
                className="w-full h-auto object-cover"
                src={getThumbnail(videoList[0].id)}
                alt="About section main"
              />

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-white/30 transition-all">
                  <Play size={36} className="text-white" />
                </div>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-3 gap-4 sm:gap-5 mt-4 sm:mt-6"
              variants={containerVariants}
            >
              {videoList.slice(1).map((item, index) => (
                <motion.div
                  key={index}
                  className="relative w-full sm:h-32 md:h-40 lg:h-40 xl:h-32 2xl:h-56 overflow-hidden rounded-2xl! md:rounded-3xl lg:rounded-[40px] xl:rounded-2xl   2xl:rounded-[40px]   group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  onClick={() => handleOpenVideo(getEmbedUrl(item.id))}
                >
                  <ImageWithFallback
                    className="w-full h-full object-cover"
                    src={getThumbnail(item.id)}
                    alt={`video thumbnail ${index + 2}`}
                  />

                     {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-1 md:p-4 xl:p-2 2xl:p-4 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-white/30 transition-all">
                  <Play size={36}     className="text-white/89 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"   />
                </div>
              </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* MODAL */}
      <VideoModal
        isOpen={openModal}
        videoUrl={videoUrl}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

export default SuccessStory;
