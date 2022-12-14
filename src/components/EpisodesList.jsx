import React from "react";
import { useEffect, useState } from "react";
import Episode from "./Episode";
import NavPage from "./NavPage";

const EpisodesList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const res = await fetch();
      `https://api.tvmaze.com/shows/216/episodebynumber?season=${info.season}&number=${info.episode}`;
      const json = await res.json();
      console.log(json);
      setLoading(false);
      setEpisodes(json.results);
    };

    fetchEpisodes();
  }, []);
  return (
    <div className="container">
      <h1 className="text-center display-1 py-4"> All Episode's</h1>
      <NavPage page={page} setPage={setPage} />

      {/* {loading ? (
        <div>"Loading.."</div>
      ) : (
        <div className="row">
          {episodes.map((episode) => {
            return (
              <div className="col-md-3 p-4" key={episode.id}>
                <Episode episode={episode} />
              </div>
            );
          })}
        </div>
      )} */}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
};

export default EpisodesList;
