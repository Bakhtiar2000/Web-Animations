import { motion } from "framer-motion";

const Temp = () => {
  return (
    <div className="border cursor-pointer border-red-500 flex flex-col items-center justify-center size-[400px]">
      <motion.div className="size-40 bg-indigo-500 rounded-lg"></motion.div>
    </div>
  );
};

export default Temp;
