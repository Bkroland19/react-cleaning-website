import React from "react";
import "./Home.scss";
// import img from "../../assets/Rectangle 47.jpg";

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-img-container">
        <div className="home-img-container__img"></div>
      </div>
      <div className="home-text-wrapper">
        <div className="home-text-container">
          <div className="home-text-container__text">
            Уборка в Квартире квартир в Киеве
          </div>
          <div className="home-text-container__inner-text">
            Мы уберем у вас дома или в офисе. Наведем чистоту после ремонта и
            проведем генеральную уборку.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
