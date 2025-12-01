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
          <span className="bg-themePrimary text-white shadow-theme-xs rounded-full inline-flex font-alexandria   items-center justify-center gap-2  transition px-3.5 py-2  md:px-5 md:py-3 xl:py-2 2xl:py-3 text-[9px]  md:text-sm xl:text-[10px] 2xl:text-sm">
            TESTIMONIALS
          </span>

          <Desc
            desc="At The Upthrust, every student’s journey is a testament to what passion, the right guidance, and hands-on learning can achieve. From beginners taking their first step into the world of game development and digital marketing to professionals transforming their careers, our learners consistently turn their dreams into real, measurable success. Their projects, internships, company placements, and entrepreneurial breakthroughs reflect the quality of training and mentorship they receive here. These success stories aren’t just achievements — they’re proof of how The Upthrust empowers students to level up their skills, confidence, and future."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center w-full  justify-center lg:justify-start md:ml-10 h-full lg:ml-0 xl:h-32 4xl:h-48"
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
