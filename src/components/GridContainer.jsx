import React from "react";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import NavPage from "./NavPage";
/* import NextPrev from "./NextPrev"; */

const GridContainer = ({
  data,
  loader,
  element,
  error,
  btnOptions,
  url,
  nextPrev,
}) => {
  if (!data) return;

  return (
    <div className="g-container ">
      {loader && <Loader />}

      <NavPage nextPrev={nextPrev} />
      {/* <NextPrev nextPrev={nextPrev} /> */}

      <div className="grid-container">
        {error && (
          <ErrorMessage
            error={error}
            url={btnOptions.url}
            home={btnOptions.home}
            goBack={btnOptions.goBack}
          />
        )}
        {data.length > 0 && data.map((el, index) => element(el, index, url))}
      </div>
      <NavPage nextPrev={nextPrev} />
      {/* <NextPrev nextPrev={nextPrev} /> */}
    </div>
  );
};

export default GridContainer;
