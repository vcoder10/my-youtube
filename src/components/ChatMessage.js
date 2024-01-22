import React from "react";
import chatUser from "../images/chatIcon.png";
import { useSelector } from "react-redux";
const ChatMessage = ({ name, message }) => {
  const theme = useSelector((store) => store.app.theme);
  return (
    <div
      className={`flex p-2 items-center shadow-sm ${
        !theme ? "text-white" : "text-black"
      }`}
    >
      <img className="w-8 h-8" alt="user" src={chatUser} />

      <span className="px-2 font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
