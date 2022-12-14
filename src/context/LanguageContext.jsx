import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const LanguageContext = createContext();

const initialLanguage = localStorage.getItem("RaMLanguage") || "es";

const translations = {
  es: {
    es: true,
    header: { home: "Inicio", characters: "Personajes", episodes: "Episodios" },
    footer: {
      home: "Inicio",
      characters: "Personajes",
      episodes: "Episodios",
      project:
        "Proyecto realizado en React utilizando API's de Rick and Morty - TVMaze. Se usó Cadenas de Consulta, React Router, React Context para el arquetipo de la pagina y Figma para el diseño. A través de lógica específica, encontré la solución para solicitar que cada episodio obtenga la información necesaria para completar el contenido.",
      information: "Información",
      contact: "Contáctame",
      follow: "Sígueme en:",
    },
    home: {
      resume:
        "Rick y Morty es una comedia animada estadounidense de ciencia ficción para adultos creada por Justin Roiland y Dan Harmon para el bloque de programación nocturna Adult Swim de Cartoon Network.\n\n La serie sigue las desventuras del cínico científico loco Rick Sanchez y su nieto de buen corazón pero inquieto Morty Smith, que dividía su tiempo entre la vida doméstica y las aventuras interdimensionales.",
      mainCharactersTitle: "Personajes Principales",
    },
    searchForm: {
      searchInput: "Buscar",
      searchFilters: {
        title: "Filtros",
        gender: "Genero",
        status: "Estado",
        reset: "reset",
      },
    },
    episodeProfile: {
      summary: "Resumen",
      airdate: "Estreno",
      episode: "Episodio",
      rating: "Puntaje",
    },
    button: {
      next: "Siguiente",
      previous: "Anterior",
    },
  },
  en: {
    en: true,
    header: { home: "Home", characters: "Characters", episodes: "Episodes" },
    footer: {
      home: "Home",
      characters: "Characters",
      episodes: "Episodes",
      project:
        "Project made in React using API's from Rick and Morty - TVMaze. Query Strings, React Router, React Context were used for the archetype of the page and Figma for the design. Through specific logic I found the solution to request each episode to get the necessary information to complete the content.",
      information: "Information",
      contact: "Contact me",
      follow: "Follow me:",
    },
    home: {
      resume:
        "Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim.\n\n The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted, but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.",
      mainCharactersTitle: "Main Characters",
    },
    searchForm: {
      searchInput: "Search",
      searchFilters: {
        title: "Filters",
        gender: "Gender",
        status: "Status",
        reset: "reset",
      },
    },
    episodeProfile: {
      summary: "Summary",
      airdate: "Airdate",
      episode: "Episode",
      rating: "Rating",
    },
    button: {
      next: "Next",
      previous: "Previous",
    },
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  useEffect(() => {
    setTexts(translations[language]);
  }, [language]);

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
    localStorage.setItem("RaMLanguage", e.target.value);
  };

  const data = { language, handleLanguage, texts };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
