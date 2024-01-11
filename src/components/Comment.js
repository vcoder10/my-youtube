import React from "react";
import userImg from "../images/chatIcon.png";
const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="flex  bg-gray-50 p-1 md:p-2 rounded-lg my-2">
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
