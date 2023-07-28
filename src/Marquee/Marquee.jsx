import Marquee from "react-fast-marquee";
import backgroundImage from "../assets/Sky-Stars-Pattern.jpg"; 
import { ImPower } from "react-icons/im";
const MarqueeHead = () => {
  return (
    <div>
      <div
        className="w-full bg-cover bg-center text-white py-2"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Marquee speed={150} pauseOnHover className="flex  gap-10">
          <div className="lg:mx-20 flex items-center justify-center gap-2 mx-5 text-bold text-lg">
           <span><ImPower className="text-yellow-500"/></span> <span>shak_mark👜 WEEK SALE 2022 - THE BIGGEST SALE EVER - <span className="text-yellow-500 font-bold">50% OFF</span> </span>
          </div>
          <div className="lg:mx-20 flex items-center justify-center gap-2 mx-5 text-bold text-lg">
           <span><ImPower className="text-yellow-500"/></span> <span>SPECIAL OFFER: ENJOY 3 MONTHS OF shak_mark👜 FOR <span className="text-yellow-500 font-bold">$1/MONTH</span> </span>
          </div>
          <div className="lg:mx-20 flex items-center justify-center gap-2 mx-5 text-bold text-lg">
           <span><ImPower className="text-yellow-500"/></span> <span>SPECIAL OFFER: ENJOY 1 Week OF shak_mark👜  FOR <span className="text-yellow-500 font-bold">$1/WEEK</span> </span>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeHead;
