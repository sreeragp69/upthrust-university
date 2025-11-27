"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { CourseCard } from "../ui/cards/CourseCard";
// import CourseCard from "../ui/cards/CourseCard"
// import { CourseCard } from "../ui/cards/CourseCard"
import courseImg1 from "../../assets/images/course/courseImg1.png";
import courseImg2 from "../../assets/images/course/courseImg2.png";

interface Course {
  id: number;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gameImage: string;
  cardBgColor: string;
  buttonText: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "B.TECH (CSE)",
    subtitle: "Game Development & Design",
    shortDescription: "B.TECH (CSE)",
    fullDescription:
      "Anyone who enjoys creating games and wants practical industry skills can pursue a creative, forward-thinking career path by pursuing a B.Tech (CSE) in Game Development & Design. This course combines actual game design, coding, animation, and real-time engine training with sound computer science principles. Students gain practical experience, work on fascinating projects, and study in a creative, encouraging environment that helps them develop into self-assured, employable game developers and designers.",
    image: courseImg1,
    gameImage: courseImg2,
    cardBgColor: "bg-[#ABFF92]",
    buttonText: "More Info",
  },
  {
    id: 2,
    title: "MCA",
    subtitle: "Game Development",
    shortDescription: "MCA",
    fullDescription:
      "Master of Computer Applications in Game Development is designed for graduates seeking advanced knowledge in game development technologies.",
    image: courseImg1,
    gameImage: courseImg2,
    cardBgColor: "bg-[#FFD0F5]",
    buttonText: "More Info",
  },
  {
    id: 3,
    title: "BCA",
    subtitle: "Game Development",
    shortDescription: "BCA",
    fullDescription:
      "Bachelor of Computer Applications in Game Development provides comprehensive training in game development fundamentals and industry practices.",
    image: courseImg1,
    gameImage: courseImg2,
    cardBgColor: "bg-[#D0DEFF]",
    buttonText: "More Info",
  },
];

export const HomeCourse: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course>(courses[0]);

  return (
    <div className="w-full py-12 md:py-16 lg:py-20 ">
      <div className=" mx-auto">
        {/* Top Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-3"
        >
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              title={course.title}
              subtitle={course.subtitle}
              backgroundColor={course.cardBgColor}
              onClick={() => setSelectedCourse(course)}
              isActive={selectedCourse.id === course.id}
              index={index}
            />
          ))}
        </motion.div>

        {/* Main Content Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`bg-[#D8FFCD] relative rounded-3xl overflow-hidden`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12  p-6 md:p-10 lg:p-12">
            {/* Left Image */}
            <div className="col-span-5  hidden xl:block"></div>
            <motion.div
              key={`image-${selectedCourse.id}`}
              // initial={{ opacity: 0, x: -50 }}
              // animate={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.6 }}
              className="hidden xl:flex  items-center justify-center  lg:col-span-5 absolute left-6 2xl:left-14   bottom-0"
            >
              <motion.img
                src={selectedCourse.image}
                alt="Game Developer"
                className="w-full h-96 xl:h-auto object-cover rounded-2xl"
                // whileHover={{ scale: 1.05 }}
                // transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* right Content */}
            <motion.div
              key={`content-${selectedCourse.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col  gap-8 col-span-7 "
            >
              <div>
                <motion.h2
                  className="text-xl md:text-2xl lg:text-3xl 2xl:text-5xl  text-black mb-1 font-bold font-montserrat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {selectedCourse.shortDescription}
                </motion.h2>
                <motion.h3
                  className="text-sm md:text-base 2xl:text-lg text-gray-800 font-bold font-montserrat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                >
                  {selectedCourse.subtitle}
                </motion.h3>
              </div>

              <div className="space-y-8">
                <motion.p
                  className="text-[#121212] text-sm md:text-base lg:text-base  xl:text-lg  2xl:text-xl font-light font-alexandria lg:leading-6 xl:leading-6  2xl:leading-7 xl:w-[65%]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {selectedCourse.fullDescription}
                </motion.p>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-20 rounded-full w-fit  transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {selectedCourse.buttonText}
                </motion.button>
              </div>

              {/* Right Image */}
              <motion.div
                key={`game-image-${selectedCourse.id}`}
                // initial={{ opacity: 0, x: 50 }}
                // animate={{ opacity: 1, x: 0 }}
                // transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center h-60 lg:h-96   justify-center lg:absolute bottom-0 right-5"
              >
                <motion.img
                  src={selectedCourse.gameImage}
                  alt="Game Screenshot"
                  className="w-fit right-0 bottom-0 absolute md:relative lg:w-full h-fit object-contain rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center justify-center mt-12 md:mt-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-script text-center mb-2 font-handlee text-black">
            Unique Blend Of Computer Science Fundamentals
          </h2>
        </motion.div>
      </div>
    </div>
  );
};
