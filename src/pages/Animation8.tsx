import { motion, useMotionValue, useTransform } from "framer-motion";

const Assignment8 = () => {
  const x = useMotionValue(30); // initially moved 30px from origin
  const opacity = useTransform(
    x,
    [0, 200], // when x moves from 0 to 500-->
    [1, 0] // opacity reduces from 1 to 0 gradually
  );
  const scale = useTransform(x, [-200, 200], [0.5, 1.5]);
  const rotate = useTransform(x, [-200, 200], [0, 180]);

  return (
    <>
      <h2 className="text-4xl mb-5">
        Application of useMotionValues & useTransform
      </h2>
      <div className="border border-red-500 flex flex-col items-center justify-center size-[400px] mb-10">
        <motion.div
          style={{ x, opacity, scale, rotate }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragSnapToOrigin
          className="size-40 bg-indigo-500 rounded-lg cursor-pointer"
        >
          <p className="flex justify-center items-center h-full text-white">
            Drag me
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Assignment8;
