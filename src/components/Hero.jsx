import BannerImg from "../assets/BannerImg.png";
import { FaCrown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className=" relative flex h-[400px] object-cover bg-gradient-to-r from-[#cb00bb] to-[#44003d] to-30%">
      <div className=" flex-1 m-10">
        <div className="flex items-center space-x-3 ">
          <FaCrown className=" text-5xl" />
          <p className="text-4xl">No Ads &amp; Unlock All of Paid Songs</p>
        </div>
        <p className="text-8xl font-medium my-4">Premium Membership</p>
        <p className=" max-w-[1060px] text-xl">
          "Ad-free music download your songs and listen to them offline. Shuttle
          and repeat all your music, skip songs without limits. Discover song
          lyrics and high-quality music. Download music to your account."
        </p>
        {/* upgrade now and learn more button */}
        <div className=" space-x-8 my-8">
          <button className=" bg-[#f155e4] text-[#dddddd] px-12 py-4 rounded-full text-2xl">
            Upgrade Now
          </button>
          <button className=" bg-[#480040] text-[#f155e4] px-12 py-4 rounded-full text-2xl border border-[#f155e4]">
            Learn More
          </button>
        </div>
      </div>
      <img
        src={BannerImg}
        alt="BannerImg"
        className=" absolute h-full right-0 object-cover"
      />
    </div>
  );
};

export default Hero;
