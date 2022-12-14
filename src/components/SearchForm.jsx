import React, { useContext } from "react";
import { createRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import SearchCharactersFilters from "./SearchCharactersFilters";
import SearchInput from "./SearchInput";

const SearchForm = ({ type, handleUrl }) => {
  const { theme } = useContext(ThemeContext);
  const [filters, setFilter] = useState({});
  const form = createRef();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let params = {
      name: searchParams.get("name"),
      gender: searchParams.get("gender"),
      status: searchParams.get("status"),
    };

    if (!params.name) delete params.name;
    if (!params.gender) delete params.gender;
    if (!params.status) delete params.status;

    setFilter(params);
  }, [searchParams]);

  const handleFilters = (name, value, instant) => {
    setFilter({ ...filters, [name]: value, page: 1 });
    if (instant) handleUrl({ ...filters, [name]: value, page: 1 });
  };

  const desactiveFilter = (key) => {
    let filtersCopy = { ...filters };
    delete filtersCopy[key];

    setFilter(filtersCopy);
    handleUrl(filtersCopy);
  };

  const resetFilters = () => {
    setFilter({});
    handleUrl({});
  };

  return (
    <form
      className={`search-form ${theme}`}
      onSubmit={(e) => {
        e.preventDefault();
        handleUrl(filters);
      }}
      ref={form}
      autoComplete="off"
    >
      <SearchInput filters={filters} handleFilters={handleFilters} />
      {type === "characters" && (
        <SearchCharactersFilters
          handleFilters={handleFilters}
          filters={filters}
          resetFilters={resetFilters}
          desactiveFilter={desactiveFilter}
        />
      )}
    </form>
  );
};

export default SearchForm;
