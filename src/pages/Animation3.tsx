import { useAnimationControls } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Animation3 = () => {
  const controls = useAnimationControls();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    !toggle ? controls.start({ x: 120 }) : controls.start({ x: -120 });
  };

  useEffect(() => {
    controls.start((i) => ({
      x: i * i == 1 ? -100 : i == 2 ? -50 : -20,
      transition: { delay: i * 1 },
    })); // On first render
  }, []);
  return (
    <>
      <h2 className="text-4xl mb-2">Application of useAnimationControls</h2>
      <p className="flex justify-center text-sm mb-2">
        (Refresh the page and keep the cursor away from the red box)
      </p>
      <div
        onMouseEnter={() => controls.stop()} // stops animation when mouse enters
        onMouseLeave={() => controls.start({ x: 0, transition: { delay: 1 } })} // returns the boxes into x:0 position after a sec of mouse leaving
        className="border border-red-500 flex flex-col items-center justify-center size-96 mb-10"
      >
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={handleToggle}
            className="bg-green-500 mb-10 px-3 py-2 rounded text-white font-semibold"
          >
            {!toggle ? "Forward" : "Backward"}
          </button>
        </div>
        <motion.div
          animate={controls}
          custom={1}
          className="size-20 bg-indigo-500 rounded-lg mb-2"
        ></motion.div>
        <motion.div
          animate={controls}
          custom={2}
          className="size-20 bg-indigo-500 rounded-lg mb-2"
        ></motion.div>
        <motion.div
          animate={controls}
          custom={3}
          className="size-20 bg-indigo-500 rounded-lg mb-2"
        ></motion.div>
      </div>
    </>
  );
};

export default Animation3;
