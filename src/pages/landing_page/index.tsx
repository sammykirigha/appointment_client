import React from "react";
import { FooterMain } from "../footer";
import { FaFacebook } from "react-icons/fa";
import logo from "../../assets/images/logo.jpg";

type Props = {
  children: React.ReactNode;
  left?: string;
  top?: string;
  bg?: string;
};

const LandingPage = (props: Props) => {
  const { children, bg, left = "left-[65%]", top = "top-[10%]" } = props;
  return (
    <div>
      <div className="bg-bg relative h-screen  bg-no-repeat bg-cover bg-scroll bg-center"></div>
      <div
        className={`${bg} opacity-30 bg-overlay bg-overlay-darken h-[100%] w-[100%] absolute top-0 right-0 left-0`}
      ></div>
      <div className="mx-auto absolute top-10 left-[3rem] flex gap-0">
        <div className="h-24 w-24 m-0">
          <img
            src={logo}
            alt="logo"
            height="50%"
            width="50%"
            className="cursor-pointer rounded-full m-0"
          />
        </div>
        <h1 className="text-[1.3rem] -ml-9 mt-4 p-0 text-white font-bold cursor-pointer ">
          DOCTRIS .
        </h1>
      </div>
      <div className={`absolute ${top} ${left}`}>{children}</div>
    </div>
  );
};

export default LandingPage;
