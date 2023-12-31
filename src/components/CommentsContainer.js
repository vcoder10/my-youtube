import React from "react";
import { commentsData } from "../utils/comentsData";
import Comment from "./Comment";

const CommentsContainer = () => {
  return (
    <div className="m-3 p-3">
      <h1 className="font-bold text-2xl">Comments</h1>
      {commentsData.map((comment, index) => (
        <Comment key={index} data={comment} />
      ))}
    </div>
  );
};

export default CommentsContainer;