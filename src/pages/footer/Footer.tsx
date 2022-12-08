import React, { useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import { NavigationContext } from "../../setup/app-context-manager/navigation-context";

export const Footer = () => {
  const { sideBarOpen, toggleSidebar } = useContext(NavigationContext);
  return (
    <div
      className={` bg-white h-[55px] bg-white-600 border-t border-gray-200 ${
        sideBarOpen && "ml-[250px]"
      }`}
    >
      <p className="text-gray-400 font-normal  px-2 text-md inline-flex items-center mt-3">
        {new Date().getFullYear()} @ Dorcis. Design with{" "}
        <span className="mx-[5px] mt-[6px]">
          <AiFillHeart className="text-red-400 " />
        </span>{" "}
        by SamuelKirigha{" "}
      </p>
    </div>
  );
};
