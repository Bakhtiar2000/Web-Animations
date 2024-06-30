const Stagger = () => {
  const name = "Bakhtiar Fahim";
  const nameArr = name.split("");
  return (
    <div className=" text-5xl font-bold group mb-8">
      {nameArr.map((item, i) => (
        <span
          className="ease-in-out duration-300 group-hover:text-rose-500 cursor-pointer"
          style={{ transitionDelay: `${i * 30}ms` }}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Stagger;
