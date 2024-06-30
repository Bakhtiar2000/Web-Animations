import { motion } from "framer-motion";

const Temp = () => {
  return (
    <div>
      <motion.div
        className="size-40 bg-indigo-500 rounded-lg"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ type: "spring", duration: 2 }}
      ></motion.div>
    </div>
  );
};

export default Temp;
