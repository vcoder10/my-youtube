//import React, { useContext } from "react";
import channleLogo from "../images/chatIcon.png";
import useGetVideoDetail from "../hooks/useGetVideoDetail";
//import likeIcon from "../images/like icon.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { Button } from "@mui/material";
//import themeContext from "../utils/ThemeContext";

const VideoDetails = ({ movieId }) => {
  useGetVideoDetail(movieId);
  const details = useSelector((store) => store.video.videoDetails);
  const theme = useSelector((store) => store.app.theme);
  //const { theme } = useContext(themeContext);
  if (!details) return null;

  const { likeCount, viewCount } = details?.statistics;
  const { channelId, title, description, channelTitle } = details?.snippet;

  return (
    <div
      className={`flex flex-col p-2  md:w-full w-screen ${
        !theme ? "bg-black text-white" : "bg-white"
      }`}
    >
      <h1 className="my-1 text-lg font-bold md:text-2xl line-clamp-2">
        {title}
      </h1>
      <div className="flex justify-between">
        <div className="flex items-center justify-between ">
          <Link to={"/channel/" + channelId}>
            <div className="flex">
              <img
                className="w-8 h-8 mr-2 rounded-full md:w-12 md:h-12"
                alt="logo"
                src={channleLogo}
              />
              <div className="flex flex-col">
                <h2 className="text-sm md:font-bold md:text-lg">
                  {channelTitle}
                </h2>
                <span className="text-sm">1M Subscriber</span>
              </div>
            </div>
          </Link>
          <button
            className={`md:text-bold ml-3 md:ml-4 h-8 md:h-10  px-2 md:px-4 rounded-full ${
              !theme ? "bg-white text-black" : "bg-red-700 text-white"
            }`}
          >
            Subscribe
          </button>
        </div>
        <div
          className={`flex  mr-1  md:py-3 px-2 md:px-6 h-8 md:h-12 rounded-full items-center ${
            !theme ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
          }`}
        >
          <Button
            variant="text"
            startIcon={<ThumbUpAltIcon style={{ fontSize: "1.5rem" }} />}
            className=""
            style={{
              color: !theme ? "white" : "black",
              textTransform: "none",
            }}
          ></Button>
          <span className="hidden md:block">{likeCount}</span>
        </div>
      </div>
      <div
        className={`mt-4 py-3 bg-gray-200 rounded-lg p-2  ${
          !theme ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <div className="flex">
          <span>{viewCount} views</span>
          <span> Premier 5 Dec 2023</span>
          <span>#trending</span>
        </div>
        <div className="pt-4 mt-2">
          {description.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
