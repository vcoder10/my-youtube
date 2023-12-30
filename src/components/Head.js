import React from "react";
import hamburger from "../images/hamburger-menu.svg";
import logo from "../images/logo.jpg";
import userIcon from "../images/userIcon.jpg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" grid grid-flow-col p-5 m-2 ">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="hamburger"
          src={hamburger}
          onClick={toggleMenuHandler}
        />
        <img className="h-8 mx-2" alt="logo" src={logo} />
      </div>
      <div className="flex col-span-10 px-20">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>

      <div className="col-span-1">
        <img className="h-8" alt="user-icon" src={userIcon} />
      </div>
    </div>
  );
};

export default Head;
