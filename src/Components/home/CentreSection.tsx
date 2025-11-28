import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import centreSectionImg1 from "../../assets/images/cards/centreSectionImg1.png";
import centreSectionImg2 from "../../assets/images/cards/centreSectionImg2.png";
import centreSectionImg3 from "../../assets/images/cards/centreSectionImg3.png";
import centreSectionImg4 from "../../assets/images/cards/centreSectionImg4.png";
import centreSectionImgBg from "../../assets/images/cards/centreSectionImgBg.png";
import GradientWrapper from "../common/GradientWrapper";

const CentreSectionCard1 = {
  image: centreSectionImg1,
  alt: "SAGA University Indore",
};
const CentreSectionCard2 = {
  image: centreSectionImg2,
  alt: "Prashanti Groups of Institutes",
  
};
const CentreSectionCard3 = {
  image: centreSectionImg3,
  alt: "Prashanti Groups of Institutes",
};
const CentreSectionCard4 = {
  image: centreSectionImg4,
  alt: "Prashanti Groups of Institutes",
};

const CentreSection = () => {
  const [isLoading, setIsLoading] = useState(true);

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <GradientWrapper
      topGradient={false}
      bottomGradient={false}
      image={centreSectionImgBg}
      className="mx-auto w-full  py-8 xs:py-10 px-3 lg:px-3 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
    >
  <div className="max-w-(--breakpoint-2xl) 2xl:max-w-(--breakpoint-3xl) 4xl:max-w-(--breakpoint-4xl) mx-auto">
  <motion.section
        className=" mb-36 lg:mb-20  xl:mb-10 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20   mx-auto lg:px-8 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="flex flex-col items-center   text-center lg:text-center w-full"
              variants={itemVariants}
            >
              <div className="flex items-center flex-col  lg:gap-1 justify-center lg:justify-start mb-4">
                <motion.h2
                  className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-[#1C1C1C] leading-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Our Centre of
                </motion.h2>
                <motion.h2
                  className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight text-[#1C1C1C]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Innovation
                </motion.h2>
              </div>
              <motion.p
                className="text-sm sm:text-base xl:text-xl justify-start text-center  md:text-sn  max-w-sm sm:max-w-sm md:max-w-md lg:max-w-[70%]  font-alexandria text-lightGray leading-relaxed xl:leading-7 "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                We have established “Centres of Excellence” at some of the
                leading universities of Madhya Pradhesh. <br /> Each centre is
                designed to nurture talent, foster collaboration and bring bold
                ideas to life. From game development to digital marketing we
                provide an ecosystem that encourages experimentation and
                excellence. These hubs empower learners and professionals to
                shape the future of digital innovation.
              </motion.p>
            </motion.div>

            {/* Right Cards */}
            <motion.div
              className="lg:grid flex flex-wrap sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-8 order-1 items-center justify-center lg:order-2"
              variants={itemVariants}
            >
              <CentreSectionCard
                image={CentreSectionCard1.image}
                alt={CentreSectionCard1.alt}
                variants={cardVariants}
              />

              <CentreSectionCard
                image={CentreSectionCard2.image}
                alt={CentreSectionCard2.alt}
                title={CentreSectionCard2.title}
                variants={cardVariants}
              />

              <CentreSectionCard
                image={CentreSectionCard3.image}
                alt={CentreSectionCard3.alt}
                title={CentreSectionCard3.title}
                variants={cardVariants}
              />
              <CentreSectionCard
                image={CentreSectionCard4.image}
                alt={CentreSectionCard4.title}
                title={CentreSectionCard4.title}
                variants={cardVariants}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
  </div>
    </GradientWrapper>
  );
};

interface CentreSectionCardProps {
  image: string;
  alt: string;
  title?: string;
}

const CentreSectionCard = ({
  image,
  alt,
  title,
  variants,
}: CentreSectionCardProps) => {
  return (
    <motion.div
      className="bg-white h-full p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl lg:rounded-[44px] shadow-theme-xs flex flex-col justify-between
       aspect-415/298 w-full max-w-[300px] sm:max-w-[350px] md:max-w-[250px] lg:max-w-[415px]  shadow-xl shadow-gray-300"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex-1 flex items-center justify-center">
        <img
          src={image}
          alt={alt}
          className="max-w-[60%] sm:max-w-[59%] md:max-w-[60%] xl:max-w-[80%] 2xl:max-w-[90%] object-contain"
        />
      </div>

      <p className="text-sm sm:text-base md:text-lg mt-2 lg:text-base 2xl:text-2xl! font-bold text-center text-black leading-tight">
        {title}
      </p>
    </motion.div>
  );
};

export default CentreSection;
