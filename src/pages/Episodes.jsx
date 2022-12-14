import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import Episode from "../components/Episode";
import GridContainer from "../components/GridContainer";
import ThemeContext from "../context/ThemeContext";
import { helpHttp } from "../helpers/helpHttp";
import logo from "../assets/Rick-And-Morty-Logo.png";
import SearchForm from "../components/SearchForm";

const Episodes = () => {
  const { theme } = useContext(ThemeContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [episodes, setEpisodes] = useState([]);
  const [nextPrev, setNextPrev] = useState({ next: false, prev: false });
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const handleElement = (el, index) => <Episode data={el} key={index} />;

  useEffect(() => {
    if (!searchParams.get("page")) {
      setSearchParams({ page: 1 });
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    let apiUrl = `?page=${searchParams.get("page") || 1}${
      searchParams.get("name") ? "&name=" + searchParams.get("name") : ""
    }
    `;

    setEpisodes([]);
    setNextPrev({ next: false, prev: false });
    setError(false);
    setLoader(true);

    helpHttp()
      .get(`https://rickandmortyapi.com/api/episode/${apiUrl}`)
      .then((res) => {
        if (!res.err) {
          res.results.forEach(async (el) => {
            let episodeAndSeason = [...el.episode.matchAll(/\d+/gi)];
            let info = {
              season: episodeAndSeason[0][0],
              episode: episodeAndSeason[1][0],
            };

            helpHttp()
              .get(
                `https://api.tvmaze.com/shows/216/episodebynumber?season=${info.season}&number=${info.episode}`
              )
              .then((res2) => {
                if (!res2.err) {
                  let episodio = {
                    id: el.id,
                    name: res2.name,
                    image: res2.image.original,
                    info: el.episode,
                  };
                  setEpisodes((episodes) => [...episodes, episodio]);
                  setLoader(false);
                }
              });
          });
          setNextPrev({ next: res.info.next, prev: res.info.prev });
        } else {
          setError(res);
        }
      });
  }, [searchParams]);

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
      className={`episodes ${theme}`}
      /* className={`episodes dark`} */
    >
      {/* <SearchForm type="episodes" handleUrl={handleUrl} /> */}
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
      <SearchForm type="episodes" handleUrl={handleUrl} />
      <GridContainer
        data={episodes}
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

export default Episodes;
