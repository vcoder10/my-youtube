import hamburger from "../images/hamburger-menu.svg";
import logo from "../images/logo.jpg";
import userIcon from "../images/userIcon.jpg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

import SearchBar from "./SearchBar";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="fixed w-full bg-blue-100 grid grid-flow-col p-5 mt-0 z-30">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="hamburger"
          src={hamburger}
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img className="h-8 mx-2" alt="logo" src={logo} />
        </a>
      </div>
      <div className="flex flex-col col-span-10 px-20 ">
        <SearchBar />
      </div>

      <div className="col-span-1">
        <img className="h-8" alt="user-icon" src={userIcon} />
      </div>
    </div>
  );
};

export default Head;
