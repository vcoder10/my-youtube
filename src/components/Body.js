import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="flex">
      <div className="hidden md:inline-block">{isMenuOpen && <Sidebar />}</div>

      <div
        className={`main-container ${isMenuOpen ? "md:ml-[230px] w-full" : ""}`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
