import React from "react";

const Skill = ({ imageSrc, skillName, percentage }) => {
    return (
      <li className="relative group list-none text-center">
        <div className="w-17 h-17 rounded-full bg-gray-300 flex items-center justify-center circle group-hover:opacity-70 cursor-pointer relative">
          <img
            src={imageSrc}
            alt={skillName}
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="text-lg">{percentage}</div>
          </div>
        </div>
        <div className="mt-2">{skillName}</div>
      </li>
    );
  };      

export default Skill;
