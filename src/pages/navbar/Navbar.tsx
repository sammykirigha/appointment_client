import React, { useContext } from "react";
import email from "../../assets/images/email.png";
import { BiSearchAlt2 } from "react-icons/bi";
import {
  NavigationContext,
  NavigationContextType,
} from "../../contexts/Navigation.Context";
import { FiAlignJustify } from "react-icons/fi";
import { MdAvTimer } from "react-icons/md";
import { RiSettings5Line } from "react-icons/ri";
import { BiLogInCircle } from "react-icons/bi";
import { Dropdown, MenuItem } from "../../common";
import { FaUser } from "react-icons/fa";
import { logoutUserAction } from "../../store/actions/auth.action";
import { useAppDispatch, useAppSelector } from "../../setup/app-hooks";

export const Styles = {
  height: "27px",
  width: "27px",
  color: "#0081CF",
  cursor: "pointer",
};

type NavbarProps = {
  onClick?: () => void;
};

const Navbar = (props: NavbarProps) => {
  const context = useContext<NavigationContextType | null>(NavigationContext);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  console.log("====================================");
  console.log("navbar context", context);
  console.log("====================================");

  return (
    <div
      className={`bg-white-900 py-[13px] flex flex-row border-b border-gray-200 border-l  fixed z-10 right-0 top-0 ${
        context?.sideBarOpen ? "left-0 lg:left-[250px]" : "left-0"
      } bg-white`}
    >
      <div className="flex w-64 justify-between ml-3">
        <div
          onClick={context?.toggleSidebar}
          className="mx-4 bg-gray-100 items-center p-1 h-9 rounded-full hover:bg-blue-600 drop-shadow-lg"
        >
          <FiAlignJustify style={Styles} />
        </div>
        <div className="hidden sm:flex bg-white-800 items-center">
          <input
            placeholder="Search Keywords..."
            className="h-9 w-64 border border-gray-600 rounded-full pl-8 focus:border-0"
          />
          <BiSearchAlt2 className="text-[black] h-[25px] w-[25px] -ml-[35px] cursor-pointer" />
        </div>
      </div>

      <div className="ml-auto flex mr-3">
        <Dropdown
          width={400}
          scrollHeight={200}
          activator={() => (
            <div className="bg-gray-300 w hover:bg-blue-600 cursor-pointer w-9 h-9 rounded-full items-center ml-2">
              <img
                src={email}
                alt="logo"
                className="m-2 relative w-5 h-5 rounded-full cursor-pointer"
              />
              <div className="-top-3 ml-6 absolute h-[20px] w-[25px] rounded-full bg-red-400 ">
                <span className="text-gray-900 ml-0">4</span>
              </div>
            </div>
          )}
          items={[
            () => (
              <MenuItem>
                <div className="flex flex-col my-3 ">
                  <h5>You have received a new email from</h5>
                  <div className="flex items-center justify-start">
                    <span className="text-lg text-gray-800 font-bold">
                      Kenya
                    </span>
                    <span className="text-gray-500 ml-1 mt-1">1 hour ago</span>
                  </div>
                </div>
              </MenuItem>
            ),
          ]}
        />
        <Dropdown
          width={200}
          activator={() => (
            <div className="bg-blue-500 flex items-center justify-center  cursor-pointer w-9 h-9 rounded-full ml-3">
              <FaUser className=" w-6 h-6 rounded-full cursor-pointer text-center" />
            </div>
          )}
          items={[
            () => (
              <div className="flex flex-col">
                <div className="flex flex-row items-center ml-4 mt-5 cursor-pointer">
                  <div className=" ml-2">
                    <div className="text-sm text-gray-700 uppercase">
                      {user?.username}
                    </div>
                    <div className="text-sm text-gray-400 uppercase tracking-tighter">
                      orthopedic
                    </div>
                  </div>
                </div>
                <div className="flex items-center ml-4 mt-5 group cursor-pointer">
                  <MdAvTimer className="text-md h-5 w-5 text-gray-500 group-hover:text-blue-600 " />
                  <span className="text-gray-500  text-md uppercase ml-3 group-hover:text-blue-600">
                    dashboard
                  </span>
                </div>
                <div className="flex items-center ml-4 mb-3 mt-3 group cursor-pointer">
                  <RiSettings5Line className="text-md h-5 w-5 text-gray-500 group-hover:text-blue-600 " />
                  <span className="text-gray-500  text-sm uppercase tracking-tighter ml-3 group-hover:text-blue-600">
                    profile settings
                  </span>
                </div>
                <div className="flex items-center ml-4 mb-6  group border-t pt-3 cursor-pointer">
                  <BiLogInCircle className="text-md h-5 w-5 text-gray-500 group-hover:text-blue-600 " />
                  <span
                    className="text-gray-500  text-sm uppercase tracking-tighter ml-3 group-hover:text-blue-600"
                    onClick={() => dispatch(logoutUserAction())}
                  >
                    log out
                  </span>
                </div>
              </div>
            ),
          ]}
        />
      </div>
    </div>
  );
};

export default Navbar;
