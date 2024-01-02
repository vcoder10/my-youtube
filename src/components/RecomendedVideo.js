import React from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

function RecomendedVideo() {
  const videos = useSelector((store) => store.video.popularVideo);
  return (
    <div className="mt-24 w-full bg-gray-200 flex-grow h-screen overflow-y-auto">
      <VideoCard video={videos[0]} ad={false} flex={true} />
    </div>
  );
}

export default RecomendedVideo;
