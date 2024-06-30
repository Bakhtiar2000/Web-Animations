import { motion } from "framer-motion";

const Temp = () => {
  return (
    <>
      <h2 className="text-4xl mb-5">Application of </h2>
      <div className="border cursor-pointer border-red-500 flex flex-col items-center justify-center size-[400px] mb-10">
        <motion.div className="size-40 bg-indigo-500 rounded-lg"></motion.div>
      </div>
    </>
  );
};

export default Temp;
