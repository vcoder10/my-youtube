import React from "react";
import channelLogo from "../images/chatIcon.png";
import { useDispatch } from "react-redux";
import { setLive } from "../utils/appSlice";
const VideoCard = ({ video, ad, type }) => {
  // destruction video details
  const dispatch = useDispatch();
  const { title, channelTitle, description, liveBroadcastContent } =
    video.snippet;
  const { medium } = video.snippet.thumbnails;

  if (liveBroadcastContent === "live") {
    dispatch(setLive(true));
  } else {
    dispatch(setLive(false));
  }

  return (
    <div
      className={`text-black p-2 ${
        type === "popular" || type === "category"
          ? "w-96 flex flex-col"
          : type === "search"
          ? " flex  md:flex-row flex-col h-52"
          : " hidden  md:flex :w-[500px] h-32"
      }`}
    >
      <div className={type === "related" ? "w-50" : " w-[350px] h-full"}>
        <img
          className=" w-full h-full rounded-lg"
          alt="search"
          src={medium.url}
        />
      </div>
      <div
        className={` ${
          type === "related" ? "w-[300px]" : ""
        } flex flex-col overflow-hidden ml-3`}
      >
        <h1
          className={`font-bold ${
            type === "related" ? "line-clamp-1" : "line-clamp-2"
          } text-black overflow-hidden`}
        >
          {title}
        </h1>

        <div className="flex pt-2">
          <img
            className="w-8 h-8 rounded-full"
            alt="channel log"
            src={channelLogo}
          />
          <div className={`type==='related'? "flex flex-col" : "flex"`}>
            <span className="py-1 px-3 font-bold text-gray-600">
              {channelTitle}
            </span>
            <p className="text-gray-600 font-bold text-sm pl-3">1 hour ago</p>
          </div>
        </div>

        <div className="pt-4">{type === "search" && <p>{description}</p>}</div>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ video }) => {
  return <VideoCard video={video} ad={true} />;
};

export default VideoCard;
