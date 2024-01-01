import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import { addMessage } from "../utils/chatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  const handleChatOnClick = () => {
    dispatch(addMessage({ name: "vikram", message: message }));
    setMessage("");
  };
  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      handleChatOnClick();
    }
  };
  return (
    <>
      <div className="mt-24 w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            // Disclaimer: Don't use indexes as keys
            chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c?.name} message={c?.message} />
            ))
          }
        </div>
      </div>
      <div className="w-full py-1 px-2 mx-2 border border-black rounded-lg ">
        <input
          className="px-2 py-1 mx-2 border border-black w-80 rounded-lg"
          type="text"
          placeholder="Chat..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleEnterKeyPress} // Handle Enter key press
        />
        <button
          className="px-2 py-1 bg-gray-400 w-24 rounded-lg"
          onClick={handleChatOnClick}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default LiveChat;
