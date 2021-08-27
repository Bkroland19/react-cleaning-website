import React from "react";
import "./Home.scss";
// import img from "../../assets/Rectangle 47.jpg";

function Home({ t }) {
  return (
    <div className="home-wrapper">
      <div className="home-img-container">
        <div className="home-img-container__img"></div>
      </div>
      <div className="home-text-wrapper">
        <div className="home-text-container">
          <div className="home-text-container__text">{t("home.1")}</div>
          <div className="home-text-container__inner-text">{t("home.2")}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
