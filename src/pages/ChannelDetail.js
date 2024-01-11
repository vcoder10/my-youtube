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
  const theme = useSelector((store) => store.app.theme);

  if (!videos && !channelDetails)
    return <ShimmerVideoContainer type={"popular"} />;
  const { title, description, thumbnails, customUrl } = channelDetails.snippet;
  const { videoCount, subscriberCount } = channelDetails.statistics;

  return (
    <div
      className={`mt-24 flex flex-col  ${
        !theme ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <div className="flex items-center px-2 md:px-10">
        <div className="hidden md:inline-block w-48">
          <img
            className="rounded-full w-full"
            alt="channel logo"
            src={thumbnails.medium.url ? thumbnails.medium.url : userIcon}
          />
        </div>
        <div className="md:pl-10 pl-2">
          <div className="">
            <h1 className="font-bold text-3xl mb-2">{title}</h1>
            <span className="pr-1">{customUrl}</span>
            <span className="px-1">{subscriberCount} Subscriber</span>
            <span className="px-1 ">{videoCount} video</span>
            <div className="mt-2 ">
              <div>
                {description.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          </div>
          <button className="text-bold mt-4 h-10 w-full md:w-28 bg-red-700 text-white px-4 rounded-full ">
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
