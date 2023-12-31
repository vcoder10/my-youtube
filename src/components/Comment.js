import React from "react";
import userImg from "../images/userIcon.jpg";
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  console.log(replies);
  return (
    <div className="flex shadow-sm bg-gray-50 p-2 rounded-lg my-2">
      <img className="w-12 h-12" alt="user" src={userImg} />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
        {replies.length > 0 && (
          <div className="border border-l-black ml-5">
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
