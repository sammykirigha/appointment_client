import React, { forwardRef } from "react";

type Props = {
  id?: string;
  children: React.ReactNode;
  size?: string;
};

const GlobalModal = forwardRef<HTMLInputElement, Props>(
  ({ id, children, size = "" }, ref = null) => {
    return (
      <div>
        <input type="checkbox" ref={ref} id={id} className="modal-toggle" />
        <div className="modal p-0">
          <div
            className={`
                modal-box relative max-w-none p-2 sm:p-4 slim-scrollbar ${
                  size === "xs"
                    ? "w-[400px]"
                    : size === "sm"
                    ? "w-[640px]"
                    : size === "md"
                    ? "w-[900px]"
                    : "w-[400px]"
                }
                `}
          >
            <label
              htmlFor={id}
              className=" absolute right-2 top-2 cursor-pointer text-[20px] text-gray-700 font-normal hover:text-gray-900 hover:font-extrabold"
            >
              ✕
            </label>
            {children}
          </div>
        </div>
      </div>
    );
  }
);

export default GlobalModal;
