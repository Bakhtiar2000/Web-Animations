import { useAnimate } from "framer-motion";

const Animation6 = () => {
  const [scope, animate] = useAnimate();
  // scope is similar to ref
  const handleClick = () => {
    // animate is an array of array
    animate([
      [scope.current, { rotate: 90, opacity: 0.25 }],
      [scope.current, { rotate: 180, opacity: 0.5 }],
      [scope.current, { rotate: 270, opacity: 0.75 }],
      [scope.current, { rotate: 360, opacity: 1 }],
    ]);
  };
  return (
    <>
      <h2 className="text-4xl mb-2">Application of useAnimate</h2>
      <div className="border cursor-pointer border-red-500 flex flex-col items-center justify-center size-[400px] mb-10">
        <div
          ref={scope}
          onClick={handleClick}
          className="size-40 bg-indigo-500 rounded-lg"
        >
          <p className="flex justify-center items-center h-full text-white">
            Click me
          </p>
        </div>
      </div>
    </>
  );
};

export default Animation6;
