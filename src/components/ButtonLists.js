import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ButtonLists = () => {
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
    <div className="flex fixed mt-0 pt-0 bg-pink-50 w-full z-10  ">
      {list.map((name, index) => (
        <Link to={"/category/" + name} key={index}>
          <Button name={name} />
        </Link>
      ))}
    </div>
  );
};

export default ButtonLists;
