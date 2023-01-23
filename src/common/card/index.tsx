import React from "react";

export interface ICardsInfo {
  icon: React.ReactNode;
  number: string;
  category: string;
  percentageIncrease: string;
}

const Card = ({ icon, number, category, percentageIncrease }: ICardsInfo) => {
  return (
    <div className="drop-shadow-md rounded-md bg-gradient-to-r from-blue-500 to-cyan-500  flex py-5 overflow-hidden shadow-lg">
      <div className="my-1 mx-3 w-full">
        <h4 className="text-white text-xl tracking-wide mb-2 font-semibold">
          {category}
        </h4>
        <div className="flex flex-row items-center justify-between mb-2">
          {icon}
          <span className="text-white text-lg tracking-wide font-semibold">
            {number}
          </span>
        </div>
        <span className="text-white text-lg">{percentageIncrease}</span>
      </div>
    </div>
  );
};

export default Card;
