import React from "react";
import page404 from "../../images/page-404.jpg";
import "./PageNotFound.scss";
const PageNotFound = () => {
  return (
    <div className="page">
      <img src={page404} alt={"page-404"} />
    </div>
  );
};

export default PageNotFound;
