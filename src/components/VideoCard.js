import React, { useEffect } from "react";
import channelLogo from "../images/chatIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { setLive } from "../utils/appSlice";
//import themeContext from "../utils/ThemeContext";
import TimeAgo from "./TimeAgo";
const VideoCard = ({ video = {}, ad, type }) => {
  // destruction video details
  const dispatch = useDispatch();

  const theme = useSelector((store) => store.app.theme);

  const {
    title,
    channelTitle,
    description,
    liveBroadcastContent,
    publishTime,
  } = video.snippet;
  const { medium } = video?.snippet.thumbnails;
  useEffect(() => {
    if (liveBroadcastContent === "live") {
      dispatch(setLive(true));
    } else {
      dispatch(setLive(false));
    }
  }, []);

  //const { theme } = useContext(themeContext);

  return (
    <div
      className={` p-2 ${
        type === "popular" || type === "category" || ad === true
          ? "w-96 flex flex-col "
          : type === "search"
          ? " flex  md:flex-row flex-col md:h-52 "
          : "flex md:flex-row flex-col w-screen md:w-[500px] md:h-32 "
      } ${!theme ? "text-white" : "text-black"}`}
    >
      <div
        className={
          type === "related"
            ? "w-50"
            : ad === true
            ? "w-[350px] h-44"
            : " w-[350px] h-full"
        }
      >
        <img
          className="w-full h-full rounded-lg "
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
          } overflow-hidden`}
        >
          {title}
        </h1>
        {ad ? (
          <span className="px-3 cursor-pointer">Sponsored</span>
        ) : (
          <div className="flex pt-2">
            <img
              className="w-8 h-8 rounded-full"
              alt="channel log"
              src={channelLogo}
            />

            <div className={`type==='related'? "flex flex-col" : "flex"`}>
              <span className="px-3 py-1 font-bold">{channelTitle}</span>

              <TimeAgo publishTime={publishTime} />
            </div>
          </div>
        )}

        {ad ? (
          <button className="px-6 py-2 bg-blue-400 rounded-full">
            Learn More
          </button>
        ) : (
          <div className="hidden pt-4 md:block">
            {type === "search" && <p>{description}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export const AdVideoCard = ({ video }) => {
  return <VideoCard video={video} ad={true} />;
};

export default VideoCard;
