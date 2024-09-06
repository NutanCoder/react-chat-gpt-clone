import React from "react";
import { IoTerminalOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { SlBulb } from "react-icons/sl";
import { BiFoodMenu } from "react-icons/bi";

function ChatBody(props) {
  const updatePrompt = props.updatePrompt;

  const suggestions = [
    {
      title: "Create an illustration for a bakery",
      icon: <SlBulb color="yellow" size="24" className="mb-1" />,
    },
    {
      title: "Count the number of items in an image",
      icon: <CiImageOn color="blue" size="24" className="mb-1" />,
    },
    {
      title: "Recipe with what's in my kitchen",
      icon: <BiFoodMenu color="green" size="24" className="mb-1" />,
    },
    {
      title: "Python script for daily email reports",
      icon: <IoTerminalOutline color="red" size="24" className="mb-1" />,
    },
  ];
  return (
    <div className="mx-auto lg:w-3/5 md:w-4/5 overflow-hidden">
      <div className="flex justify-center mb-4">
        <img
          className="w-24"
          src="data:image/png;base64,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"
          alt="GptIcon"
        />
      </div>
      <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-4 md:gap-4 gap-x-4 gap-y-2">
        {suggestions.map((suggestion) => {
          return (
            <div
              onClick={() => {
                const value = suggestion.title;
                updatePrompt(value);
              }}
              className="shadow-sm hover:shadow border hover:border-gray-500 duration-500 rounded-2xl p-3 flex flex-col cursor-pointer"
            >
              {suggestion.icon}
              <p className="text-sm text-gray-800">{suggestion.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChatBody;
