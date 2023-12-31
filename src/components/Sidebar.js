import React from "react";
import { Link } from "react-router-dom";
//import "./style2.css";
const Sidebar = () => {
  return (
    <div className="fixed mt-[5rem] px-6 pt-4  h-[100%] w-[230px] top-0 left-0 bg-gray-800 text-white overflow-y-auto">
      <ul>
        <li>
          {" "}
          <Link to={"/"}>Home</Link>
        </li>
        <li> Shorts</li>
        <li> Videos</li>
        <li> Live</li>
      </ul>
      <h1 className="pt-5 font-bold">Subscription</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>

      <h1 className="pt-5 font-bold">Watch Later</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
      <h1 className="pt-5 font-bold">Watch Later</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
      <h1 className="pt-5 font-bold">Watch Later</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
      <h1 className="pt-5 font-bold">Subscription</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
      <h1 className="pt-5 font-bold">Watch Later</h1>
      <ul>
        <li> Music</li>
        <li> Sports</li>
        <li> Gaming</li>
        <li> Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
