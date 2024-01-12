import MenuIcon from "@mui/icons-material/Menu";
import logo from "../images/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toggleTheme } from "../utils/appSlice";
import smLogo from "../images/favicon.png";
import SearchBar from "./SearchBar";
import { Button } from "@mui/material";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const theme = useSelector((store) => store.app.theme);
  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <div
      className={
        "fixed  w-full  py-5 px-2 mt-0 z-30 md:grid md:grid-flow-col md:grid-cols-12 flex items-center " +
        (!theme ? "bg-black" : "bg-white")
      }
    >
      <div className="flex py-1 md:col-span-2">
        <div className="hidden md:inline-block">
          <Button
            variant="text"
            startIcon={<MenuIcon style={{ fontSize: "2.25rem" }} />}
            style={{
              color: !theme ? "white" : "black",
              textTransform: "none",
            }}
            onClick={toggleMenuHandler}
          ></Button>
        </div>
        <a href="/">
          <img className="h-8 px-1 md:px-2" alt="logo" src={smLogo} />
        </a>
      </div>
      <div className="flex flex-col w-full md:col-span-8 ">
        <SearchBar />
      </div>

      <div className="flex flex-row-reverse items-center md:col-span-2">
        <Button
          variant="text"
          startIcon={<AccountCircleIcon style={{ fontSize: "1.75rem" }} />}
          style={{
            color: !theme ? "white" : "black",
            textTransform: "none",
          }}
        ></Button>

        <div className="hidden md:flex">
          <Button
            variant="text"
            startIcon={<NotificationAddIcon style={{ fontSize: "1.75rem" }} />}
            className=""
            style={{
              color: !theme ? "white" : "black",
              textTransform: "none",
            }}
          ></Button>
        </div>
        <div className="hidden md:flex">
          <Button
            variant="text"
            startIcon={<CreateNewFolderIcon style={{ fontSize: "1.75rem" }} />}
            className=""
            style={{
              color: !theme ? "white" : "black",
              textTransform: "none",
            }}
          ></Button>
        </div>
        <Button
          variant="text"
          startIcon={<DarkModeIcon style={{ fontSize: "1.75rem" }} />}
          className=""
          style={{
            color: !theme ? "white" : "black",
            textTransform: "none",
          }}
          onClick={handleTheme}
        ></Button>
      </div>
    </div>
  );
};

export default Head;
