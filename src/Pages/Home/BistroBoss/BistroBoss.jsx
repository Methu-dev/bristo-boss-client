import img from "../../../assets/home/chef-service.jpg";

const BistroBoss = () => {
  return (
    <div className="relative w-full">
      <img src={img} alt="img Missing" className="w-full h-auto" />
 
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-8 md:p-16 w-11/12 md:w-2/3 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
            Bistro Boss
          </h2>
          <p className="text-black text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BistroBoss;
