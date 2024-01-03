import React from "react";
import useGetChannelDetail from "../hooks/useGetChannelDetail";

import { Link, useParams } from "react-router-dom";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

const ChannelDetail = () => {
  const { channelId } = useParams();

  useGetChannelDetail(channelId);

  const videos = useSelector((store) => store.video.channelDetails);
  if (!videos) return null;

  return (
    <div className="mt-28">
      <div>channel Detils</div>
      <div className="  flex flex-wrap">
        {videos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard video={video} ad={false} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChannelDetail;
