import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.jpg";
import { MdOutlineLogout } from "react-icons/md";

type Props = {};

const Navbar = (props: Props) => {
  const [colorChange, setColorChange] = useState<boolean>(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);

    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <div
      className={`flex h-20 ${
        colorChange ? "bg-white" : ""
      } flex-row fixed items-center justify-between top-0 left-0 w-full z-20`}
    >
      <div className="mt-10 flex gap-0">
        <div className="h-24 w-24 ml-10">
          <img
            src={logo}
            alt="logo"
            height="50%"
            width="50%"
            className="cursor-pointer rounded-full m-0"
          />
        </div>
        <h1
          className={`text-[1.3rem] -ml-9 mt-4 p-0 ${
            colorChange ? "text-blue-700" : "text-white"
          } font-bold cursor-pointer`}
        >
          DOCTRIS .
        </h1>
      </div>
      <div className="ml-auto mr-10">
        <ul className="flex items-center cursor-pointer">
          <li
            className={`${
              colorChange ? "text-blue-700" : "text-white"
            } text-2xl  font-[500]`}
          >
            Logout
          </li>
          <MdOutlineLogout
            className={` ${
              colorChange ? "text-blue-700" : "text-white"
            } text-2xl ml-3 font-[500]`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
