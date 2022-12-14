import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import Character from "../components/Character";
import GridContainer from "../components/GridContainer";
import SearchForm from "../components/SearchForm";
import ThemeContext from "../context/ThemeContext";
import { helpHttp } from "../helpers/helpHttp";
import logo from "../assets/Rick-And-Morty-Logo.png";

const Characters = () => {
  const { theme } = useContext(ThemeContext);
  const [characters, setCharacters] = useState([]);
  const [nextPrev, setNextPrev] = useState({ next: false, prev: false });
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("page")) {
      setSearchParams({ page: 1 });
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    let apiUrl = `?page=${searchParams.get("page") || 1}${
      searchParams.get("name") ? "&name=" + searchParams.get("name") : ""
    }${
      searchParams.get("status") ? "&status=" + searchParams.get("status") : ""
    }${
      searchParams.get("gender") ? "&gender=" + searchParams.get("gender") : ""
    }
    `;
    setCharacters([]);
    setNextPrev({ next: false, prev: false });
    setError(false);
    setLoader(true);

    helpHttp()
      .get(`https://rickandmortyapi.com/api/character/${apiUrl}`)
      .then((res) => {
        if (!res.err) {
          setCharacters(res.results);
          setNextPrev({ next: res.info.next, prev: res.info.prev });
        } else {
          setError(res);
        }
        setLoader(false);
      });
  }, [searchParams]);

  const handleElement = (el, index) => <Character data={el} key={index} />;

  const navigate = useNavigate();

  const handleUrl = (object) => {
    let copyFilter = object;

    if (copyFilter.name === "") {
      delete copyFilter.name;
      searchParams.delete("name");
    }

    setSearchParams({ page: searchParams.get("page") || 1, ...copyFilter });
  };

  return (
    <div
      /* className={`characters ${theme}`}*/
      className={`characters ${theme}`}
    >
      <div className=" justify-content-center">
        <img
          className="image-logo"
          src={logo}
          alt="Rick and Morty Logo"
          onClick={(e) => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        />
      </div>
      <SearchForm type="characters" handleUrl={handleUrl} />
      <GridContainer
        data={characters}
        loader={loader}
        error={error}
        element={handleElement}
        btnOptions={{ url: "/characters", home: true, goBack: true }}
        nextPrev={nextPrev}
      />
      <Outlet />
    </div>
  );
};

export default Characters;
