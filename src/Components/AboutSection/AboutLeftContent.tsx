import { motion } from "framer-motion";
// import Button from "../ui/button/Button";
// import RightArrowIMg from "../../assets/images/button/Pattern.svg";
import PlacementsImg from "../../assets/images/about/placementsImg.png";
import type { Variants } from "framer-motion";
import Button from "../ui/button/Button";

interface AboutLeftContentProps {
  itemVariants: Variants;
}

const AboutLeftContent = ({ itemVariants }: AboutLeftContentProps) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-center sm:col-span-2 lg:col-span-4"
    >
      <motion.div
        className="flex flex-col gap-3 xl:gap-5 items-start"
        variants={itemVariants}
      >
        <Button
          children="TESTIMONIALS"
          className=" px-4!  scale-90 md:scale-95 -ml-2 lg:ml-0 lg:scale-100 text-xs!"
        />
        <motion.p
          className="text-lightGray text-xs lg:text-sm xl:text-sm 2xl:text-base  tracking-[0.02em] lg:leading-5 2xl:leading-6 font-alexandria"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          With clear instructions, examples, and insights that improve
          comprehension and memory. These films, which are intended to assist
          self-paced learning and ongoing skill development, help students
          understand difficult subjects by guiding them through principles,
          real-world applications, and industry practices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >

            <img src={PlacementsImg} alt="About Left Content" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// const RightArrowIcon = () => (
//   <img alt="Arrrow" className="w-6" src={RightArrowIMg} />
// );

export default AboutLeftContent;
