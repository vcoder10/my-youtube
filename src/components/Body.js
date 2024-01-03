import React from "react";
//import "./style.css";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const { q } = useParams();
  console.log("from vody");
  console.log(q);

  return (
    <div className="flex">
      {isMenuOpen && <Sidebar />}
      <div
        className={`main-container ${
          isMenuOpen ? "ml-[230px] w-full" : "w-full"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
