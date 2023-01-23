import { createContext, useState } from "react";

export type NavigationContextType = {
  sideBarOpen: boolean;
  toggleSidebar: () => void;
};

type Props = {
  children: React.ReactNode;
};

export const NavigationContext = createContext<NavigationContextType | null>(
  null
);

export const NavigationProvider = (props: Props) => {
  const { children } = props;
  const [sideBarOpen, setSideBarOpen] = useState(true);

  const toggleSidebar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <NavigationContext.Provider value={{ sideBarOpen, toggleSidebar }}>
      {children}
    </NavigationContext.Provider>
  );
};
