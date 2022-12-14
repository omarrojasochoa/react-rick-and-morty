import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Button from "./Button";

const ErrorMessage = ({ error, url, home, goBack }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="err-c">
      {" "}
      <div className={`error-container ${theme}`}>
        <h3 className="error-message">
          {`Error: ${error.status}`} <br /> {`${error.statusText}`}
        </h3>
        <p>No hay resultados para esta solicitud.</p>
        {/* <p>NO HAY RESULTADOS PARA ESTA SOLICITUD</p> */}
        {goBack && (
          <button
            className={`boton ${theme}`}
            onClick={(e) => window.history.back()}
          >
            Go back
          </button>
        )}
        <span> </span>
        {home && <Button url="/">Regresar</Button>}
        <span> </span>
      </div>
    </div>
  );
};

export default ErrorMessage;
