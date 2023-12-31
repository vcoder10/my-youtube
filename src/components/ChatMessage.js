import React from "react";
import chatUser from "../images/chatIcon.png";
const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex p-2 items-center shadow-sm">
      <img className="w-8 h-8" alt="user" src={chatUser} />

      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
