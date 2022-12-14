import React from "react";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import logo from "../assets/Rick-And-Morty-Logo.png";
import image2 from "../assets/image2.jpg";
import ThemeContext from "../context/ThemeContext";

const Resume = ({ theme }) => {
  const { texts } = useContext(LanguageContext);

  return (
    <div className={`home__resume ${theme}`}>
      {/* <div 
        className={`home__resume ${theme}` 
        onClick={() => {
         handleActiveNav(false);
        }}> */}
      <div
        className="home__resume-text justify-content-center"
        style={{ paddingTop: "30px" }}
      >
        <p className=" text-muted mt-2 me-6 mx-5">
          <img src={logo} alt="Rick and Morty Logo" />
          {/*  Rick y Morty es una comedia animada estadounidense de ciencia ficción
          para adultos creada por Justin Roiland y Dan Harmon para el bloque de
          programación nocturna Adult Swim de Cartoon Network.
          <br />
          <br />
          La serie sigue las desventuras del cínico científico loco Rick Sanchez
          y su nieto de buen corazón pero inquieto Morty Smith, que dividía su
          tiempo entre la vida doméstica y las aventuras interdimensionales. */}
          {texts.home.resume}
        </p>
        <div className="img ">
          <img className="img-fluid img-home " src={image2} alt="Rick" />
        </div>
      </div>
    </div>
  );
};

export default Resume;
