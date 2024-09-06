import React from "react";
import { LuPanelLeftClose } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";

function OptionBar(props) {
  const toggleSidebar = props.toggleSidebar;
  return (
    <div className="flex justify-between p-2">
      <button onClick={toggleSidebar}>
        <LuPanelLeftClose size={20} color="gray" />
      </button>
      <button onClick={toggleSidebar}>
        <FiEdit size={20} color="gray" />
      </button>
    </div>
  );
}

export default OptionBar;
