import React from "react";

const Filter = () => {
  const buttons = ["For you", "Popular", "Trend", "Pop", "EDM", "Rock", "More"];

  return (
    <div className="flex flex-row space-x-8 py-6 ">
      {buttons.map((label, index) => (
        <button key={index} className="bg-[#3b3b3b] hover:bg-[#900181] text-xl text-white tracking-wider py-4 px-12 rounded-full">
          {label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
