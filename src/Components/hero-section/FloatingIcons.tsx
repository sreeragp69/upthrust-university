import { motion } from "framer-motion";
import unityIcon from "../../assets/images/hero/unity-icon.png";
import unrealIcon from "../../assets/images/hero/unreal-icon.png";
import SpecsIcon from "../../assets/images/hero/specs-icon.png";

export default function FloatingIcons() {
  const icons = [
    {
      id: 1,
      Icon: SpecsIcon,
      color: "bg-red-400",
      top: "90px",
      left: "11vw",
      delay: 0,
      scale: 1.2,
      size:"w-10 h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-20 2xl:h-20",
    },
    {
      id: 2,
      Icon: unityIcon,
      color: "bg-blue-500",
      top: "100px",
      right: "1vw",
      delay: 0.2,
      scale: 1.3,
      size:"w-10 h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 xl:w-15 xl:h-15 2xl:w-20 2xl:h-20",
    },
    {
      id: 3,
      Icon: unrealIcon,
      color: "bg-purple-400",
      top: "20px",
      right: "3vw",
      delay: 0.4,
      scale: 1,
      size:"w-10 h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-20 2xl:h-20",
    },
  ];

const randomFloatVariant = () => ({
    animate: {
      x: [0, Math.random() * 20 - 10, Math.random() * 20 - 10, 0],
      y: [0, Math.random() * 20 - 10, Math.random() * 20 - 10, 0],
      rotate: [0, Math.random() * 10 - 5, Math.random() * 10 - 5, 0],
    },
  });


  return (
    <div className="absolute inset-0  pointer-events-none overflow-hidden ">
      {icons.map((icon) => {
        const { top, right, left, delay } = icon;
        return (
          <motion.img
            src={icon.Icon}
            key={icon.id}
            variants={randomFloatVariant()}
            animate="animate"
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay,
              ease: "easeInOut",
            }}
            className={`absolute rounded-full shadow-lg ${icon.size} lg:size-[unset]`}
            style={{ top, right, left }}
            alt=""
          />
        );
      })}
    </div>
  );
}
