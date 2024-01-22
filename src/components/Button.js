//import React, { useContext } from "react";
import { useSelector } from "react-redux";
//import themeContext from "../utils/ThemeContext";

const Button = ({ name }) => {
  const theme = useSelector((store) => store.app.theme);
  //const { theme } = useContext(themeContext);

  return (
    <div>
      <button
        className={`px-3 py-1 m-2  rounded-lg ${
          !theme ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
