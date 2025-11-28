"use client";

import { motion } from "framer-motion";

interface HowItWorksCardProps {
  number: number;
  title: string;
  subtitle: string;
  image: string;
  marginTopLg: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export default function HowItWorksCard({
  number,
  title,
  subtitle,
  image,
  marginTopLg,
}: HowItWorksCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      variants={cardVariants}
      whileHover="hover"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Image Container */}
      <motion.div
        className={`relative w-full  xl:h-96 h-52 aspect-square md:mb-6 rounded-2xl overflow-hidden  lg:p-4 flex items-center justify-center  ${marginTopLg} `}
      >
   
        <img
          src={image || "/placeholder.svg"}
          alt={`${title} ${subtitle}`}
          width={200}
          height={200}
          className="w-full h-full  object-contain"
        />
      </motion.div>

      <div className="flex gap-8 lg:gap-0 flex-row-reverse lg:flex-col items-center justify-center">
        {/* Title */}
        <motion.h3
          className="text-2xl sm:text-2xl md:text-base lg:text-lg font-bold text-black uppercase xl:leading-4 leading-7 -mb-5 text-start lg:text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {title} <br />
          <span className=" font-bold text-blue-600">{subtitle}</span>
        </motion.h3>

        {/* Number Display */}
        <motion.div
          className="mb-2 md:mb-3 lg:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-8xl text-outline   sm:text-5xl  md:text-6xl lg:text-7xl xl:text-9xl font-bold text-stroke  text-outline-2">
            {number}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
