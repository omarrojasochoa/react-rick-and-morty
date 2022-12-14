import React from "react";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const EpisodeInfo = ({ data }) => {
  //console.log(data);
  const { texts } = useContext(LanguageContext);

  return (
    <>
      {" "}
      <figure className="profile episode">
        <img src={data.image.medium} alt="" />
        <figcaption>{data.name.toUpperCase()}</figcaption>
      </figure>
      <div className="episode-summarize">
        <details>
          <summary>{texts.episodeProfile.summary}  </summary>
          {/* <summary>Resumen</summary> */}
          <p dangerouslySetInnerHTML={{ __html: data.summary }}></p>
        </details>
      </div>
      <table className="features episode">
        <tbody>
          <tr>
            <th>{texts.episodeProfile.airdate.toUpperCase()}</th>
            {/* <th>ESTRENO</th> */}
            <td className="airdate">{data.airdate}</td>
          </tr>
          <tr>
            <th>{texts.episodeProfile.episode.toUpperCase()}</th>
            {/* <th>EPISODIO</th> */}
            <td className="episode">
              <span className="s">S{data.season}</span>{" "}
              <span className="e">E{data.number}</span>
            </td>
          </tr>
          <tr>
             <th>{texts.episodeProfile.rating.toUpperCase()}</th>
            {/* <th>PUNTAJE</th> */}
            <td className="rating">{data.rating.average}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default EpisodeInfo;
