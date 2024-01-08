import React from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = ({ videos, type }) => {
  if (!videos) return null;

  return (
    <div
      className={
        "  absolute mt-[5rem] " +
        (type === "popular" || type === "category"
          ? "flex flex-wrap"
          : "flex flex-col")
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
