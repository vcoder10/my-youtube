//import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoContainer from "../components/VideoContainer";
import useGetChannelDetails from "../hooks/useGetChannelDetails";
import useGetChannelAllVideo from "../hooks/useGetChannelAllVideo";
import ShimmerVideoContainer from "../components/ShimmerVideoContainer";
import userIcon from "../images/userIcon.jpg";
//import themeContext from "../utils/themeContext";

const ChannelDetail = () => {
  const { channelId } = useParams();

  //useGetChannelAllPlaylists(channelId);
  useGetChannelDetails(channelId);
  useGetChannelAllVideo(channelId);

  const videos = useSelector((store) => store.video.channelAllVideo);
  const channelDetails = useSelector((store) => store.video.channelDetails);
  const theme = useSelector((store) => store.app.theme);
  //const { theme } = useContext(themeContext);

  if (!videos && !channelDetails)
    return <ShimmerVideoContainer type={"popular"} />;
  const { title, description, thumbnails, customUrl } = channelDetails.snippet;
  const { videoCount, subscriberCount } = channelDetails.statistics;

  return (
    <div
      className={`mt-24 flex flex-col  ${
        !theme ? "bg-black text-white" : "bg-whit text-black"
      }`}
    >
      <div className="flex items-center px-2 md:px-10">
        <div className="hidden w-48 md:inline-block">
          <img
            className="w-full rounded-full"
            alt="channel logo"
            src={thumbnails.medium.url ? thumbnails.medium.url : userIcon}
          />
        </div>
        <div className="pl-2 md:pl-10">
          <div className="">
            <h1 className="mb-2 text-3xl font-bold">{title}</h1>
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
          <button
            className={`text-bold mt-4 h-10 w-full md:w-28  px-4 rounded-full ${
              !theme ? "bg-white text-black" : "bg-red-700 text-white"
            }`}
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="mt-6 border border-gray-500"></div>
      <div
        className={`mt-6 w-full ${
          !theme ? "bg-black text-white" : "bg-whit text-black"
        }`}
      >
        <VideoContainer videos={videos} type={"category"} />{" "}
      </div>
    </div>
  );
};

export default ChannelDetail;
