import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

const Button = ({ url, children, modifiers }) => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => {
        navigate(url);
        window.scrollTo(0, 0);
      }}
      className={`boton ${theme} ${modifiers} `}
      style={{ minWidth: "150px" }}
    >
      {children}
    </button>
  );
};

export default Button;
