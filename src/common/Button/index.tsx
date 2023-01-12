import React, { ButtonHTMLAttributes } from "react";
import { ImSpinner10 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  to?: string;
  isSubmitting?: boolean;
  children?: React.ReactNode;
  loading?: boolean;
  // icon?: React.ReactNode;
  // onClick?:   (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  text,
  to = "",
  loading = false,
  isSubmitting,
  children,
  ...props
}: IButtonProps) => {
  const navigate = useNavigate();
  return (
    <button
      {...props}
      // onClick={to ===""?onClick: navigate(to)}
      disabled={loading}
      className={`button  ${
        isSubmitting
          ? " bg-opacity-75 hover:bg-opacity-75 cursor-not-allowed"
          : "cursor-pointer"
      }`}
    >
      {isSubmitting && <ImSpinner10 className="animate-spin" />}{" "}
      <span>{text}</span>
      {children}
    </button>
  );
};

export default Button;
