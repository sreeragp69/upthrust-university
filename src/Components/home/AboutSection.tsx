import { motion } from "framer-motion";

import abtImage1 from "../../assets/images/abtImages/abtImage1.png";
import abtImage2 from "../../assets/images/abtImages/abtImage2.png";
import abtImage3 from "../../assets/images/abtImages/abtImage3.png";
// import AboutSecImg4 from "../../assets/images/abtImages/abtImage4.png";
import AboutLeftContent from "../AboutSection/AboutLeftContent";

const AboutSection = () => {
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
    <motion.section
      id="about-us"
      className="mx-auto w-full  py-8 xs:py-10 px-3 lg:px-3 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <motion.div
        className=" mx-auto  lg:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 py-5"
        variants={containerVariants}
      >
        {/* Left Text Section */}
        <AboutLeftContent itemVariants={itemVariants} />

        {/* right Images */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 py-5 flex-col h-full justify-center "
        >
          <div>
            <div className="w-full">
              <img
                src={abtImage1}
                alt="About Image 1"
                className="w-full h-96 sm:h-auto  lg:h-full object-contain"
              />
            </div>
            <div>
              <div className="w-full h-72 sm:h-fit hidden sm:block">
                <img
                  src={abtImage3}
                  alt="About Image 3"
                  className="w-full h-full object-contain "
                />
              </div>
            </div>
          </div>
          <div>
           <div>
           <img
              src={abtImage2}
              alt="About Image 2"
              className="w-full h-140 sm:h-auto object-contain"
            />
           </div>

            <div className="w-full   sm:hidden">
              <img
                src={abtImage3}
                alt="About Image 3"
                className="w-full h-44 object-contain "
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
