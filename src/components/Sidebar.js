import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="fixed mt-[5rem] px-2 pt-4  h-[100%] w-[230px] top-0 left-0 text-black overflow-y-scroll ">
      <ul>
        <li className="cursor-pointer px-4 py-1 hover:bg-gray-200 rounded-lg">
          {" "}
          <Link to={"/"}>Home</Link>
        </li>
        <li className="cursor-pointer px-4 py-1  hover:bg-gray-200 rounded-lg">
          {" "}
          Shorts
        </li>
        <li className="cursor-pointer px-4 py-1  hover:bg-gray-200 rounded-lg">
          {" "}
          Live
        </li>
        <li className="cursor-pointer px-4 py-1  hover:bg-gray-200 rounded-lg">
          {" "}
          Subscription
        </li>
      </ul>
      <h1 className="pt-5 font-bold ">Explore</h1>
      <ul>
        <Link to={"/category/" + "trending"}>
          <li className="cursor-pointer px-4 py-1 hover:bg-gray-200 rounded-lg">
            {" "}
            Trending
          </li>
        </Link>
        <Link to={"/category/" + "shopping"}>
          <li className="cursor-pointer px-4 py-1 hover:bg-gray-200 rounded-lg">
            {" "}
            Shopping
          </li>
        </Link>
        <Link to={"/category/" + "music"}>
          <li className="cursor-pointer px-4 py-1 hover:bg-gray-200 rounded-lg">
            {" "}
            Music
          </li>
        </Link>
        <Link to={"/category/" + "movies"}>
          <li className="cursor-pointer px-4 py-1 hover:bg-gray-200 rounded-lg">
            {" "}
            Movies
          </li>
        </Link>
        <Link to={"/category/" + "Gaming"}>
          <li className="cursor-pointer px-4 py-1 hover:bg-gray-200 rounded-lg">
            {" "}
            Gaming
          </li>
        </Link>
        <Link to={"/category/" + "news"}>
          <li className="cursor-pointer px-4 py-1 hover:bg-gray-200 rounded-lg">
            {" "}
            News
          </li>
        </Link>
        <Link to={"/category/" + "Sports"}>
          <li className="cursor-pointer px-4 py-1 hover:bg-gray-200 rounded-lg">
            {" "}
            Sports
          </li>
        </Link>
        <Link to={"/category/" + "learning"}>
          <li className="px-4 py-1 hover:bg-gray-200 rounded-lg"> Learing</li>{" "}
        </Link>
        <Link to={"/category/" + "fashion"}>
          <li className="cursor-pointer px-4 py-1 hover:bg-gray-200 rounded-lg">
            Fashion & Beauty
          </li>
        </Link>
        <Link to={"/category/" + "podcast"}>
          <li className="cursor-pointer px-4 py-1 hover:bg-gray-200 rounded-lg">
            {" "}
            Podcast
          </li>
        </Link>
      </ul>

      <div className="border border-black my-2"></div>
      <ul>
        <li className="px-4 py-1 hover:bg-gray-200 rounded-lg"> Setting</li>{" "}
        <li className="px-4 py-1 hover:bg-gray-200 rounded-lg">
          Report History
        </li>
        <li className="px-4 py-1 hover:bg-gray-200 rounded-lg"> Help</li>
        <li className="px-4 py-1 hover:bg-gray-200 rounded-lg">
          Send Feedback
        </li>
      </ul>

      <div className="mt-4">
        <p>@copyright clone By Vikrmaditya Singh</p>
      </div>
    </div>
  );
};

export default Sidebar;
