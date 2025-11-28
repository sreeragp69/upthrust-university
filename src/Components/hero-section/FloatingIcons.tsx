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
      top: "100px",
      left: "9vw",
      delay: 0,
      scale: 1.2,
    },
    {
      id: 2,
      Icon: unityIcon,
      color: "bg-blue-500",
      top: "120px",
      right: "8vw",
      delay: 0.2,
      scale: 1.3,
    },
    {
      id: 3,
      Icon: unrealIcon,
      color: "bg-purple-400",
      top: "20px",
      right: "12vw",
      delay: 0.4,
      scale: 1,
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
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
            className={`absolute rounded-full  shadow-lg  size-16 lg:size-[unset]`}
            style={{ top, right, left }}
            alt=""
          />
        );
      })}
    </div>
  );
}
