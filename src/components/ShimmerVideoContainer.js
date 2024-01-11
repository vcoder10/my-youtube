import React from "react";
import ShimmerVideoCard from "./ShimmerVideoCard";
import { useSelector } from "react-redux";

const ShimmerVideoContainer = ({ type }) => {
  const theme = useSelector((store) => store.app.theme);
  return (
    <div
      className={
        "  absolute mt-[5rem] " +
        (type === "popular" ? "flex flex-wrap " : "flex flex-col ") +
        (!theme ? "bg-gray-800 text-white" : "bg-gray-200 text-black")
      }
    >
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
      <ShimmerVideoCard type={type} />
    </div>
  );
};

export default ShimmerVideoContainer;
