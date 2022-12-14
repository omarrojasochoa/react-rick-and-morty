import React, { useEffect, useState } from "react";
import Character from "./Character";
import NavPage from "./NavPage";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      //console.log(data);
      setLoading(false);
      setCharacters(data.results);
    }
    fetchData();
    //setLoading(true); Para que aparezca el loader cada vez que se pase a siguiente page
  }, [page]);

  return (
    <div className="g-container">
      {/*container */}
      <h1 className="text-center display-1 py-4"> All Characters</h1>
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <div>"Loading.."</div>
      ) : (
        <div className="row grid-container">
          {/* row */}
          {characters.map((character) => {
            return (
              <div className="col-md-3 p-4" key={character.id}>
                <Character data={character} />
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
};

export default CharacterList;
