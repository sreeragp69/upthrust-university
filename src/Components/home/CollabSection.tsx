import { motion } from "framer-motion";
import Title from "../common/Title";
import Desc from "../common/Desc";
import img1 from "../../assets/icon/img1.png";
import img2 from "../../assets/icon/img2.png";
import img3 from "../../assets/icon/img3.png";
import img4 from "../../assets/icon/img4.png";
import img5 from "../../assets/icon/img5.png";
import collabMan from "../../assets/images/home/collabMan.png";

const data = [
  {
    id: 1,
    imgae:   img1,
    description:
      "Industry-aligned curriculum integrated directly into college programs",
  },
  {
    id: 2,
    imgae:   img2,
    description: "Hands-on training through workshops, projects, and seminars",
  },
  {
    id: 3,
    imgae:   img3,
    description:
      "Enhanced creativity, critical thinking, and problem-solving abilities",
  },
  {
    id: 4,
    imgae:   img4,
    description:
      "Strong student portfolios that improve placement opportunities",
  },
  {
    id: 5,
    imgae:   img5,
    description:
      "A collaborative ecosystem that benefits students, faculty, and the institution",
  },
];

const CollabSection = () => {
  // Animation variants
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

  return (
    <motion.section
      id="about-us"
      className="mx-auto w-full  py-8 xs:py-10 px-3 lg:px-3 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="flex flex-col gap-4 items-center justify-center">
        <Title
          title="Why Collaboration With Us?"
          className="text-center xl:w-[60%] 2xl:w-[90%]"
        />
      </div>
      <motion.div
        className=" mx-auto  lg:mt-10   py-5  grid grid-cols-1 lg:grid-cols-7 gap-4 "
        variants={containerVariants}
      >
        <motion.p
          className="text-[#121212] col-span-3  text-xs md:text-sm lg:text-base  xl:text-base  2xl:text-2xl font-light     font-alexandria lg:leading-6 xl:leading-5  2xl:leading-9!"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          By working with us, you can provide{" "}
          <span className="font-bold text-themePrimary">
            your students with industry-focused learning, innovation, and
            knowledge.
          </span>{" "}
          We provide practical training that help develop practical skills under
          the guidance of seasoned mentors that help close the knowledge gap
          between theory and practice. Our strategy guarantees that students
          acquire real-world experience, build solid portfolios, and graduate
          prepared for the workforce, earning schools a reputation for turning
          out talented individuals.
        </motion.p>

        <div className="bg-[#E2ECFF]  p-6 xl:rounded-3xl 2xl:rounded-4xl relative col-span-4">
          <Title
            title="The Upthrust Eduversity"
            className="text-start! text-base! sm:text-base! md:text-lg! lg:text-xl! xl:text-2xl! 2xl:text-3xl! leading-tight!"
          />

          <div className="flex flex-col gap-3 mt-6 w-[60%]">
            {data.map((item) => (
              <div key={item.id} className="flex items-start gap-2">
                <img
                  src={item.imgae}
                  alt={item.description}
                  className="w-3.5 h-3.5 mt-1"
                />
                <p className="text-start! text-sm! sm:text-sm! md:text-base! lg:text-lg! xl:text-sm! 2xl:text-base! leading-tight! font-semibold font-alexandria">{item.description}</p>
              </div>
            ))}
          </div>


          <img src={collabMan} alt="collabMan" className="absolute bottom-0 -right-10 w-1/2 " />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CollabSection;
