import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import channlerLogo from "../images/chatIcon.png";
import TimeAgo from "./TimeAgo";
const SearchCard = ({ result }) => {
  const {
    //publishedAt,
    //channelId,
    title,
    description,
    channelTitle,
    publishTime,
  } = result.snippet;
  const { medium } = result.snippet.thumbnails;
  if (!result) return null;
  return (
    <div className="flex mb-3 text-black pl-2 pt-2">
      <div className="relative  rounded-xl bg-slate-800 overflow-hidden">
        <img
          className="h-full w-full object-cover"
          alt="search"
          src={medium.url}
        />
      </div>
      <div className="flex flex-col ml-3 overflow-hidden">
        <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-black">
          {title}
        </span>

        <div className="flex text-[12px] pt-2 font-bold text-black truncate overflow-hidden">
          <span>{`1000 views`}</span>

          <TimeAgo publishTime={publishTime} />
        </div>
        <div>
          <div className="flex">
            <img className="w-8 h-8" alt="channel log" src={channlerLogo} />
            <span className="py-1 ml-2 font-bold text-gray-500">
              {channelTitle}
            </span>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;

// <div className="flex bg-gray-200 w-full h-52 px-4">
//   <img className="p-2 rounded-xl" alt="searchCard" src={medium.url} />
//   <div className="flex flex-col p-2 ml-12">
//     <h1>{title}</h1>
//     <p>{description}</p>
//     <div className="flex flex-col">
//       <h2>{channelTitle}</h2>
//       <div className="flex">
//         <span>Views</span>
//         <span>Time</span>
//       </div>
//     </div>
//   </div>
// </div>
