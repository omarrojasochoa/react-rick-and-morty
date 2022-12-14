import React from "react";
/* import { Link } from "react-router-dom"; */
import { createRef } from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ActiveNavContext from "../context/ActiveNavContext";
import LanguageContext from "../context/LanguageContext";
/*import ScrollContext from "../context/ScrollContext";*/
import ThemeContext from "../context/ThemeContext";
import logo from "../assets/rick-and-morty.png";
import NavActions from "./NavActions";

const Header = () => {
   const { texts } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  /* const { scroll } = useContext(ScrollContext);*/
  const { navIsActive, handleActiveNav } = useContext(ActiveNavContext);

  const header = createRef();
  const navigate = useNavigate();

  /* return <Navigation />;
  function Navigation() {
    return (
      <nav className="bg-light d-flex inline-block">
        <ul>
          <li>
            <Link to="/"> Inicio</Link>
            <Link to="/characters"> Personajes</Link>
            <Link to="/episodes"> Episodios</Link>
          </li>
        </ul>
      </nav>
    );
  } */
  return (
    <div
      /* className={`header ${theme} ${scroll ? "up" : "down"} ${
        navIsActive ? "scrollTop" : ""
      }` */
      className={`header ${theme} bg-gradient up`}
      ref={header}
    >
      <img
        src={logo}
        alt="Rick and Morty"
        className="header__logo"
        onClick={(e) => {
          navigate("/");
          window.scrollTo(0, 0);
        }}
      />
      <i
        className="fa-solid fa-bars nav__bar"
        onClick={() => {
          handleActiveNav(true);
        }}
      ></i>
      <nav /* className={`nav ${theme} ${navIsActive && "active"}`} */
        className={`nav ${theme} ${navIsActive && "active"} `}
      >
        <NavLink
          to="/"
          activeclassname="active"
          className="nav__link"
          onClick={(e) => {
            handleActiveNav();
            window.scrollTo(0, 0);
          }}
        >
          {texts.header.home}
          {/* Inicio */}
        </NavLink>
        <NavLink
          to="/characters?page=1"
          activeclassname="active"
          className="nav__link"
          onClick={(e) => {
            handleActiveNav();
            window.scrollTo(0, 0);
          }}
        >
          {texts.header.characters}
          {/* Personajes */}
        </NavLink>
        <NavLink
          to="/episodes"
          activeclassname="active"
          className="nav__link"
          onClick={(e) => {
            handleActiveNav();
            window.scrollTo(0, 0);
          }}
        >
          {texts.header.episodes}
          {/* Episodios */}
        </NavLink>
        <NavActions />
      </nav>
    </div>
  );
};

export default Header;
