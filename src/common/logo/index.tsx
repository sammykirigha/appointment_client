import React from "react";
import logo from "../../assets/images/logo.jpg";

type Props = {
  colorChange?: boolean;
};

const Logo = (props: Props) => {
  const { colorChange } = props;

  return (
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
  );
};

export default Logo;
