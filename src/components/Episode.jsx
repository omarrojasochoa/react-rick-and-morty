import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

const Episode = ({ data }) => {
  const location = useLocation();
  const { info, name, image } = data;
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Link
        to={`${location.pathname}${
          location.pathname.slice(-1) === "/" ? "episode" : "/episode"
        }/${info}${location.search}`}
        rel="noreferrer"
        style={{ margin: "1rem" }}
        className="character"
      >
        <figure
          className={`character__figure m-4 text-center p-4 card carbody text-${theme}`}
          /* id="figure-episode" */
        >
          <img className="img-fluid " src={image} alt={name} />
          <figcaption>{name}</figcaption>
        </figure>
      </Link>
    </>
  );
};
export default Episode;
