import React from "react";
import { useSelector } from "react-redux";
import VideoContainer from "./VideoContainer";

function RelatedVideo({ videoId }) {
  const videos = useSelector((store) => store.video.popularVideo);
  return (
    <div className="   overflow-y-auto mt-24">
      <VideoContainer videos={videos} type={"related"} />
    </div>
  );
}

export default RelatedVideo;
