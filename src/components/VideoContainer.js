import React from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import useGetVideo from "../hooks/useGetVideo";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  useGetVideo();
  const videos = useSelector((store) => store.video.popularVideo);
  if (!videos) return null;
  return (
    <div className=" mt-[3rem] flex flex-wrap bg-pink-50 absolute">
      <AdVideoCard video={videos[0]} />
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard video={video} ad={false} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
