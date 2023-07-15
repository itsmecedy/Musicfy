import { FiSearch } from "react-icons/fi";
import { BsFillMicFill } from "react-icons/bs";
import Profile from "../assets/Profile.jpg";

const header = () => {
  return (
    <div className=" flex items-center justify-between my-6">
      {/* Left side */}
      <div className="text-4xl tracking-wider">Welcome, ItsMeCedy!</div>
      {/* right side */}
      <div className="flex items-center space-x-6 flex-wrap py-6">
        {/* search bar */}
        <div className="flex-row flex justify-center items-center bg-[#3b3b3b] space-x-5 rounded-full px-3 py-2 text-2xl ">
          <FiSearch className="hover:cursor-pointer" />
          <input
            type="text"
            placeholder="Artist, Music, Album, etc."
            className=" outline-none bg-[#3b3b3b] placeholder-[#dddddd] capitalize "
          />
          <BsFillMicFill />
        </div>
        {/* profile */}
        <img
          src={Profile}
          alt="Profile"
          className=" w-12 h-12 object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default header;
