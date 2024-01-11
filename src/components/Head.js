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

      <div className="col-span-1 flex items-center">
        <Button
          variant="text"
          startIcon={<CreateNewFolderIcon style={{ fontSize: "1.75rem" }} />}
          className=""
          style={{ color: "black", textTransform: "none" }}
        ></Button>
        <Button
          variant="text"
          startIcon={<NotificationAddIcon style={{ fontSize: "1.75rem" }} />}
          className=""
          style={{ color: "black", textTransform: "none" }}
        ></Button>
        <Button
          variant="text"
          startIcon={<AccountCircleIcon style={{ fontSize: "1.75rem" }} />}
          className=""
          style={{ color: "black", textTransform: "none" }}
        ></Button>
        {/* <img className="h-8" alt="user-icon" src={userIcon} /> */}
      </div>
    </div>
  );
};

export default Head;
