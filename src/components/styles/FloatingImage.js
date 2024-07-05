import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import TempDisplay from "../../RoughAssets/TempDisplay.png"

const FloatingImage = () => {
  return (
    <section className="grid place-content-center ">
      <FloatingPhone />
    </section>
  );
};

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-aurumgreen-400"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative rounded-[24px] border-2 border-b-4 border-r-4 border-white bg-white p-1 pl-[3px] pt-[3px]"
      >
        <img src={TempDisplay} className="rounded-[24px] "/>
      </motion.div>
    </div>
  );
};

export default FloatingImage;