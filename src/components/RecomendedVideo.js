import React from "react";

import { useSelector } from "react-redux";
import RecomendedVideoCard from "./RecomendedVideoCard";

function RecomendedVideo({ videoId }) {
  const videos = useSelector((store) => store.video.popularVideo);
  return (
    <div className=" w-full  overflow-y-auto ">
      {videos &&
        videos.map((video) => (
          <RecomendedVideoCard video={video} key={video.id} />
        ))}
    </div>
  );
}

export default RecomendedVideo;
