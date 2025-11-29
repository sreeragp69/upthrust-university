import { motion } from 'framer-motion'
import clsx from 'clsx'

interface TitleProps {
  title: string
  className?: string
}

const Title = ({ title, className }: TitleProps) => {
  return (
    <motion.h2
    className={clsx("text-themeGray font-bold text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-[42px] 3xl:text-6xl leading-9 text-center", className)}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    {title}
  </motion.h2>
  )
}

export default Title