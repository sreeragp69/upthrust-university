import { motion } from "framer-motion";
import LaptopBoy from "../../assets/images/hero/laptop_boy.png";
import FloatingIcons from "../hero-section/FloatingIcons";
import SubscriptionForm from "../hero-section/SubscriptionForm";

export default function HeroSection() {
  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse xl:grid xl:grid-cols-12 gap-y-16 items-center justify-between py-16 xl:pb-1 2xl:py-16 lg:mt-3">
        <SubscriptionForm display="block" />

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 relative col-span-7"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl md:text-5xl  2xl:text-6xl 4xl:text-7xl font-medium  text-black  font-monument  uppercase "
          >
            Developing <br className="hidden md:block" /> the Upcoming{" "}
            <br className="hidden md:block" />
            Generation of <br className="hidden md:block" /> Artists
          </motion.h1>

          {/* Description */}
          <motion.div
            
            className="mb-8 mt-8 xl:mb-1 xl:mt-1 2xl:mb-8 2xl:mt-8"
          >
            <p className="text-gray-600 text-xl xl:text-base 2xl:text-2xl font-light leading-tight mb-2 xl:absolute max-w-xs xl:max-w-84 2xl:max-w-lg xl:right-12 3xl:-right-28 2xl:-right-40 4xl:-right-20 bottom-10 xl:bottom-4 2xl:bottom-10  font-alexandria">
              The main goal of{" "}
              <span className="font-medium text-blue-600">
                The Upthrust Eduversity
              </span>{" "}
              is to assist you in gaining practical skills through practical
              instruction that genuinely gets you ready for a career.
            </p>
          </motion.div>

          {/* Trusted By Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-white rounded-2xl 2xl:rounded-3xl px-6 py-2 xl:px-3 xl:px-4 2xl:px-6  2xl:py-4 w-fit shadow-lg"
          >
            <div className="flex items-center gap-3">
              <span className="text-gray-700 font-medium text-lg xl:text-sm 2xl:text-lg leading-5 text-center font-alexandria ">
                Trusted By 2000+ <br />{" "}
                <span className="text-blue-600">STUDENTS</span>
              </span>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Laptop Boy with Floating Icons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex- relative flex flex-col gap-10 xl:gap-8 2xl:gap-24 justify-center items-end col-span-5 -mt-15"
        >
          {/* Placeholder for Laptop Boy Image */}
          <div className="relative w-full h-96 xl:h-85  flex items-center justify-end ">
            <img src={LaptopBoy} alt="boy with laptop" className="xl:h-full " />
          </div>
          <FloatingIcons />
          <SubscriptionForm display="hidden" />
        </motion.div>
      </div>
    </>
  );
}
