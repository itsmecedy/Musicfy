import React from "react";
import BannerImg from "../assets/BannerImg.png";
import { BsPlayCircle } from "react-icons/bs";

// const songs = [
//   { id: 1, name: "Avery Davis", icon: <AiOutlineCoffee /> },
//   { id: 2, name: "Cahawa Dewi", icon: <BiBed /> },
//   { id: 3, name: "Neil Tran", icon: <GiWoodCabin /> },
//   { id: 4, name: "Soo jin Ae", icon: <CiHome /> },
//   { id: 5, name: "Yael Amari", icon: <FaUmbrellaBeach /> },
// ];

const Songs = () => {
  return (
    <div className="flex flex-col w-auto ">
      <div className="border w-52 ">
        <div className=" relative w-52 h-52 border border-red-600">
          <img className=" border rounded-3xl" src={BannerImg} alt="Image" />
          <div className="absolute inset-0 flex items-center justify-center">
            <BsPlayCircle className=" text-7xl" />
          </div>
        </div>
        <p className="text-lg text-center font-bold">BannerImg</p>
      </div>
      {/* <div>
        {songs.map((song) => (
          <div>{song.name}</div>
        ))}
      </div> */}
    </div>
  );
};
export default Songs;
