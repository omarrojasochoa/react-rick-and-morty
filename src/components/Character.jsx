import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

const Character = ({ data }) => {
  const { id, name, image } = data;
  const { theme } = useContext(ThemeContext);

  /* return (
    <div className="text-center p-4 card carbody text-dark">
      <h3 className="">{character.name}</h3>
      <img
        className="img-fluid rounded-pill"
        src={character.image}
        alt={character.name}
      />
      <p>{character.origin.name}</p>
    </div>
  ); */

  const location = useLocation();
  return (
    <>
      <Link
        to={`${location.pathname}${
          location.pathname.slice(-1) === "/" ? "character" : "/character"
        }/${id}${location.search}`}
        rel="noreferrer"
        style={{ margin: "1rem" }}
        className="character"
      >
        <figure
          className={`character__figure m-4 text-center p-4 card carbody text-${theme}`}
          /* id="figure" */
        >
          <h3 className="">{name}</h3>
          <img className="img-fluid " src={image} alt={name} />
          <figcaption>{data.origin.name}</figcaption>
        </figure>
      </Link>
    </>
  );
};

export default Character;
