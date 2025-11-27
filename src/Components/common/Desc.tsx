import { motion } from 'framer-motion'

interface DescProps {
  desc: string
  className?: string
}

const Desc = ({ desc, className }: DescProps) => {
  return (
    <motion.p
    className={`text-[#121212] text-xs md:text-sm lg:text-base  xl:text-base  2xl:text-2xl font-light     font-alexandria lg:leading-6 xl:leading-6  2xl:leading-9! ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    {desc}
  </motion.p>
  )
}

export default Desc