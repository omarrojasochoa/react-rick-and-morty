import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import { helpHttp } from "../helpers/helpHttp";
import CharacterInfo from "./CharacterInfo";
import EpisodeInfo from "./EpisodeInfo";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

const ModalWindow = ({ type, url }) => {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setError(false);
    setLoader(true);
    setData(null);

    if (type === "character") {
      helpHttp()
        .get(`https://rickandmortyapi.com/api/${type}/${id}`)
        .then((res) => {
          if (!res.err) {
            setData(res);
          } else {
            setError(res);
          }
          setLoader(false);
        });
    }

    if (type === "episode") {
      let episodeAndSeason = [...id.matchAll(/\d+/gi)];
      let info = {
        season: episodeAndSeason[0][0],
        episode: episodeAndSeason[1][0],
      };

      helpHttp()
        .get(
          `https://api.tvmaze.com/shows/216/episodebynumber?season=${info.season}&number=${info.episode}`
        )
        .then((res) => {
          if (!res.err) {
            //console.log(res);
            setData(res);
          } else {
            setError(res);
          }
          setLoader(false);
        });
    }
  }, [id, type]);

  return (
    <div
      /* className={`modal-window-container ${theme}`} */
      className={`modal-window-container ${theme}`}
      onClick={(e) => navigate(url + location.search)}
    >
      <div
        /* className={`modal-window ${theme} info-window`} */
        className={`modal-window ${theme} info-window`}
        onClick={(e) => e.stopPropagation()}
      >
        {loader && <Loader />}
        {error && (
          <ErrorMessage
            error={error}
            url={url + location.search}
            home={false}
          />
        )}
        <Link to={url + location.search} className="close">
          <i className="fa-solid fa-circle-arrow-left"></i>
        </Link>
        {data && type === "character" ? (
          <CharacterInfo data={data} url={url + location.search} />
        ) : (
          data &&
          type === "episode" && (
            <EpisodeInfo data={data} url={url + location.search} />
          )
          /*<EpisodeInfo data={data} url={url + location.search} /> */
        )}
      </div>
    </div>
  );
};

export default ModalWindow;
