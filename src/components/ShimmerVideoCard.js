import React from "react";
import { useSelector } from "react-redux";

const ShimmerVideoCard = ({ type }) => {
  const theme = useSelector((store) => store.app.theme);
  const shimmerStyles = {
    backgroundSize: `400% 100%`,
    animation: `shimmer 1.5s infinite linear`,
    borderRadius: `8px`,
  };

  return (
    <div
      className={`${
        type === "popular" ? "flex flex-col w-96 p-2" : "flex w-full p-2"
      }  ${!theme ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} `}
    >
      <div className="w-[350px] h-52 rounded-lg" style={shimmerStyles}></div>
      <div
        className={` flex items-center p-2 ${
          type === "popular" ? "" : " w-full"
        }`}
      >
        <div className="rounded-full h-8 w-8"></div>
        <div className="w-full py-2 pr-4 rounded-lg mx-2 h-6"></div>
      </div>
    </div>
  );
};

// Rest of your code remains unchanged

export default ShimmerVideoCard;
