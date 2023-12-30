import React from "react";
import Button from "./Button";

const ButtonLists = () => {
  const list = [
    "All",
    "Live",
    "React",
    "Music",
    "Bhajan",
    "Cricket",
    "News",
    "Gaming",
  ];
  return (
    <div className="flex">
      {list.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonLists;
