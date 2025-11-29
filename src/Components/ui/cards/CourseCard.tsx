
import type React from "react"
import { motion } from "framer-motion"

interface CourseCardProps {
  title: string
  subtitle: string
  backgroundColor: string
  onClick?: () => void
  isActive?: boolean
  index?: number
}

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  subtitle,
  backgroundColor,
  onClick,
  isActive = false,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="w-full"
    >
      <motion.div
       
        whileTap={{ scale: 0.68 }}
        className={`${backgroundColor}  rounded-2xl md:rounded-4xl xl:rounded-2xl p-3 md:p-5 md:py-6 lg:p-4 xl:p-6 lg:py-10 xl:py-8 2xl:py-16 cursor-pointer transition-all duration-300 h-full flex flex-col items-center justify-center text-center`}
      >
        <motion.h3
          className="text-xl md:text-2xl lg:text-xl 2xl:text-2xl 3xl:text-5xl  text-black mb-1 xl:mb-0 font-bold font-montserrat"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-sm md:text-base lg:text-xs xl:text-xs 2xl:text-lg text-gray-800 font-bold font-montserrat"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
