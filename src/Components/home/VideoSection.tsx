import { motion } from "framer-motion";
import Title from "../common/Title";
import Desc from "../common/Desc";
import Video1 from "../../assets/images/video/videoImage.png";

const VideoSection = () => {
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

  return (
    <motion.section
      id="about-us"
      className="mx-auto w-full  xl:px-36 2xl:px-48 py-8 xs:py-10 px-3 lg:px-3 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
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
      <motion.div
        className=" mx-auto  lg:mt-10   py-5"
        variants={containerVariants}
      >
        <img
          src={Video1}
          alt="Video 1"
          className="w-full h-full object-cover  rounded-2xl"
        />
      </motion.div>
    </motion.section>
  );
};

export default VideoSection;
