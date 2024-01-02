import React from "react";

import channlerLogo from "../images/chatIcon.png";
import TimeAgo from "./TimeAgo";
const RecomendedVideoCard = ({ video }) => {
  const {
    //publishedAt,
    //channelId,
    title,

    channelTitle,
    publishTime,
  } = video.snippet;
  const { medium } = video.snippet.thumbnails;

  if (!video) return null;

  return (
    <div className="flex mb-3 text-black pl-2 pt-2">
      <div className="relative rounded-xl bg-slate-800 overflow-hidden w-[300px] h-[150px]">
        <img
          className="object-cover w-full h-full"
          alt="search"
          src={medium.url}
        />
      </div>
      <div className="flex flex-col ml-3 overflow-hidden">
        <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-black overflow-hidden">
          {title}
        </span>

        <div className="flex pt-4">
          <img
            className="w-8 h-8 rounded-full"
            alt="channel log"
            src={channlerLogo}
          />
          <span className="py-1 ml-2 font-bold text-gray-600">
            {channelTitle}
          </span>
        </div>
        <div className="flex text-[12px] pt-2 font-bold text-gray-600 truncate overflow-hidden">
          <span className="mr-2">{`1000 views `}</span>

          <TimeAgo publishTime={publishTime} />
        </div>
      </div>
    </div>
  );
};

export default RecomendedVideoCard;
