import React from "react";
import "./Nav.scss";


function Nav() {
  return (
    <React.Fragment>
      <nav className="nav">
        <div className="left-container">
          <div className="left-container__text bold">уберем.</div>
          <div className="left-container__item switch-1 switch-2">
            <input type="checkbox" />
            <label htmlFor="switch"></label>
          </div>
        </div>
        <div className="middle-container">
          <div className="middle-container__item">После ремонта</div>
          <div className="middle-container__item">Генеральная уборка</div>
          <div className="middle-container__item">Регулярная уборка</div>
          <div className="middle-container__item">Мойка окон</div>
        </div>
        <div className="right-container">
          <div className="right-container__item">+380 67 401 69 77</div>
          <div className="right-container__item">|</div>
          <div className="right-container__item">24/7</div>
          {/* <div className="right-container__item">burger</div> */}
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
