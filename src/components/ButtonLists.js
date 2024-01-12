import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ButtonLists = () => {
  const theme = useSelector((store) => store.app.theme);
  const list = [
    "All",
    "Motivation",
    "ReactJs",
    "Music",
    "Bhajan",
    "Sports",
    "News",
    "Gaming",
    "Travel",
    "Comedy",
    "Education",
    "Documentary",
    "Cricket",
    "Anime",
  ];
  return (
    <div
      className={` flex fixed  pt-0 w-full z-10 overflow-x-auto md:overflow-x-hidden ${
        !theme ? "bg-black" : "bg-white"
      }`}
    >
      {list.map((name, index) => (
        <Link to={"/category/" + name} key={index}>
          <Button name={name} />
        </Link>
      ))}
    </div>
  );
};

export default ButtonLists;
