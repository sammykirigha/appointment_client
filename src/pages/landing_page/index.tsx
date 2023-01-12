import React from "react";
import { FooterMain } from "../footer";
import { FaFacebook } from "react-icons/fa";
import Navbar from "../navbar";

type Props = {
  children: React.ReactNode;
  left?: string;
  top?: string;
  bg?: string;
};

const LandingPage = (props: Props) => {
  const { children, bg, left = "left-[60%]", top = "top-[10%]" } = props;
  return (
    <div>
      <div className="bg-bg relative h-screen  bg-no-repeat bg-cover bg-scroll bg-center"></div>
      <div
        className={`${bg} opacity-30 bg-overlay bg-overlay-darken h-[100%] w-[100%] absolute top-0 right-0 left-0`}
      ></div>
      <Navbar />
      <div className={`absolute ${top} ${left}`}>{children}</div>
    </div>
  );
};

export default LandingPage;
