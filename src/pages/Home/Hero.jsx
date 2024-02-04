const Hero = () => {
  return (
    <div className=" py-24 ">
      <div className=" flex items-center justify-between mx-40">
        <div className="lg:basis-1/2 basis-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Your E-Commerce Store</h1>
          <p className="text-lg md:text-xl mb-8">Discover amazing products just for you</p>
          <p className="text-sm md:text-base mb-8">Shop from a wide range of categories and find the perfect items for you.</p>
          <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-bold">Shop Now</button>
        </div>
        <div className="lg:basis-1/2 basis-full">
          <img
            className="w-[500px] h-[500px] md:rounded-lg"
            src="https://i.ibb.co/YT4WpdL/online-fashion-shopping.png"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
