const Stagger = () => {
  const name = "Bakhtiar Fahim";
  const nameArr = name.split("");
  return (
    <>
      <h2 className="text-center text-2xl">Made By</h2>
      <div className="group">
        {nameArr.map((item, i) => (
          <span
            className="text-5xl font-bold ease-in-out duration-300 group-hover:text-rose-500 cursor-pointer"
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            {item}
          </span>
        ))}
      </div>
      <p className="flex justify-center text-sm mt-2">
        (Hover on the name above and the Dot below)
      </p>
    </>
  );
};

export default Stagger;
