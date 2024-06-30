import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Animation10 = () => {
  const [visible, setVisible] = useState(true);
  const box = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y: 200,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <>
      <h2 className="text-4xl mb-5">Using AnimatePresence On Exit</h2>
      <div className="border cursor-pointer border-red-500 flex flex-col items-center justify-center size-[400px] mb-10">
        <AnimatePresence>
          <motion.button
            layout // makes the button appear smoothly
            onClick={() => setVisible((p) => !p)}
            className="bg-green-500 mb-5 px-3 py-2 rounded text-white font-semibold"
          >
            {visible ? "Visible" : "Hidden"}
          </motion.button>
          {visible && (
            <motion.div
              className="flex flex-wrap gap-5 p-5 justify-center items-center size-64 bg-indigo-500 rounded-lg mb-10"
              variants={box}
              initial="hidden"
              animate="visible"
              exit="exit" // exit property used to make a smooth exit
            >
              <p className="flex justify-center items-center h-full text-white text-center">
                Th green button smoothly comes down when this box disappears
                because of the use of AnimatePresence
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Animation10;
