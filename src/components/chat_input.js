import React from "react";
import { CgAttachment } from "react-icons/cg";
import { FaArrowCircleUp } from "react-icons/fa";

function ChatInput(props) {
  const updatePrompt = props.updatePrompt;
  const prompt = props.prompt;
  const sendMessage = props.sendMessage;

  const onInputChange = (e) => {
    const value = e.target.value;
    updatePrompt(value);
  };

  return (
    <div className="mx-auto lg:w-4/5 md:w-4/5 w-full">
      <div className="flex items-center bg-slate-100  py-3 px-4 rounded-3xl">
        <CgAttachment size="20" />
        <textarea
          type="text"
          rows="1"
          value={prompt}
          onChange={onInputChange}
          placeholder="Message ChatGpt"
          className="border w-full bg-transparent outline-none border-none px-2 resize-none"
        ></textarea>
        <button type="button" onClick={sendMessage}>
          <FaArrowCircleUp size="20" />
        </button>
      </div>
      <p className="text-center text-sm pt-2 text-gray-600">
        ChatGPT can make mistakes. Check important info.
      </p>
    </div>
  );
}

export default ChatInput;
