import { motion } from "framer-motion";
import { useRef } from "react";

const Animation2 = () => {
  const parent = {
    hidden: { x: 0, y: 0, opacity: 0 }, //scale: 0.9,
    visible: {
      opacity: 1,
      x: [0, 300, -300, 0], // Keyframe
      y: [0, 300, -300, 0],
      rotate: [0, 90, 180, 270], // degrees keyframe
      scale: 1,
      transition: {
        ease: "linear",
        duration: 3,
        repeat: Infinity,
        opacity: {
          repeat: Infinity, // opacity repeat
          duration: 1, // duration of opacity is differentiated from other properties opacity
        },
        rotate: {
          repeat: Infinity,
          delay: 2,
        },
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
    tap: {
      scale: 1,
      rotate: 60,
      boxShadow: "0px 5px 5px #000",
    },
  };

  const parentRef = useRef(null);

  return (
    <div
      ref={parentRef}
      className="border border-red-500 flex items-center justify-center w-60 h-60"
    >
      <motion.div
        className=" flex cursor-pointer flex-wrap gap-5 p-5 justify-center items-center size-32 bg-indigo-500 rounded-lg"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap" // Creates a tapping animation merging with whileHover
        // onHoverStart={() => console.log("Hover Starts")}
        // onHoverEnd={() => console.log("Hover Ends")}
        drag
        whileDrag={{ scale: 1.1, boxShadow: "0px 5px 5px #000" }}
        // dragSnapToOrigin // Returns the div to original point
        // dragElastic={1}
        dragConstraints={parentRef} // Keeps the drag area within the parent Div
        // dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
      ></motion.div>
    </div>
  );
};
export default Animation2;
