import React from "react";
import { commentsData } from "../utils/comentsData";
import Comment from "./Comment";
import { useSelector } from "react-redux";

const CommentsContainer = () => {
  const videoDetails = useSelector((store) => store.video.videoDetails);
  const noOfComment = videoDetails?.statistics?.commentCount;

  return (
    <div className=" w-screen md:w-[900px]">
      <h1 className="font-bold text-2xl">{noOfComment} Comments</h1>
      {commentsData.map((comment, index) => (
        <Comment key={index} data={comment} />
      ))}
    </div>
  );
};

export default CommentsContainer;
