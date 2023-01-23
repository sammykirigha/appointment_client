import React, { useContext } from "react";
import { Footer } from "../footer";
import Navbar from "../navbar/Navbar";
import Sidebar from "../side_bar";
import { NavigationContext } from "../../contexts/Navigation.Context";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  const { children } = props;
  const context = useContext(NavigationContext);

  return (
    <div className="bg-gray-100 ">
      <Sidebar />
      <div className=" relative  flex flex-col  min-h-screen">
        <Navbar />
        <div
          className={` min-h-screen pt-8 pb-6 ${
            context?.sideBarOpen && "lg:ml-[250px]"
          }`}
        >
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
