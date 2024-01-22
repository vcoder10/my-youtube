//import React, { useContext } from "react";
import { useSelector } from "react-redux";
//import themeContext from "../utils/ThemeContext";

const ShimmerVideoCard = ({ type }) => {
  const theme = useSelector((store) => store.app.theme);
  //const { theme } = useContext(themeContext);
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
        <div className="w-8 h-8 rounded-full"></div>
        <div className="w-full h-6 py-2 pr-4 mx-2 rounded-lg"></div>
      </div>
    </div>
  );
};

// Rest of your code remains unchanged

export default ShimmerVideoCard;
