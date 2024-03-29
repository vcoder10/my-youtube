import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
//import themeContext from "../utils/ThemeContext";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const theme = useSelector((store) => store.app.theme);
  //const { theme } = useContext(themeContext);

  return (
    <div className="flex">
      <div className="hidden md:inline-block">{isMenuOpen && <Sidebar />}</div>

      <div
        className={`main-container ${
          isMenuOpen ? "md:ml-[230px] w-full" : ""
        }  ${!theme ? "bg-black text-white" : "bg-white text-black"} `}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
