import React from "react";
import { FooterContent } from "../footer/FooterMain";
import LandingPage from "../landing_page";
import { TiLocationArrow } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

type Props = {};

const HomePage = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      <LandingPage top="top-[35%]" left="left-[10%]" bg="bg-gray-800">
        <div className="ml-10">
          <h1 className="text-white text-[2.3rem] font-[700]">Meet The </h1>
          <h1 className="text-white text-[2.3rem] font-[700]">
            Most Qualified Doctors
          </h1>
        </div>
        <div className="ml-10 mt-10">
          <p className="text-white text-[1.2rem]">
            Great doctor if you need your family member to get effective
          </p>
          <p className="text-white text-[1.2rem]">
            immediate assistance, emergency treatment or a simple consultation.
          </p>
        </div>
        <div className=" px-10 flex items-center h-44 gap-5">
          <button
            onClick={() => navigate("/add-patient")}
            className="px-5 py-3 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[1.1rem] rounded-full border-[2px] border-white"
          >
            Patient Account
            <TiLocationArrow className="rotate-45 text-3xl " />
          </button>
          <button className="px-5 py-3 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[1.1rem] rounded-full border-[2px] border-white">
            Doctor Account
            <TiLocationArrow className="rotate-45 text-3xl " />
          </button>
        </div>
      </LandingPage>
      <FooterContent />
    </div>
  );
};

export default HomePage;
