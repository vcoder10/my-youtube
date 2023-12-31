import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="flex">
      {isMenuOpen && <Sidebar />}
      <div
        className={`main-container ${isMenuOpen ? "ml-[230px] w-full" : ""}`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
