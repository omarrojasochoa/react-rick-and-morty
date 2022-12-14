import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import MainCharacters from "../components/MainCharacters";
import Resume from "../components/Resume";
import ThemeContext from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`home ${theme}`}
      /* className={`home ${theme}`}
      onClick={() => {
        handleActiveNav(false);
      }} */
    >
      <div className="home__header"></div>
      <Resume theme={theme} />

      <MainCharacters />
      <Outlet />
    </div>
  );
};

export default Home;
