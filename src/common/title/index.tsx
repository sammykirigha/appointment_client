import React from "react";

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <div className="mt-0">
      <h2 className="text-gray-600 text-xl font-semibold">{title}</h2>
    </div>
  );
};

export default Title;
