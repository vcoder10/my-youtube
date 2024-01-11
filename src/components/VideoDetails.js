import React from "react";
import channleLogo from "../images/chatIcon.png";
import useGetVideoDetail from "../hooks/useGetVideoDetail";
import likeIcon from "../images/like icon.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoDetails = ({ movieId }) => {
  useGetVideoDetail(movieId);
  const details = useSelector((store) => store.video.videoDetails);
  if (!details) return null;

  const { likeCount, viewCount } = details?.statistics;
  const { channelId, title, description, channelTitle } = details?.snippet;

  return (
    <div className="flex flex-col p-2  md:w-full w-screen ">
      <h1 className="text-lg md:text-2xl my-1 font-bold line-clamp-2 text-black">
        {title}
      </h1>
      <div className="flex justify-between">
        <div className="flex justify-between items-center ">
          <Link to={"/channel/" + channelId}>
            <div className="flex">
              <img
                className="w-8 md:w-12 h-8 md:h-12 mr-2"
                alt="logo"
                src={channleLogo}
              />
              <div className="flex flex-col">
                <h2 className="md:font-bold md:text-lg text-sm">
                  {channelTitle}
                </h2>
                <span className="text-sm">1M Subscriber</span>
              </div>
            </div>
          </Link>
          <button className="md:text-bold ml-3 md:ml-4 h-8 md:h-10 bg-red-700 text-white px-2 md:px-4 rounded-full ">
            Subscribe
          </button>
        </div>
        <div className="flex bg-gray-200 mr-1  md:py-3 px-2 md:px-6 h-8 md:h-12 rounded-full items-center">
          <img
            alt="like"
            src={likeIcon}
            className="w-6 md:w-8 h-6  md:h-8  mr-2 rounded-full"
          />
          <span className="md:block hidden">{likeCount}</span>
        </div>
      </div>
      <div className="mt-4 py-3 bg-gray-200 rounded-lg p-2">
        <div className="flex">
          <span>{viewCount} views</span>
          <span> Premier 5 Dec 2023</span>
          <span>#trending</span>
        </div>
        <div className="pt-4  mt-2">
          {description.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
