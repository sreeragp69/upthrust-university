import { motion } from "framer-motion";
import PlacementsImg from "../../assets/images/about/placementsImg.png";
import type { Variants } from "framer-motion";
import Button from "../ui/button/Button";
import Desc from "../common/Desc";
import Title from "../common/Title";

interface AboutLeftContentProps {
  itemVariants: Variants;
}

const AboutLeftContent = ({ itemVariants }: AboutLeftContentProps) => {
  return (
    <motion.div variants={itemVariants} className="flex items-center md:mt-5">
      <motion.div
        className="flex flex-col  gap-3 xl:gap-5 md:items-start items-start lg:items-start"
        variants={itemVariants}
      >
        <div className="flex  flex-col items-start ">
          <Title
            title="About"
            className="text-lg! sm:text-xl! md:text-2xl! lg:text-3xl! xl:text-3xl! 3xl:text-5xl! leading-tight! 2xl:leading-7! 3x:leading-tight!"
          />
          <Title
            title="The Upthrust Eduversity"
            className="text-lg! sm:text-xl! md:text-2xl! lg:text-3xl! xl:text-3xl! 3xl:text-5xl! leading-tight!"
          />
        </div>
        <div className="md:w-full  space-y-2 md:space-y-6 lg:w-4/5 xl:w-[90%] 2xl:w-4/5">
          <motion.p
            className="text-[#121212]  text-xs md:text-sm lg:text-base  xl:text-base 2xl:text-xl   3xl:text-2xl font-light     font-alexandria lg:leading-6 xl:leading-5 2xl:leading-6 3xl:leading-9!"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            The goal of{" "}
            <span className="font-bold text-themePrimary">
              Upthrust Education
            </span>{" "}
            is to establish a classroom where students can actually learn by
            doing. Our programs blend industry-focused coursework, hands-on
            project training, and innovative teaching techniques to give
            students real-world, employable skills.
          </motion.p>
          <motion.p
            className="text-[#121212] text-xs md:text-sm lg:text-base  xl:text-base 2xl:text-xl 3xl:text-2xl font-light   text-start  font-alexandria lg:leading-6 xl:leading-5 2xl:leading-7  3xl:leading-9!"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We bridge the gap between education and employment for aspirational
            learners, ensuring that businesses acquire qualified people and
            investors witness scalable growth. With an emphasis on practical
            experience, creative projects, and career-focused education, <span className="font-bold ">The Upthrust Eduversity</span> enables students to confidently enter the
            workforce by transforming their enthusiasm and expertise into actual
            chances for success.
          </motion.p>
        </div>

       
      </motion.div>
    </motion.div>
  );
};

export default AboutLeftContent;
