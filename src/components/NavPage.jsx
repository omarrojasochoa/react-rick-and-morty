import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

const NavPage = ({ nextPrev }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);

  //visitar Productos.js de JM04react
  /*   let { search } = useLocation();
  let query = new URLSearchParams(search);

  const LIMIT = 20;
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || LIMIT;
 */
  /*  let navigate = useNavigate();
  const handlePrev = () => {
    navigate(`/personajes?inicio=${start - LIMIT}&fin=${end - LIMIT}`);
  };
  const handleNext = () => {
    navigate(`/personajes?inicio=${start + LIMIT}&fin=${end + LIMIT}`);
  }; */
  if (!nextPrev) return;

  const nextAndPrev = (direction) => {
    let params = {};

    for (const entry of searchParams.entries()) {
      let entries = [];
      entries.push(entry);
      params = { ...params, [entry[0]]: entry[1] };
    }

    let result = direction
      ? parseInt(params.page) + 1
      : parseInt(params.page) - 1;

    setSearchParams({ ...params, page: result });
    window.scrollTo(0, 0);
  };

  return (
    <div className="d-flex justify-content-around align-items-center py-2 pagination text-center next-and-prev-buttons">
      {nextPrev.prev && (
        <button
          className={`boton ${theme} page-item prev font-weight-bold`}
          /* props.setPage(props.page - 1);
            handlePrev(e); */
          onClick={(e) => {
            nextAndPrev(false);
          }}
        >
          {/* Anterior */}
          {texts.button.previous}
        </button>
      )}

      {nextPrev.next && (
        <button
          className={`boton ${theme} page-item next font-weight-bold`}
          /* props.setPage(props.page + 1);
            handleNext(e) */
          onClick={(e) => {
            nextAndPrev(true);
          }}
        >
          {/* Siguiente */}
          {texts.button.next}
        </button>
      )}
    </div>
  );
};

export default NavPage;
