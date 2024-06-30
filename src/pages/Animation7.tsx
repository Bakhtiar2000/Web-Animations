import { motion, useDragControls } from "framer-motion";

const Animation7 = () => {
  const controls = useDragControls();
  return (
    <>
      <h2 className="text-4xl mb-5">
        Application of useDragControls (works like Slider pointer)
      </h2>
      <div className="overflow-hidden border border-red-500 flex pt-20 justify-center gap-10 size-[400px] mb-10">
        <div
          className="h-60 w-2 bg-red-500 rounded-lg cursor-pointer"
          onPointerDown={(e) => controls.start(e)}
        ></div>
        <motion.div drag="y" dragControls={controls} className="">
          <div className="size-40 bg-indigo-500 rounded-lg flex justify-center items-center text-white p-3 text-center mb-5">
            Slide on the red line to get up
          </div>
          <div className="size-40 bg-indigo-500 rounded-lg flex justify-center items-center text-white p-3 text-center mb-5">
            Slide on the red line to get up
          </div>
          <div className="size-40 bg-indigo-500 rounded-lg flex justify-center items-center text-white p-3 text-center mb-5">
            Slide on the red line to get up
          </div>
          <div className="size-40 bg-indigo-500 rounded-lg flex justify-center items-center text-white p-3 text-center mb-5">
            Slide on the red line to get up
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Animation7;
