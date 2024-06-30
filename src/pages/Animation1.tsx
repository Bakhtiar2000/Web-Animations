import { motion } from "framer-motion";

const Animation1 = () => {
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  const child = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <>
      <h2 className="text-4xl mb-2">Understanding of Parent Child</h2>
      <p className="flex justify-center text-sm mb-2">(Refresh the page)</p>
      <div>
        <motion.div
          className="flex flex-wrap gap-5 p-5 justify-center items-center size-64 bg-indigo-500 rounded-lg mb-10"
          variants={parent}
          initial="hidden"
          animate="visible"
          transition={{
            //   type: "spring",
            //   repeat: Infinity,
            //   repeatType: "reverse",
            ease: "easeInOut",
            duration: 2,
            delayChildren: 1, // Renders children after a sec of rendering parent.
            staggerChildren: 1, // Renders every child chronologically after 1 sec of previous child
          }}
        >
          <motion.div
            variants={child}
            className="size-20 bg-cyan-500"
          ></motion.div>
          <motion.div
            variants={child}
            className="size-20 bg-cyan-500"
          ></motion.div>
          <motion.div
            variants={child}
            className="size-20 bg-cyan-500"
          ></motion.div>
          <motion.div
            variants={child}
            className="size-20 bg-cyan-500"
          ></motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Animation1;
