import React from "react";
import VideoCard from "./VideoCard";
import useGetVideo from "../hooks/useGetVideo";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  useGetVideo();
  const videos = useSelector((store) => store.video.popularVideo);
  if (!videos) return null;
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
