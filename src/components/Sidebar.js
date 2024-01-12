import React from "react";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MovieIcon from "@mui/icons-material/Movie";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FeedbackIcon from "@mui/icons-material/Feedback";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StreamIcon from "@mui/icons-material/Stream";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import SchoolIcon from "@mui/icons-material/School";
import DiamondIcon from "@mui/icons-material/Diamond";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import FlagIcon from "@mui/icons-material/Flag";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const theme = useSelector((store) => store.app.theme);

  return (
    <div
      className={
        "fixed mt-[5rem] px-2 pt-4 flex flex-col h-full w-[230px] top-0 left-0 overflow-y-scroll " +
        (!theme ? "bg-black" : "bg-white")
      }
    >
      <ul>
        <li
          className={
            "cursor-pointer px-4 py-1  rounded-lg" +
            (!theme ? "hover:bg-gray-800" : "hover:bg-gray-200")
          }
        >
          {" "}
          <Link to={"/"}>
            <Button
              variant="text"
              startIcon={<HomeIcon />}
              className="pl-2"
              style={{
                color: !theme ? "white" : "black",
                textTransform: "none",
              }}
            >
              Home
            </Button>
          </Link>
        </li>
        <li
          className={
            "cursor-pointer px-4 py-1  rounded-lg" +
            (!theme ? "hover:bg-gray-800" : "hover:bg-gray-200")
          }
        >
          <Button
            variant="text"
            startIcon={<WhatshotIcon />}
            className="pl-2"
            style={{
              color: !theme ? "white" : "black",
              textTransform: "none",
            }}
          >
            Shorts
          </Button>
        </li>
        <Link to={"/live"}>
          <li
            className={
              "cursor-pointer px-4 py-1  rounded-lg" +
              (!theme ? "hover:bg-gray-800" : "hover:bg-gray-200")
            }
          >
            <Button
              variant="text"
              startIcon={<StreamIcon />}
              className="pl-2"
              style={{
                color: !theme ? "white" : "black",
                textTransform: "none",
              }}
            >
              Live
            </Button>
          </li>
        </Link>
        <li
          className={
            "cursor-pointer px-4 py-1  rounded-lg" +
            (!theme ? "hover:bg-gray-800" : "hover:bg-gray-200")
          }
        >
          <Button
            variant="text"
            startIcon={<SubscriptionsIcon />}
            className="pl-2"
            style={{
              color: !theme ? "white" : "black",
              textTransform: "none",
            }}
          >
            Subscription
          </Button>
        </li>
      </ul>
      <div
        className={`border mt-2 mx-2 ${
          !theme ? "border-gray-800" : "border-gray-200"
        }`}
      ></div>
      <h1
        className={
          "pt-2 text-xl mx-10 font-bold " +
          (!theme ? "text-white" : "text-black")
        }
      >
        Explore
      </h1>

      <ul>
        <Link to={"/category/trending"}>
          <li
            className={
              "cursor-pointer px-4 py-1  rounded-lg" +
              (!theme ? "hover:bg-gray-800" : "hover:bg-gray-200")
            }
          >
            <Button
              variant="text"
              startIcon={<ExploreIcon />}
              className="pl-2"
              style={{
                color: !theme ? "white" : "black",
                textTransform: "none",
              }}
            >
              Trending
            </Button>
          </li>
        </Link>

        <Link to={"/category/music"}>
          <li
            className={
              "cursor-pointer px-4 py-1  rounded-lg" +
              (!theme ? "hover:bg-gray-800" : "hover:bg-gray-200")
            }
          >
            <Button
              variant="text"
              startIcon={<MusicNoteIcon />}
              className="pl-2"
              style={{
                color: !theme ? "white" : "black",
                textTransform: "none",
              }}
            >
              Music
            </Button>
          </li>
        </Link>
        <Link to={"/category/movies"}>
          <li
            className={
              "cursor-pointer px-4 py-1  rounded-lg" +
              (!theme ? "hover:bg-gray-800" : "hover:bg-gray-200")
            }
          >
            <Button
              variant="text"
              startIcon={<MovieIcon />}
              className="pl-2"
              style={{
                color: !theme ? "white" : "black",
                textTransform: "none",
              }}
            >
              Movies
            </Button>
          </li>
        </Link>
        <Link to={"/category/Gaming"}>
          <li
            className={
              "cursor-pointer px-4 py-1  rounded-lg" +
              (!theme ? "hover:bg-gray-800" : "hover:bg-gray-200")
            }
          >
            <Button
              variant="text"
              startIcon={<SportsEsportsIcon />}
              className="pl-2"
              style={{
                color: !theme ? "white" : "black",
                textTransform: "none",
              }}
            >
              Gaming
            </Button>
          </li>
        </Link>
        <Link to={"/category/news"}>
          <li
            className={
              "cursor-pointer px-4 py-1  rounded-lg" +
              (!theme ? "hover:bg-gray-800" : "hover:bg-gray-200")
            }
          >
            <Button
              variant="text"
              startIcon={<NewspaperIcon />}
              className="pl-2"
              style={{
                color: !theme ? "white" : "black",
                textTransform: "none",
              }}
            >
              News
            </Button>
          </li>
        </Link>
        <Link to={"/category/Sports"}>
          <li
            className={
              "cursor-pointer px-4 py-1  rounded-lg" +
              (!theme ? "hover:bg-gray-800" : "hover:bg-gray-200")
            }
          >
            <Button
              variant="text"
              startIcon={<SportsCricketIcon />}
              className="pl-2"
              style={{
                color: !theme ? "white" : "black",
                textTransform: "none",
              }}
            >
              Sports
            </Button>
          </li>
        </Link>
        <Link to={"/category/learning"}>
          <li
            className={
              "cursor-pointer px-4 py-1  rounded-lg" +
              (!theme ? "hover:bg-gray-800" : "hover:bg-gray-200")
            }
          >
            {" "}
            <Button
              variant="text"
              startIcon={<SchoolIcon />}
              className="pl-2"
              style={{
                color: !theme ? "white" : "black",
                textTransform: "none",
              }}
            >
              Learning
            </Button>
          </li>{" "}
        </Link>
        <Link to={"/category/fashion"}>
          <li
            className={
              "cursor-pointer px-4 py-1  rounded-lg" +
              (!theme ? "hover:bg-gray-800" : "hover:bg-gray-200")
            }
          >
            <Button
              variant="text"
              startIcon={<DiamondIcon />}
              className="pl-2"
              style={{
                color: !theme ? "white" : "black",
                textTransform: "none",
              }}
            >
              Fashion & Beauty
            </Button>
          </li>
        </Link>
        <Link to={"/category/podcast"}>
          <li
            className={
              "cursor-pointer px-4 py-1  rounded-lg" +
              (!theme ? "hover:bg-gray-800" : "hover:bg-gray-200")
            }
          >
            <Button
              variant="text"
              startIcon={<PodcastsIcon />}
              className="pl-2"
              style={{
                color: !theme ? "white" : "black",
                textTransform: "none",
              }}
            >
              Podcast
            </Button>
          </li>
        </Link>
      </ul>

      <div className="border border-black my-2"></div>
      <ul>
        <li
          className={
            "cursor-pointer px-4 py-1  rounded-lg" +
            (!theme ? "hover:bg-gray-800" : "hover:bg-gray-200")
          }
        >
          {" "}
          <Button
            variant="text"
            startIcon={<SettingsIcon />}
            className="pl-2"
            style={{
              color: !theme ? "white" : "black",
              textTransform: "none",
            }}
          >
            Setting
          </Button>
        </li>{" "}
        <li
          className={
            "cursor-pointer px-4 py-1  rounded-lg" +
            (!theme ? "hover:bg-gray-800" : "hover:bg-gray-200")
          }
        >
          <Button
            variant="text"
            startIcon={<FlagIcon />}
            className="pl-2"
            style={{
              color: !theme ? "white" : "black",
              textTransform: "none",
            }}
          >
            Report History
          </Button>
        </li>
        <li
          className={
            "cursor-pointer px-4 py-1  rounded-lg" +
            (!theme ? "hover:bg-gray-800" : "hover:bg-gray-200")
          }
        >
          {" "}
          <Button
            variant="text"
            startIcon={<HelpOutlineIcon />}
            className="pl-2"
            style={{
              color: !theme ? "white" : "black",
              textTransform: "none",
            }}
          >
            Help
          </Button>
        </li>
        <li
          className={
            "cursor-pointer px-4 py-1  rounded-lg" +
            (!theme ? "hover:bg-gray-800" : "hover:bg-gray-200")
          }
        >
          <Button
            variant="text"
            startIcon={<FeedbackIcon />}
            className="pl-2"
            style={{
              color: !theme ? "white" : "black",
              textTransform: "none",
            }}
          >
            Feedback
          </Button>
        </li>
        <li
          className={
            "cursor-pointer px-4 py-1  rounded-lg" +
            (!theme ? "hover:bg-gray-800" : "hover:bg-gray-200")
          }
        >
          <Button
            variant="text"
            startIcon={<FeedbackIcon />}
            className="pl-2"
            style={{
              color: !theme ? "white" : "black",
              textTransform: "none",
            }}
          >
            Vikramaitya Singh
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
