import React from "react";
import pageLayout from "../img/gallery/section_bg03.png";
import "./PageLayout.css";

function PageLayout({ title }) {
  return (
    <div className="page-layout">
      <img src={pageLayout} alt="Background" className="page-image" />
      <h1 className="page-title">{title}</h1>
    </div>
  );
}

export default PageLayout;
