import React from "react";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import spain from "../assets/spain-flag.svg";

const NavActions = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { language, handleLanguage } = useContext(LanguageContext);
  return (
    <div className="nav__actions">
      {/* <img src={usa} alt="" /> */}
      <div>
        <i
          /* className={`fa-solid ${
            theme === "light" ? "fa-moon" : "fa-sun"
          } theme-changer`} */
          /* className={`fa-solid fa-sun theme-changer`} */

          className={`fa-solid ${
            theme === "light" ? "fa-moon" : "fa-sun"
          } theme-changer`}
          onClick={() => handleTheme(theme === "light" ? "dark" : "light")}
        ></i>
        <select
          name=""
          id=""
          defaultValue={language}
          className="language-changer"
          onChange={handleLanguage}
        >
          <option className={`bg-dark text-white`} value="es">
            <strong>ES</strong>
          </option>
          <option className={`bg-dark text-white`} value="en">
            <strong>EN</strong>
          </option>
        </select>
      </div>
    </div>
  );
};

export default NavActions;
