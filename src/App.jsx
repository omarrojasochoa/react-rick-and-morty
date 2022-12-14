import { HashRouter, Route, Routes } from "react-router-dom";
/* import CharacterList from "./components/CharacterList"; */
/* import EpisodesList from "./components/EpisodesList"; */
import Footer from "./components/Footer";
import Header from "./components/Header";
import ModalWindow from "./components/ModalWindow";
import { ActiveNavProvider } from "./context/ActiveNavContext";
import LanguageContext, { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";

import Home from "./pages/Home";

/*return {
   <div className="bg-dark text-white">
      <h1>Header</h1>
      <hr />
      <Navbar />
      <hr />
      <Footer />
      {/* <h1 className="text-center display-1 py-4">Rick and Morty</h1>}
    </div> 
};*/
function App() {
  return (
    <div /*  className="bg-dark text-white" */>
      <LanguageProvider>
        <ThemeProvider>
          <ActiveNavProvider>
            {/* -- */}
            <HashRouter>
              <Header />

              <Routes>
                {/*------------------*/}
                <Route path="/" end element={<Home />}>
                  <Route
                    path="character/:id"
                    element={<ModalWindow url="/" type={"character"} />}
                  />
                </Route>
                {/*------------------*/}
                <Route path="/characters" element={<Characters />}>
                  <Route
                    path="character/:id"
                    element={<ModalWindow url="/characters" type={"character"} />}
                  />
                </Route>
                {/*------------------*/}
                <Route path="episodes" element={<Episodes />}>
                  {" "}
                  <Route
                    path="episode/:id"
                    element={<ModalWindow type={"episode"} url={"/episodes"} />}
                  />
                </Route>
                {/*------------------*/}
                <Route
                  path="*"
                  element={
                    <>
                      <h2>Otro lao</h2>
                    </>
                  }
                />
              </Routes>

              <Footer />
            </HashRouter>
            {/* -- */}
          </ActiveNavProvider>
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
