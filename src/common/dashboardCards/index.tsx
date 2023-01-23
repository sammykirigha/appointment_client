import React from "react";
import { RiScissorsFill } from "react-icons/ri";
import { FaInternetExplorer } from "react-icons/fa";
import { BsFillPersonFill, BsFillFileEarmarkDiffFill } from "react-icons/bs";
import Card, { ICardsInfo } from "../card";

const iconStyles = {
  height: "30px",
  width: "30px",
  color: "white",
};

const cardsInfo: ICardsInfo[] = [
  {
    icon: <BsFillPersonFill style={iconStyles} />,
    number: "558",
    category: "Todays Patients",
    percentageIncrease: "18% Higher Then Last Month",
  },
  {
    icon: <BsFillFileEarmarkDiffFill style={iconStyles} />,
    number: "164",
    category: "Appointments",
    percentageIncrease: "21% Higher Then Last Month",
  },
  {
    icon: <RiScissorsFill style={iconStyles} />,
    number: "112",
    category: "Today's Operations",
    percentageIncrease: "37% Higher Then Last Month",
  },
  {
    icon: <FaInternetExplorer style={iconStyles} />,
    number: "16",
    category: "Online Appointment",
    percentageIncrease: "10% Higher Then Last Month",
  },
];

const DashboardCards = () => {
  return (
    <div className="bg-gray-50 grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 mt-5 rounded-md">
      {cardsInfo?.map((card, index) => {
        return (
          <Card
            key={index}
            icon={card.icon}
            number={card.number}
            category={card.category}
            percentageIncrease={card.percentageIncrease}
          />
        );
      })}
    </div>
  );
};

export default DashboardCards;
