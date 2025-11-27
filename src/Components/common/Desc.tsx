import { motion } from 'framer-motion'

interface DescProps {
  desc: string
}

const Desc = ({ desc }: DescProps) => {
  return (
    <motion.p
    className="text-[#121212] text-sm md:text-base lg:text-lg  xl:text-xl  2xl:text-2xl font-light     font-alexandria lg:leading-6 xl:leading-6  2xl:leading-9!"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    {desc}
  </motion.p>
  )
}

export default Desc