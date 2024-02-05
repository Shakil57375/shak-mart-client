const Hero = () => {
  return (
    <div className=" py-16">
      <div className=" flex items-center justify-between px-40">
        <div className="lg:basis-1/2 basis-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Your E-Commerce Store
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover amazing products just for you
          </p>
          <p className="text-sm md:text-base mb-8">
            Shop from a wide range of categories and find the perfect items for
            you.
          </p>
          <button className="bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 !rounded-full hover:bg-gradient-to-l hover:to-orange-500 hover:from-red-500 font-bold text-white transition-all duration-500 hover:-translate-x-2 hover:-translate-y-2">
            Shop Now
          </button>
        </div>
        <div className="lg:basis-1/2 basis-full">
          <img
            className="w-full h-[600px] md:rounded-lg"
            src="https://i.ibb.co/YT4WpdL/online-fashion-shopping.png"
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
