import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-3 py-1 m-2 bg-gray-200 rounded-lg">{name}</button>
    </div>
  );
};

export default Button;
