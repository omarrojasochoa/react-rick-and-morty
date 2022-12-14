import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";

const SearchCharactersFilters = ({
  handleFilters,
  filters,
  resetFilters,
  desactiveFilter,
}) => {
  const { texts } = useContext(LanguageContext);
  let { searchFilters } = texts.searchForm;
  const { theme } = useContext(ThemeContext);

  const selectFilter = (name, value) => {
    handleFilters(name, value, true);
  };

  return (
    <div className={`search-form__filters ${theme}`}>
      <span>
        {searchFilters.title} {/*  */} <span> </span>
        <i className="fa-solid fa-angle-down"></i>
      </span>
      {/* Filtros */}
      <div className="background"></div>
      <div className="filters">
        <div className="triangle"></div>

        <div className="filters__gender">
          <span>
            {searchFilters.gender.toUpperCase()} {/* GENERO */}
          </span>
          <i
            className={`fa-solid fa-mars man ${
              filters.gender === "male" && "active"
            }`}
            onClick={(e) =>
              filters.gender !== "male"
                ? selectFilter("gender", "male")
                : desactiveFilter("gender")
            }
          ></i>
          <i
            className={`fa-solid fa-venus woman ${
              filters.gender === "female" && "active"
            }`}
            onClick={(e) =>
              filters.gender !== "female"
                ? selectFilter("gender", "female")
                : desactiveFilter("gender")
            }
          ></i>
          <i
            className={`fa-solid fa-genderless genderless ${
              filters.gender === "genderless" && "active"
            }`}
            onClick={(e) =>
              filters.gender !== "genderless"
                ? selectFilter("gender", "genderless")
                : desactiveFilter("gender")
            }
          ></i>
          <i
            className={`fa-solid fa-question unknown ${
              filters.gender === "unknown" && "active"
            }`}
            onClick={(e) =>
              filters.gender !== "unknown"
                ? selectFilter("gender", "unknown")
                : desactiveFilter("gender")
            }
          ></i>
        </div>

        <div className="filters__status">
          <span>
            {searchFilters.status.toUpperCase()} {/* ESTADO */}{" "}
          </span>
          <i
            className={`fa-solid fa-skull skull ${
              filters.status === "dead" && "active"
            }`}
            onClick={(e) =>
              filters.status !== "dead"
                ? selectFilter("status", "dead")
                : desactiveFilter("status")
            }
          ></i>
          <i
            className={`fa-solid fa-heart heart ${
              filters.status === "alive" && "active"
            }`}
            onClick={(e) =>
              filters.status !== "alive"
                ? selectFilter("status", "alive")
                : desactiveFilter("status")
            }
          ></i>
          <i
            className={`fa-solid fa-question unknown ${
              filters.status === "unknown" && "active"
            }`}
            onClick={(e) =>
              filters.status !== "unknown"
                ? selectFilter("status", "unknown")
                : desactiveFilter("status")
            }
          ></i>
        </div>

        <button className="filters__reset" onClick={resetFilters}>
          {searchFilters.reset.toUpperCase()} {/* RESET */}
        </button>
      </div>
    </div>
  );
};

export default SearchCharactersFilters;
