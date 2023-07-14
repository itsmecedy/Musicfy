import BannerImg from "../assets/BannerImg.png";

const Hero = () => {
  return (
    <div className=" flex h-[400px] border border-red-600 object-cover bg-gradient-to-r from-[#d600c6] to-[#2f0428]">
      <div className=" flex-1">
        <p className="">No Ads &amp; Unlock All of Paid Songs</p>
        <p>Premium Membership</p>
        <p>
          "Ad-free music download your songs and listen to them offline. Shuttle
          and repeat all your music, skip songs without limits. Discover song
          lyrics and high-quality music. Download music to your account."
        </p>
        {/* upgrade now and learn more button */}
        <div>
          <button>Upgrade Now</button>
          <button>Learn More</button>
        </div>
      </div>
      <img
        src={BannerImg}
        alt="BannerImg"
        className=" h-full right-0 object-cover border border-red-600"
      />
    </div>
  );
};

export default Hero;
