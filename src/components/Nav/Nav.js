import React, { useEffect, useState } from "react";
import "./Nav.scss";

function Nav() {
  const [navBurgerShow, setNavBurgerShow] = useState(false);
  const [screen1024, setScreen1024] = useState(false);

  const calc1024 = () => {
    window.innerWidth <= 1024 ? setScreen1024(true) : setScreen1024(false);
  };

  useEffect(() => {
    window.addEventListener("resize", calc1024);
    return () => window.removeEventListener("resize", calc1024);
  }, []);

  navBurgerShow
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <React.Fragment>
      <nav className={`nav ${navBurgerShow ? "burger-nav" : ""}`}>
        <div className="left-container">
          <div className="left-container__text bold">уберем.</div>
          {!screen1024 && (
            <>
              <div className="left-container__item switch-1 switch-2">
                <input type="checkbox" />
                <label htmlFor="switch"></label>
              </div>
            </>
          )}
        </div>
        {!screen1024 && (
          <div className="middle-container">
            <div className="middle-container__item">После ремонта</div>
            <div className="middle-container__item">Генеральная уборка</div>
            <div className="middle-container__item">Регулярная уборка</div>
            <div className="middle-container__item">Мойка окон</div>
          </div>
        )}

        <div className="right-container">
          {!screen1024 && (
            <>
              <div className="right-container__item">+380 67 401 69 77</div>
              <div className="right-container__item">|</div>
              <div className="right-container__item">24/7</div>
            </>
          )}

          {screen1024 && (
            <div
              className={`nav-btn ${
                navBurgerShow ? "nav--button--opened" : ""
              }`}
              onClick={() => setNavBurgerShow(!navBurgerShow)}
            >
              <div className="nav-btn__burger"></div>
            </div>
          )}
        </div>
      </nav>
      {navBurgerShow && (
        <div className="burger-container">
          <div className="burger-container__item">После ремонта</div>
          <div className="burger-container__item">Генеральная уборка</div>
          <div className="burger-container__item">Регулярная уборка</div>
          <div className="burger-container__item">Мойка окон</div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Nav;
