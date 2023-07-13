import React from "react";
import { BiSolidPlaylist } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { GiMusicalNotes } from "react-icons/gi";
import { BsFillBellFill, BsFillGearFill } from "react-icons/bs";
import { MdLogout, MdPlaylistAdd } from "react-icons/md";

const Aside = () => {
  return (
    <div className="flex">
      <div className="flex text-left flex-col font-semibold tracking-wider h-screen bg-[#3B3B3B] w-80 ">
        {/* logo */}
        <div className=" flex text-5xl mx-auto my-20  hover:cursor-pointer hover:text-[#ED55E8]">
          <GiMusicalNotes />
          <div>Musicfy</div>
        </div>
        {/* Menu */}
        <div className=" space-y-6 ml-8 text-2xl">
          <label className="-ml-5 text-3xl">Menu</label>
          <div className=" flex hover:cursor-pointer hover:text-[#ED55E8]">
            <AiFillHome className=" text-4xl" />
            <div className="my-auto pl-3">Home</div>
          </div>
          <div className=" flex hover:cursor-pointer group hover:text-[#ED55E8]">
            <div className="flex relative">
              <BsFillBellFill className=" text-4xl " />
              <span className="pl-0.5 right-0 w-4 h-4 rounded-full text-xs flex justify-center items-center absolute group-hover:bg-[#dddddd] group-hover:text-[#ED55E8] bg-[#ED55E8]">
                7
              </span>
            </div>
            <div className="my-auto pl-3">Notification</div>
          </div>
          <div className=" flex hover:cursor-pointer hover:text-[#ED55E8] ">
            <BsFillGearFill className=" text-4xl" />
            <div className="my-auto pl-3">Settings</div>
          </div>
          <div className=" flex hover:cursor-pointer hover:text-[#ED55E8]">
            <MdLogout className=" text-4xl" />
            <div className="my-auto pl-3">Logout</div>
          </div>
        </div>
        {/* border border-red-500 */}
        {/* Playlist */}
        <div className=" space-y-6 ml-8 text-2xl mt-10">
          <label className="-ml-5 text-3xl">My Playlist</label>
          <div className="flex hover:cursor-pointer hover:text-[#ED55E8]">
            <BiSolidPlaylist className=" text-4xl" />
            <div className="my-auto pl-3">Playlist A</div>
          </div>
          <div className="flex hover:cursor-pointer hover:text-[#ED55E8]">
            <MdPlaylistAdd className=" text-4xl" />
            <div className="my-auto pl-3">Add new Playlist</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
