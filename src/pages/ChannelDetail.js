import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoContainer from "../components/VideoContainer";
import useGetChannelDetails from "../hooks/useGetChannelDetails";
import useGetChannelAllVideo from "../hooks/useGetChannelAllVideo";
import ShimmerVideoContainer from "../components/ShimmerVideoContainer";
import userIcon from "../images/userIcon.jpg";

const ChannelDetail = () => {
  const { channelId } = useParams();

  //useGetChannelAllPlaylists(channelId);
  useGetChannelDetails(channelId);
  useGetChannelAllVideo(channelId);

  const videos = useSelector((store) => store.video.channelAllVideo);
  const channelDetails = useSelector((store) => store.video.channelDetails);

  if (!videos && !channelDetails)
    return <ShimmerVideoContainer type={"popular"} />;
  const { title, description, thumbnails, customUrl } = channelDetails.snippet;
  const { videoCount, subscriberCount } = channelDetails.statistics;

  return (
    <div className="mt-24 flex flex-col">
      <div className="flex items-center px-10">
        <div className="w-96">
          <img
            className="rounded-full w-full"
            alt="channel logo"
            src={thumbnails.medium.url ? thumbnails.medium.url : userIcon}
          />
        </div>
        <div className="pl-10">
          <div className="">
            <h1 className="font-bold text-3xl mb-2">{title}</h1>
            <span className="pr-1 text-gray-600">{customUrl}</span>
            <span className="px-1 text-gray-600">
              {subscriberCount} Subscriber
            </span>
            <span className="px-1 text-gray-600">{videoCount} video</span>
            <div className="mt-2 text-gray-600">
              <div>
                {description.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </div>
          <button className="text-bold mt-4 h-10 bg-red-700 text-white px-4 rounded-full ">
            Subscribe
          </button>
        </div>
      </div>
      <div className="border border-gray-500 mt-6"></div>
      <div>
        <VideoContainer videos={videos} type={"category"} />{" "}
      </div>
    </div>
  );
};

export default ChannelDetail;
