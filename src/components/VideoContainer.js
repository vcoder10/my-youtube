//import React, { useContext } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//import themeContext from "../utils/ThemeContext";

const VideoContainer = ({ videos, type }) => {
  const theme = useSelector((store) => store.app.theme);
  //const { theme } = useContext(themeContext);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!videos) return null;
  if (isMenuOpen && type === "related") type = "popular";

  return (
    <div
      className={
        "  absolute  justify-center " +
        (type === "popular" || type === "category"
          ? " flex flex-wrap "
          : " flex flex-col ") +
        (!theme ? "bg-black" : "bg-white")
      }
    >
      {videos.map((video) => (
        <Link
          to={
            "/watch?v=" +
            (type === "popular" || type === "related"
              ? video.id
              : video.id.videoId)
          }
          key={
            type === "popular" || type === "related"
              ? video.id
              : video.id.videoId
          }
        >
          <VideoCard video={video} ad={false} type={type} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
