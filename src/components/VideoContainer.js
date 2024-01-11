import React from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = ({ videos, type }) => {
  const theme = useSelector((store) => store.app.theme);
  if (!videos) return null;

  return (
    <div
      className={
        "  absolute mt-24 justify-center " +
        (type === "popular" || type === "category"
          ? "flex flex-wrap "
          : "flex flex-col ") +
        (!theme ? "bg-black" : "bg-white")
      }
    >
      {/* {type === "popular" && <AdVideoCard video={videos[0]} />} */}
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
