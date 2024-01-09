import React from "react";

const ShimmerVideoCard = ({ type }) => {
  const shimmerStyles = {
    background: `linear-gradient(-90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)`,
    backgroundSize: `400% 100%`,
    animation: `shimmer 1.5s infinite linear`,
    borderRadius: `8px`,
  };

  return (
    <div
      className={`${
        type === "popular" ? "flex flex-col w-96 p-2" : "flex w-full p-2"
      } `}
    >
      <div
        className="w-[350px] h-52 bg-gray-300 rounded-lg"
        style={shimmerStyles}
      ></div>
      <div
        className={` flex items-center p-2 ${
          type === "popular" ? "" : " w-full"
        }`}
      >
        <div className="rounded-full h-8 w-8 bg-gray-200"></div>
        <div className="w-full bg-gray-200 py-2 pr-4 rounded-lg mx-2 h-6"></div>
      </div>
    </div>
  );
};

// Rest of your code remains unchanged

export default ShimmerVideoCard;
