import React, { useState } from "react";
import ChatInput from "../components/chat_input";
import OptionBar from "../components/options";
import ChatHistory from "../components/history";
import UpgradePlans from "../components/upgrade";
import ChatHeader from "../components/chat_header";
import ChatBody from "../components/chat_body";
import model from "../utils/gemini";

function ChatGptHomePage() {
  const [isOpen, setIsOpen] = useState(true);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessage] = useState([]);

  const onPromptChange = (value) => {
    setPrompt(value);
  };

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    setMessage((messages) => [...messages, { text: prompt, who: "user" }]);
    const result = await model.generateContent(prompt);
    const items = result.response.candidates;
    const texts = items.map((e) => e.content.parts[0].text).join(" \n");

    setMessage((messages) => [...messages, { text: texts, who: "ai" }]);
    setPrompt("");
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
          <ChatBody updatePrompt={onPromptChange} messages={messages} />
          <ChatInput
            updatePrompt={onPromptChange}
            prompt={prompt}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default ChatGptHomePage;
