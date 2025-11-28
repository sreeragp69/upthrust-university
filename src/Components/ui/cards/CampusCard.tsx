import { motion } from "framer-motion"

interface Feature {
  id: number
  title: string
  icon: string
  bgColor: string
  textColor: string
}

interface CampusCardProps {
  feature: Feature
}

export const CampusCard = ({ feature }: CampusCardProps) => {



  return (
    <motion.div
     
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
     
      className={`${feature.bgColor}  rounded-4xl  lg:rounded-[45px] p-6 sm:px-8  lg:py-6 2xl:px-10 flex flex-row gap-4  lg:flex-col items-center    3xl:h- cursor-pointer relative overflow-hidden group`}
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className=" h-13 w-16  md:h-16 md:w-28  lg:h-11 lg:w-16  xl:h-16 xl:w-20   2xl:h-19 2xl:w-28 3xl:h-24 self-end lg:mb-4  relative z-10"
      >
        <img src={feature.icon} className="h-full w-full"   />
      </motion.div>

      {/* Title */}
      <motion.h3
        className={`${feature.textColor} lg:w- 2xl:w-[95%] self-baseline! sm:text-xl lg:text-xl 2xl:text-3xl 3xl:text-4xl font-bold text-start font-alexandria  leading-snug relative z-10`}
       
        transition={{ duration: 0.3 }}
      >
        {feature.title}
      </motion.h3>
    </motion.div>
  )
}
