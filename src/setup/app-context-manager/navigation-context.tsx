import React, { createContext, useState } from "react";

interface AppContextInterface {
  sideBarOpen: boolean;
  toggleSidebar: () => void;
}

type Props = {
  children: React.ReactNode;
};

export const NavigationContext = createContext({} as AppContextInterface);

export const NavigationProvider = ({ children }: Props) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const toggleSidebar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  //
  return (
    <NavigationContext.Provider value={{ sideBarOpen, toggleSidebar }}>
      {children}
    </NavigationContext.Provider>
  );
};
