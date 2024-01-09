import React from "react";
import ShimmerVideoCard from "./ShimmerVideoCard";

const ShimmerVideoContainer = ({ type }) => {
  return (
    <div
      className={
        "  absolute mt-[5rem] " +
        (type === "popular" ? "flex flex-wrap" : "flex flex-col")
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
