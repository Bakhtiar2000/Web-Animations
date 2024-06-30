import { motion, useScroll } from "framer-motion";

const Assignment9 = () => {
  const { scrollYProgress } = useScroll();

  //   useMotionValueEvent(scrollYProgress, "change", (e) => {
  //     console.log("Progress: ", e);
  //   });

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="h-3 top-0 w-full fixed bg-green-500 flex justify-center items-center"
    ></motion.div>
  );
};

export default Assignment9;
