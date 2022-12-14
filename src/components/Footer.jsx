import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import "./footer.css";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  return (
    <div>
      <footer className={`backg-${theme} bg-gradient py-5`}>
        <div className="container m-auto">
          <div className="row text-white g-4 m-auto">
            <div className="col-md-6 col-lg-3 ">
              <h5 className="text-uppercase  brand " href="#">
                Rick & Morty
              </h5>
              <p className="text-white text-muted mt-3 me-5">
                {/* Proyecto realizado en React utilizando API's de Rick and Morty -
                TVMaze, se usó Cadenas de Consulta, React Router, React Context
                y Figma para el diseño. A través de lógica específica, encontré
                la solución para solicitar que cada episodio obtenga la
                información necesaria para completar el contenido.
                 */}
                {texts.footer.project}
              </p>
            </div>

            <div id="informacion" className="col-md-6 col-lg-3 ">
              <h5 className="fw-bold">
                {/* Información */}
                {texts.footer.information}
              </h5>
              <ul className="list-unstyled">
                <li className="my-3">
                  <Link
                    to="/"
                    className="text-white text-decoration-none text-muted"
                    onClick={(e) => window.scrollTo(0, 0)}
                  >
                    <i className="fas fa-chevron-right me-1"></i>
                    {/* Inicio */}
                    {texts.footer.home}
                  </Link>
                </li>
                <li className="my-3">
                  <Link
                    to="characters"
                    className="text-white text-decoration-none text-muted"
                    onClick={(e) => window.scrollTo(0, 0)}
                  >
                    <i className="fas fa-chevron-right me-1"></i>
                    {/* Personajes */}
                    {texts.footer.characters}
                  </Link>
                </li>
                <li className="my-3">
                  <Link
                    to="/episodes"
                    className="text-white text-decoration-none text-muted"
                    onClick={(e) => window.scrollTo(0, 0)}
                  >
                    <i className="fas fa-chevron-right me-1"></i>
                    {/* Episodios */}
                    {texts.footer.episodes}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3">
              <h5 className="fw-bold mb-3">
                {/* Contáctame */}
                {texts.footer.contact}
              </h5>
              <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                <span className="me-3">
                  <i className="fas fa-map-marked-alt"></i>
                </span>
                <span className="fw-light">
                  Av. Sergio Bernales 189 <br />
                  Surquillo, Lima - Perú.
                </span>
              </div>
              <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                <span className="me-3">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="fw-light"> orojas3095@gmail.com </span>
              </div>
              <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                <span className="me-3">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <span className="fw-light"> +51 974 604 319 </span>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <h5 className="fw-bold mb-3">
                {/* Sígueme en: */}
                {texts.footer.follow}
              </h5>
              <div className="footer__social-media">
                <ul className="list-unstyled d-flex">
                  <li>
                    <a
                      href="https://linkedin.com/in/omar-rojas-ochoa"
                      target="_blank"
                      className="text-white text-decoration-none text-muted fs-3 me-4"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/omarrojasochoa"
                      target="_blank"
                      className="text-white text-decoration-none text-muted fs-3 me-4"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/omar.ro30/"
                      target="_blank"
                      className="text-white text-decoration-none text-muted fs-3 me-4"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
