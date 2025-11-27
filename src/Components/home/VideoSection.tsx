import { motion } from "framer-motion";

import AboutSecImg1 from "../../assets/images/about/SuccessStoryImg1.png";
import AboutSecImg2 from "../../assets/images/about/SuccessStoryImg2.png";
import AboutSecImg3 from "../../assets/images/about/SuccessStoryImg3.png";
import AboutSecImg4 from "../../assets/images/about/SuccessStoryImg4.png";

import SuccessStoryLeft from "../SuccessStory/SuccessStoryLeft";
import ImageWithFallback from "../ui/Image/ImageWithFallback";
import Title from "../common/Title";
import Desc from "../common/Desc";

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
      className="mx-auto w-full  xl:px-48 py-8 xs:py-10 px-3 lg:px-3 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <Title title="Videos for Student Learning and Information" />

      <Desc desc="With clear instructions, examples, and insights that improve comprehension and memory. These films, which are intended to assist self-paced learning and ongoing skill development, help students understand difficult subjects by guiding them through principles, real-world applications, and industry practices." />
      <motion.div
        className=" mx-auto  lg:mt-10   py-5"
        variants={containerVariants}
      ></motion.div>
    </motion.section>
  );
};

export default VideoSection;
