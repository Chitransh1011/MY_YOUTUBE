import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { generateRandomName, makeid } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chat = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeid(10),
        })
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="border border-black mr-3  w-full h-[500px] bg-slate-100 rounded-md mt-2 overflow-y-scroll flex flex-col-reverse">
        {chat.map((res) => {
          return (
            <div>
              <ChatMessage name={res.name} message={res.message} />
            </div>
          );
        })}
      </div>
      <form
        className="border border-black p-2 mr-3 w-full"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name:"Arjit",
            message:liveMessage,
          }));
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-96"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        ></input>
        <button className="bg-green-300 px-2 mx-2">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
