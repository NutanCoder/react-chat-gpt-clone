import React from "react";
import { FaSquareUpwork } from "react-icons/fa6";

function UpgradePlans() {
  return (
    <div className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-lg cursor-pointer">
      <div className="border rounded-full bg-white p-2">
        <FaSquareUpwork />
      </div>
      <div>
        <h6 className="text-sm">Upgrade Plans</h6>
        <p className="text-xs font-extralight">Get GPT-4, DALLE-E, and more</p>
      </div>
    </div>
  );
}

export default UpgradePlans;
