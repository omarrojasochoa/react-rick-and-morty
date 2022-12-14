import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";

const SearchInput = ({ filters, handleFilters }) => {
  const { texts } = useContext(LanguageContext);
  let { searchForm } = texts;
  const { theme } = useContext(ThemeContext);
  return (
    <div
      /* className={`search-form__i-search ${theme}`} */
      className={`search-form__i-search ${theme}`}
    >
      {" "}
      <input
        type="text"
        name="name"
        placeholder={`${searchForm.searchInput}...`}
        /* placeholder="Buscar" */
        value={filters.name || ""}
        onChange={(e) => handleFilters(e.target.name, e.target.value, false)}
      />
      <button className={`submit ${theme}`}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default SearchInput;
