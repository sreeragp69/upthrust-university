import { motion } from "framer-motion";
// import AboutLeftContent from "./AboutLeftContent";

import { useEffect, useState } from "react";
import ImageWithFallback from "../ui/Image/ImageWithFallback";
import AboutSecImg1 from "../../assets/images/about/SuccessStoryImg1.png";
import AboutSecImg2 from "../../assets/images/about/SuccessStoryImg2.png";
import AboutSecImg3 from "../../assets/images/about/SuccessStoryImg3.png";
import AboutSecImg4 from "../../assets/images/about/SuccessStoryImg4.png";
import AboutLeftContent from "../AboutSection/AboutLeftContent";

const AboutSection = () => {
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <motion.section
      id="about-us"
      className="mx-auto w-full  py-8 xs:py-10 px-3 lg:px-3 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-themeGray font-bold text-xl sm:text-xl md:text-2xl 2xl:text-4xl leading-9 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Student Success Story
      </motion.h2>
      <motion.div
        className=" mx-auto  lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 py-5"
        variants={containerVariants}
      >
        {/* Left Text Section */}
        <AboutLeftContent itemVariants={itemVariants} />

        {/* Middle Images */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col h-full justify-center sm:col-span-2 lg:col-span-8"
        >
          <motion.div
            className="w-full h-112 overflow-hidden rounded-3xl lg:rounded-[40px]  "
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ImageWithFallback
              className="w-full h-auto object-cover"
              src={AboutSecImg1}
              alt="About section main"
            />
          </motion.div>
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-5 mt-4 sm:mt-6"
            variants={containerVariants}
          >
            <motion.div
              className="w-full h-56 overflow-hidden rounded-3xl lg:rounded-[40px]  "
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                className="w-full h-full object-cover"
                src={AboutSecImg2}
                alt="About section secondary 1"
              />
            </motion.div>
            <motion.div
              className="w-full h-56 overflow-hidden rounded-3xl lg:rounded-[40px]   "
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                className="w-full h-full object-cover"
                src={AboutSecImg3}
                alt="About section secondary 2"
              />
            </motion.div>
            <motion.div
              className="w-full h-56 overflow-hidden rounded-3xl lg:rounded-[40px]   "
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                className="w-full h-full object-cover"
                src={AboutSecImg4}
                alt="About section secondary 2"
              />
            </motion.div>
          </motion.div>
        </motion.div>

     
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
