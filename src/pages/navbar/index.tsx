import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.jpg";
import { MdOutlineLogout } from "react-icons/md";
import { Logo } from "../../common";

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
      <Logo colorChange={colorChange} />
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
