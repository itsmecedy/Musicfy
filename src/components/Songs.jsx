import React from "react";
import { BsPlayCircle } from "react-icons/bs";

const images = [
  {
    imageUrl: "../src/assets/song1.jpg",
    songName: "Avery Davis",
  },
  {
    imageUrl: "../src/assets/song2.jpg",
    songName: "Cahaya Dewi",
  },
  {
    imageUrl: "../src/assets/song3.jpg",
    songName: "Neil Tran",
  },
  {
    imageUrl: "../src/assets/song4.jpg",
    songName: "Soo Jin Ae",
  },
  {
    imageUrl: "../src/assets/song5.jpg",
    songName: "Yael Amari",
  },
];

const Songs = () => {
  return (
    <div className=" flex justify-between">
      {images.map((image, index) => (
        <div key={index} className=" w-56 group">
          <div className=" relative w-56 h-56 object-cover group-hover:scale-105 ">
            <img
              src={image.imageUrl}
              alt={`Image ${index + 1}`}
              className="  rounded-3xl w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <BsPlayCircle className=" text-7xl" />
            </div>
          </div>
          <p className="text-2xl mt-3 hover:text-[#f155e4]  text-center font-medium tracking-wider">
            {image.songName}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Songs;
