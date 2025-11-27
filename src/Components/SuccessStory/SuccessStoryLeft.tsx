import { motion } from "framer-motion";
import PlacementsImg from "../../assets/images/about/placementsImg.png";
import type { Variants } from "framer-motion";
import Desc from "../common/Desc";

interface SuccessStoryLeftProps {
  itemVariants: Variants;
}

const SuccessStoryLeft = ({ itemVariants }: SuccessStoryLeftProps) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-center sm:col-span-2 lg:col-span-5 md:mt-5"
    >
      <motion.div
        className="flex flex-col md:flex-row lg:flex-col gap-3 xl:gap-5 md:items-end items-start lg:items-start"
        variants={itemVariants}
      >
        <div className="md:w-full  space-y-2 md:space-y-6 lg:w-4/5">
          <span className="bg-themePrimary text-white shadow-theme-xs rounded-full inline-flex font-alexandria   items-center justify-center gap-2  transition px-3.5 py-2  md:px-5 md:py-3  text-[9px]  md:text-sm">
            TESTIMONIALS
          </span>

          <Desc
            desc="With clear instructions, examples, and insights that improve
            comprehension and memory. These films, which are intended to assist
            self-paced learning and ongoing skill development, help students
            understand difficult subjects by guiding them through principles,
            real-world applications, and industry practices."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center w-full  justify-center lg:justify-start md:ml-10 h-full lg:ml-0"
        >
          <img
            src={PlacementsImg}
            alt="About Left Content"
            className="w-fit  h-full md:h-40  lg:h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SuccessStoryLeft;
