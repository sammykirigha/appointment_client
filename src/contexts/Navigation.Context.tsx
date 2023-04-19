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

export const NavigationProvider = ({ children }: Props) => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <NavigationContext.Provider value={{ sideBarOpen, toggleSidebar }}>
      {children}
    </NavigationContext.Provider>
  );
};
