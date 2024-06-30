import { motion, useCycle } from "framer-motion";

const Animation4 = () => {
  const boxAnimations = [
    { x: 100, y: 100, opacity: 0.25 },
    { x: -100, y: 100, opacity: 0.5 },
    { x: -100, y: -100, opacity: 0.75 },
    { x: 100, y: -100, opacity: 1 },
  ];
  //   const [x, cycle] = useCycle(0, 100, -100, 300, -300); // Cycle positions
  const [animate, cycle] = useCycle(...boxAnimations);
  return (
    <>
      <h2 className="text-4xl mb-5">Application of useCycle</h2>
      <div className="border cursor-pointer border-red-500 flex flex-col items-center justify-center size-[400px] mb-10">
        <motion.div
          // animate={{x:x}}
          animate={animate}
          onTap={() => cycle()}
          className="size-40 bg-indigo-500 rounded-lg"
        ></motion.div>
      </div>
    </>
  );
};

export default Animation4;
