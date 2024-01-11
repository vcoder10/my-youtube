import hamburger from "../images/hamburger-menu.svg";
import logo from "../images/logo.jpg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

import SearchBar from "./SearchBar";
import { Button } from "@mui/material";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="fixed  w-full  py-5 px-2 mt-0 z-30 md:grid md:grid-flow-col md:grid-cols-12 flex items-center bg-gray-100">
      <div className="flex md:col-span-2 py-1">
        <img
          className="hidden md:inline-block h-8 cursor-pointer"
          alt="hamburger"
          src={hamburger}
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img className="h-8 px-1 md:px-2" alt="logo" src={logo} />
        </a>
      </div>
      <div className="flex flex-col w-full md:col-span-8 ">
        <SearchBar />
      </div>

      <div className=" flex items-center flex-row-reverse md:col-span-2">
        <Button
          variant="text"
          startIcon={<AccountCircleIcon style={{ fontSize: "1.75rem" }} />}
          style={{ color: "black", textTransform: "none" }}
        ></Button>

        <div className="hidden md:inline-block">
          <Button
            variant="text"
            startIcon={<NotificationAddIcon style={{ fontSize: "1.75rem" }} />}
            className=""
            style={{ color: "black", textTransform: "none" }}
          ></Button>
        </div>
        <div className="hidden md:inline-block">
          <Button
            variant="text"
            startIcon={<CreateNewFolderIcon style={{ fontSize: "1.75rem" }} />}
            className=""
            style={{ color: "black", textTransform: "none" }}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Head;
