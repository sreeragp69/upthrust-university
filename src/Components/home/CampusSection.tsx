"use client";

import { motion } from "framer-motion";
import GradientWrapper from "../common/GradientWrapper";
import CampusImage from "../../assets/images/campus/campusImg.png";
import CampusImage1 from "../../assets/images/campus/campusImg1.png";
import CampusImage2 from "../../assets/images/campus/campusImg2.png";
import CampusImage3 from "../../assets/images/campus/campusImg3.png";
import CampusImage4 from "../../assets/images/campus/campusImg4.png";
import { CampusCard } from "../ui/cards/CampusCard";
import Desc from "../common/Desc";

// import { CampusCard } from "./CampusCard"

const campusFeatures = [
  {
    id: 1,
    title: "Incorporating these courses into your curriculum.",
    icon: CampusImage1,
    bgColor: "bg-[#D3FF9E]",
    textColor: "text-[#272B32]",
  },
  {
    id: 2,
    title: "Providing cutting-edge learning opportunities.",
    icon: CampusImage2,
    bgColor: "bg-[#FCFF9E]",
    textColor: "text-[#272B32]",
  },
  {
    id: 3,
    title: "Bridging the gap between education and employment.",
    icon: CampusImage3,
    bgColor: "bg-[#9EF9FF]",
    textColor: "text-[#272B32]",
  },
  {
    id: 4,
    title: "Preparing graduates to confidently enter high-demand careers.",
    icon: CampusImage4,
    bgColor: "bg-[#FF9EA0]",
    textColor: "text-[#272B32]",
  },
];

const CampusSection = () => { 
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <GradientWrapper
      topGradient={true}
      bottomGradient={true}
      image={CampusImage}
      
      className="mx-auto w-full  py-8 xs:py-10 sm:py-12 md:py-16 xl:py-10 2xl:py-20 overflow-hidden "
    >
    <div className="max-w-(--breakpoint-2xl) 2xl:max-w-(--breakpoint-3xl) 4xl:max-w-(--breakpoint-4xl) mx-auto  lg:px-10 px-5">
    <motion.div
    id="campus"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col items-center justify-center "
      >
        {/* Heading Section */}
        <motion.div
          variants={itemVariants}
          className="mb-2 sm:mb-2 lg:mb-5 text-center xl:w-[55%] 2xl:w-[60%] w-full"
        >
          <h1 className="text-themeGray font-bold text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-6xl leading-9 2xl:leading-15 text-centermb-2 ">
            Bring Industry-Ready Courses to
            <span className="text-blue-600"> your Campus</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-1 sm:mb-2 lg:mb-3 "
        >
          <p className="text-sm sm:text-sm md:text-base font-alexandria lg:text-lg xl:text-lg 2xl:text-2xl  text-gray-700 leading-relaxed">
            <span className="text-gray-600">Upgrade </span>
            <span className=" text-red-600">Your Campus</span>
            <span className="text-gray-600"> With Industry-Focused, </span>
            <span className=" text-red-600">Future-Ready Learning</span>
          </p>
        </motion.div>

        {/* Description Text */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8 sm:mb-12 lg:mb-16 w-[80%] xl:w-[70%] 2xl:w-[80%]"
        >
          <Desc
          className="  xl:text-sm! 4xl:text-xl! xl:leading-4! 2xl:leading-7! xl:font-normal! 4xl:leading-6!"
            desc="  In order to ensure that students get both theoretical knowledge and
            practical experience, our programs are made to integrate practical
            learning, real-world resources, and innovative teaching techniques.
            Students work on real projects, create portfolios, and get ready for
            the workforce right away under the direction of seasoned industry
            mentors."
          />
        </motion.div>

        {/* Center Text */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-10 sm:mb-14 lg:mb-20 xl:mb-5 2xl:mb-20 w-[95%] xl:w-[40%] 2xl:w-[50%]  font-alexandria "
        >
          <h2 className="text-base  sm:text-3xl xl:text-2xl 2xl:text-4xl font-semibold text-[#222428] leading-snug">
            Your campus may become a center of innovation and talent by
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 xl:gap-4 2xl:gap-6 w-full "
        >
          {campusFeatures.map((feature) => (
            <CampusCard key={feature.id} feature={feature} />
          ))}
        </motion.div>
      </motion.div>
    </div>
    </GradientWrapper>
  );
};

export default CampusSection;
