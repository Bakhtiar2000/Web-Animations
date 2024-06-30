import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Animation5 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true }); // Will only count inView for once
  console.log(inView);
  //   useEffect(() => {
  //     inView(ref.current as ElementOrSelector, (info) => {
  //       console.log("In-view: ", info);
  //     });
  //   }, []);
  return (
    <>
      <h2 className="text-4xl mb-5">Application of UseInView</h2>
      <div className="border cursor-pointer border-red-500 flex flex-col items-center justify-center size-[400px] mb-10">
        <motion.div
          ref={ref}
          animate={
            inView
              ? { opacity: 1, x: 0, transition: { delay: 1 } }
              : { opacity: 0, x: -500 }
          }
          className="size-40 bg-indigo-500 rounded-lg"
        ></motion.div>
      </div>
    </>
  );
};

export default Animation5;
