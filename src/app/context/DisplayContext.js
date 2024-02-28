import { createContext, useState } from "react";

export const DisplayContext = createContext();

export const DisplayProvider = ({ children }) => {
  const [isDisplayed, setIsDisplay] = useState("all");

  const toggleDisplay = (item) => {
    setIsDisplay(item);
  };

  return (
    <DisplayContext.Provider value={{ toggleDisplay, isDisplayed }}>
      {children}
    </DisplayContext.Provider>
  );
};
