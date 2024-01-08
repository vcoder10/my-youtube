import React from "react";
import { useSelector } from "react-redux";
import useGetPopularVideo from "../hooks/useGetPopularVideo";

import VideoContainer from "./VideoContainer";

const PopularVideo = () => {
  useGetPopularVideo();
  const videos = useSelector((store) => store.video.popularVideo);
  return (
    <div>
      <VideoContainer videos={videos} type={"popular"} />
    </div>
  );
};

export default PopularVideo;
