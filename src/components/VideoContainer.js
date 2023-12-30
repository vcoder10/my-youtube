import React from "react";
import VideoCard from "./VideoCard";
import useGetVideo from "../hooks/useGetVideo";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  useGetVideo();
  const videos = useSelector((store) => store.video.popularVideo);
  if (!videos) return null;
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
