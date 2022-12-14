import { useState } from "react";
import { createContext } from "react";

const ActiveNavContext = createContext();

const ActiveNavProvider = ({ children }) => {
  const [navIsActive, setnavIsActive] = useState(false);

  const handleActiveNav = (isClickBar = false) => {
    if (isClickBar) setnavIsActive(true);

    navIsActive && setnavIsActive(false);
  };

  const data = { navIsActive, handleActiveNav };
  return (
    <ActiveNavContext.Provider value={data}>
      {children}
    </ActiveNavContext.Provider>
  );
};

export { ActiveNavProvider };
export default ActiveNavContext;
