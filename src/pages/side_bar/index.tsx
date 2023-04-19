import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  NavigationContext,
  NavigationContextType,
} from "../../contexts/Navigation.Context";
import { Logo } from "../../common";
import { links } from "../../links";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { IoMdArrowDropright } from "react-icons/io";
import { useAppSelector } from "../../setup/app-hooks";
import useFetchDoctor from "../../setup/app-hooks/fetch-doctors/useFetchDoctor";
import useFetchPatient from "../../setup/app-hooks/fetch-patients";

const Sidebar = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { patient } = useAppSelector((state) => state.patient);
  const { doctor } = useAppSelector((state) => state.doctor);
  const context = useContext<NavigationContextType | null>(NavigationContext);

  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("");

  useFetchDoctor();
  useFetchPatient();

  return (
    <div
      className={`fixed w-[250px] top-[68px] bg-white border-r border-gray-200 h-screen lg:top-0 left-0 z-10 ${
        context?.sideBarOpen ? "translate-x-0" : "-translate-x-[100%]"
      }`}
    >
      <Logo />
      <div className="pt-2 slim-scrollbar overflow-auto h-[470px] bg-white">
        <>
          {links?.map(
            ({ icon, link, name, childrenLinks, access = [] }, index) => {
              if (!access?.includes(user ? user?.role : "")) return null;
              if (childrenLinks && childrenLinks?.length > 0) {
                return (
                  <div className="w-full" key={index}>
                    <div className=" flex flex-col items-center pl-3">
                      <div
                        className="flex justify-between w-full items-center pr-3"
                        onClick={() =>
                          setIsActive(isActive === name ? "" : name)
                        }
                      >
                        <div className="flex flex-row items-center cursor-pointer pt-3 justify-between ">
                          <div className="w-8 h-8 bg-gray-50 flex items-center rounded-md pl-2 mr-2">
                            {icon}
                          </div>
                          <div className="text-md text-gray-500 font-semibold">
                            {name}
                          </div>
                        </div>

                        <div className="flex items-center mt-2.5 cursor-pointer">
                          {isActive === name ? (
                            <RiArrowUpSLine className="text-gray-500" />
                          ) : (
                            <RiArrowDownSLine className="text-gray-500" />
                          )}
                        </div>
                      </div>

                      <div className="bg-white w-full pl-5">
                        {isActive === name &&
                          childrenLinks?.map((child, index) => {
                            return (
                              <div>
                                <div
                                  key={index}
                                  className=""
                                  onClick={() =>
                                    navigate("/" + user?.role + child["link"])
                                  }
                                >
                                  <div className="flex pt-3 mx-3 text-sm text-gray-500 cursor-pointer items-center">
                                    <span>
                                      <IoMdArrowDropright className="text-slate-800" />
                                    </span>
                                    {child["name"]}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={index} className="ml-3 mt-3">
                    <div
                      onClick={() =>
                        navigate(
                          "/" +
                            user?.role +
                            link
                              .toString()
                              .replace("/doctors/:id", `/doctors/${doctor?.id}`)
                              .replace(
                                "/patients/:id",
                                `/patients/${patient?.id}`
                              )
                        )
                      }
                      className="flex items-center cursor-pointer"
                    >
                      <div className="w-7 h-7 bg-gray-50 flex items-center rounded-md pl-2 mr-2">
                        {icon}
                      </div>
                      <div className="text-md text-gray-500 font-semibold">
                        {name}
                      </div>
                    </div>
                  </div>
                );
              }
            }
          )}
        </>
      </div>
    </div>
  );
};

export default Sidebar;
