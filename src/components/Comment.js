import React from "react";
import userImg from "../images/chatIcon.png";
import { useSelector } from "react-redux";
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  const theme = useSelector((store) => store.app.theme);

  return (
    <div
      className={`flex p-1 md:p-2 rounded-lg my-2  ${
        !theme ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <img className="w-6 h-6 md:w-10 md:h-10" alt="user" src={userImg} />
      <div className="md:px-3">
        <p className="font-bold md:text-lg text-sm">{name}</p>
        <p className="text-sm md:text-lg">{text}</p>
        {replies.length > 0 && (
          <div className=" border-l-black md:ml-5">
            {replies.map((reply, index) => (
              <Comment key={index} data={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
