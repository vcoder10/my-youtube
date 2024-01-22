import MenuIcon from "@mui/icons-material/Menu";
import lgLogo from "../images/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toggleTheme } from "../utils/appSlice";
import smLogo from "../images/favicon.png";
import SearchBar from "./SearchBar";
import { Button } from "@mui/material";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
// import { useContext } from "react";
// import themeContext from "../utils/ThemeContext";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const theme = useSelector((store) => store.app.theme);
  // const { theme, setTheme } = useContext(themeContext);

  const handleTheme = () => {
    dispatch(toggleTheme());
    //setTheme((prevTheme) => !prevTheme);
  };
  return (
    <div
      className={
        "fixed  w-full  py-1 md:py-5 px-2 mt-0 z-30 md:grid md:grid-flow-col md:grid-cols-12 flex items-center " +
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
          <img className="w-20 h-10 px-1 md:hidden" alt="logo" src={smLogo} />
          <img
            className="hidden h-8 px-1 md:inline-block"
            alt="logo"
            src={lgLogo}
          />
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
