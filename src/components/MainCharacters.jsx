import React, { useContext, useEffect, useState } from "react";

import LanguageContext from "../context/LanguageContext";
import Character from "./Character";
import GridContainer from "./GridContainer";
import { helpHttp } from "../helpers/helpHttp";
import Button from "./Button";

const MainCharacters = () => {
  const { texts } = useContext(LanguageContext);
  const [characters, setCharacters] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setLoader(true);
    setCharacters(null);

    helpHttp()
      .get("https://rickandmortyapi.com/api/character/1,2,3,4,5")
      .then((res) => {
        if (!res.err) {
          setCharacters(res);
          setLoader(false);
        } else {
          setError(res);
          setLoader(false);
        }
      });
  }, []);

  const handleElement = (el, index) => <Character data={el} key={index} />;

  return (
    <div className="g-container ">
      <h2 className="main-characters__title mx-3 mb-1">
        {texts.home.mainCharactersTitle.toUpperCase()}
        {/*  PERSONAJES PRINCIPALES */}
      </h2>

      <GridContainer
        data={characters}
        loader={loader}
        error={error}
        texts={texts}
        element={handleElement}
        btnOptions={{ home: false, goBack: false }} //de error msg
      />

      <Button url="characters">
        {texts.es ? "Ver más" : "See more"}
        {/* Ver más */}
      </Button>
    </div>
  );
};

export default MainCharacters;
