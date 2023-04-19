import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AppointmentsNav = () => {
  return (
    <div className=" mt-5 bg-white ">
      <div className="h-[4rem] border border-b-gray-400 flex items-center justify-start gap-10 pl-3">
        <NavLink
          to="upcoming-appointments"
          className={({ isActive }) =>
            isActive
              ? "text-xl text-gray-700 border-b-[5px] border-blue-500  py-3 text-center"
              : "text-xl text-gray-700"
          }
        >
          upcoming appointments
        </NavLink>
        <NavLink
          to="past-appointments"
          className={({ isActive }) =>
            isActive
              ? "text-xl text-gray-700 border-b-[5px] border-blue-500  py-3 text-center"
              : "text-xl text-gray-700"
          }
        >
          past appointments
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AppointmentsNav;
