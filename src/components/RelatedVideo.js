import React from "react";
import { useSelector } from "react-redux";
import RelatedVideoCard from "./RelatedVideoCard";

function RelatedVideo({ videoId }) {
  const videos = useSelector((store) => store.video.popularVideo);
  return (
    <div className=" w-full  overflow-y-auto ">
      {videos &&
        videos.map((video) => (
          <RelatedVideoCard video={video} key={video.id} />
        ))}
    </div>
  );
}

export default RelatedVideo;
