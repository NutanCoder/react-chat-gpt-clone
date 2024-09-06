import React from "react";
import { FiEdit } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { LuPanelLeftClose } from "react-icons/lu";

function ChatHeader(props) {
  const toggleSidebar = props.toggleSidebar;
  const isOpen = props.isOpen;
  return (
    <div className="flex justify-between p-1">
      <div className="flex gap-4">
        <button onClick={toggleSidebar} className={isOpen ? "hidden" : ""}>
          <LuPanelLeftClose size={20} color="gray" />
        </button>
        <button onClick={toggleSidebar} className={isOpen ? "hidden" : ""}>
          <FiEdit size={20} color="gray" />
        </button>
        <button className="text-gray-500 font-semibold tracking-wide flex items-center">
          ChatGPT
          <span className="ml-1 py-2">
            <IoIosArrowDown size={15} />
          </span>
        </button>
      </div>
      <button className="bg-purple-800 rounded-full text-sm p-2 text-white">
        NU
      </button>
    </div>
  );
}

export default ChatHeader;
