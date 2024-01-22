//import React, { useContext } from "react";
import { commentsData } from "../utils/comentsData";
import Comment from "./Comment";
import { useSelector } from "react-redux";
//mport themeContext from "../utils/ThemeContext";

const CommentsContainer = () => {
  const videoDetails = useSelector((store) => store.video.videoDetails);
  const noOfComment = videoDetails?.statistics?.commentCount;
  const theme = useSelector((store) => store.app.theme);
  //const { theme } = useContext(themeContext);
  return (
    <div
      className={` w-screen md:w-[900px]  ${
        !theme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-2xl font-bold">{noOfComment} Comments</h1>
      {commentsData.map((comment, index) => (
        <Comment key={index} data={comment} />
      ))}
    </div>
  );
};

export default CommentsContainer;
