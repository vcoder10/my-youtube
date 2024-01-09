import React from "react";
import { useSelector } from "react-redux";
import useGetPopularVideo from "../hooks/useGetPopularVideo";

import VideoContainer from "./VideoContainer";
import ShimmerVideoContainer from "./ShimmerVideoContainer";

const PopularVideo = () => {
  useGetPopularVideo();
  const videos = useSelector((store) => store.video.popularVideo);
  if (!videos) return <ShimmerVideoContainer type={"popular"} />;
  return (
    <div>
      <VideoContainer videos={videos} type={"popular"} />{" "}
    </div>
  );
};

export default PopularVideo;
