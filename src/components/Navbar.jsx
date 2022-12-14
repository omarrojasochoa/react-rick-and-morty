import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EpisodesList from "./EpisodesList";
import CharacterList from "./CharacterList";

const Navbar = () => {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route
          index
          path="/"
          end
          element={<h1 className="bg-primary">Hola HOME</h1>}
        ></Route>
        <Route path="/home" element={<h1>Hola HOME</h1>} />
        <Route path="/personajes" element={<CharacterList />} />
        <Route path="/episodios" element={<EpisodesList />} />
        <Route path="*" end element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </Router>
  );
};

function Navigation() {
  return (
    <nav className="bg-light">
      <ul>
        <li>
          <Link to="/home"> Home</Link>
        </li>
        <li>
          <Link to="/personajes"> Personajes</Link>
        </li>
        <li>
          <Link to="/episodios"> Episodios</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
