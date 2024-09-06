import React, { useState } from "react";
import ChatInput from "../components/chat_input";
import OptionBar from "../components/options";
import ChatHistory from "../components/history";
import UpgradePlans from "../components/upgrade";
import ChatHeader from "../components/chat_header";
import ChatBody from "../components/chat_body";

function ChatGptHomePage() {
  const [isOpen, setIsOpen] = useState(true);
  const [prompt, setPrompt] = useState("");

  const onPromptChange = (value) => {
    setPrompt(value);
  };

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex h-screen overflow-hidden">
        <div className={isOpen ? "sidebar-open" : "sidebar-close"}>
          <OptionBar toggleSidebar={handleSidebar} />
          <ChatHistory />
          <UpgradePlans />
        </div>
        <div className={isOpen ? "main-open" : "main-close"}>
          <ChatHeader toggleSidebar={handleSidebar} isOpen={isOpen} />
          <ChatBody updatePrompt={onPromptChange} />
          <ChatInput updatePrompt={onPromptChange} prompt={prompt} />
        </div>
      </div>
    </div>
  );
}

export default ChatGptHomePage;
