import React from "react";

import channlerLogo from "../images/chatIcon.png";
import TimeAgo from "./TimeAgo";
const RelatedVideoCard = ({ video }) => {
  const { title, channelTitle, publishTime } = video.snippet;
  const { medium } = video.snippet.thumbnails;

  if (!video) return null;

  return (
    <div className="flex  text-black p-2 w-full">
      <div className=" w-48">
        <img className=" w-48 rounded-lg" alt="search" src={medium.url} />
      </div>
      <div className="flex flex-col overflow-hidden ml-3">
        <h1 className=" font-bold line-clamp-2 text-black overflow-hidden">
          {title}
        </h1>

        <div className="flex pt-2">
          <img
            className="w-8 h-8 rounded-full"
            alt="channel log"
            src={channlerLogo}
          />
          <span className="py-1 font-bold text-gray-600">{channelTitle}</span>
        </div>
        <div className="flex  text-gray-600 truncate overflow-hidden">
          <span className="mr-2">{`1000 views `}</span>

          <TimeAgo publishTime={publishTime} />
        </div>
      </div>
    </div>
  );
};

export default RelatedVideoCard;
