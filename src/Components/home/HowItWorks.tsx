"use client";

import { motion } from "framer-motion";

// import HowItWorksCard from "../ui/cards/HowItWorksCard"
import Title from "../common/Title";
import Desc from "../common/Desc";
import HowItWorksCard from "../ui/cards/HowItWorksCard";
import HowItWorksImg1 from "../../assets/images/home/HowItWorksImg1.png";
import HowItWorksImg2 from "../../assets/images/home/HowItWorksImg2.png";
import HowItWorksImg3 from "../../assets/images/home/HowItWorksImg3.png";
import HowItWorksImg4 from "../../assets/images/home/HowItWorksImg4.png";
import HowItWorksImg5 from "../../assets/images/home/HowItWorksImg5.png";

interface Step {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  marginTopLg: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "SELECT",
    subtitle: "PROGRAM",
    image: HowItWorksImg1,
    marginTopLg: "mt-0",
  },
  {
    id: 2,
    title: "GET TRAINED BY",
    subtitle: "MENTORS",
    image: HowItWorksImg2,
    marginTopLg: "lg:mt-24",
  },
  {
    id: 3,
    title: "BUILD REALTIME",
    subtitle: "PROJECTS",
    image: HowItWorksImg3,
    marginTopLg: "mt-0",
  },
  {
    id: 4,
    title: "GET",
    subtitle: "CERTIFIED",
    image: HowItWorksImg4,
    marginTopLg: "lg:mt-24",
  },
  {
    id: 5,
    title: "PLACEMENT",
    subtitle: "ASSISTANCE",
    image: HowItWorksImg5,
    marginTopLg: "mt-0",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-16 xl:py-10 2xl:py-20 px-4 sm:px-6 lg:px-8 ">
      <div className=" mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8 md:mb-12 lg:mb-16 xl:mb-6 2xl:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Title title="How its Works" />
        </motion.div>

        {/* Description Section */}
        <motion.div
          className=" mx-auto mb-12 md:mb-16 lg:mb-20 xl:mb-0 2xl:mb-20 px-4 w-[90%] text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Desc
            className="font-alexandria! font-normal! text-[#585D69]! text-sm md:text-base lg:text-lg  xl:text-sm  2xl:text-xl! xl:leading-4! 2xl:leading-7! "
            desc="Every student learns by doing and develops confidently into their chosen vocation thanks to collaborative tasks, creative challenges, and ongoing feedback. Our programs blend practical education with training pertinent to the workplace. After starting with fundamental ideas, students go on to useful projects that make use of actual tools. They put their knowledge to use, develop portfolios, and acquire employable skills under the guidance of knowledgeable mentors."
          />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5  gap-10 md:gap-6 lg:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step) => (
            <HowItWorksCard
              key={step.id}
              number={step.id}
              title={step.title}
              subtitle={step.subtitle}
              image={step.image}
              marginTopLg={step.marginTopLg}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
