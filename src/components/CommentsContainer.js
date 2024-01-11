import React from "react";
import { commentsData } from "../utils/comentsData";
import Comment from "./Comment";
import { useSelector } from "react-redux";

const CommentsContainer = () => {
  const videoDetails = useSelector((store) => store.video.videoDetails);
  const noOfComment = videoDetails?.statistics?.commentCount;
  const theme = useSelector((store) => store.app.theme);
  return (
    <div
      className={` w-screen md:w-[900px]  ${
        !theme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="font-bold text-2xl">{noOfComment} Comments</h1>
      {commentsData.map((comment, index) => (
        <Comment key={index} data={comment} />
      ))}
    </div>
  );
};

export default CommentsContainer;
