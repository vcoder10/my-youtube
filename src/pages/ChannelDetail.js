import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetChannelAllVideo from "../hooks/useGetChannelAllVideo";
import VideoContainer from "../components/VideoContainer";
import useGetChannelDetails from "../hooks/useGetChannelDetails";

const ChannelDetail = () => {
  const { channelId } = useParams();
  console.log(channelId);
  useGetChannelAllVideo(channelId);
  useGetChannelDetails(channelId);

  const videos = useSelector((store) => store.video.channelAllVideo);
  if (!videos) return null;

  return (
    <div className="mt-36">
      <div>channel Detales</div>
      <div>
        <VideoContainer videos={videos} type={"category"} />{" "}
      </div>
    </div>
  );
};

export default ChannelDetail;
