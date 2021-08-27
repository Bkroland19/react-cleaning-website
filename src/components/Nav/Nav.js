import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import LangSwitch from "../Translations/LangSwitch";
import "./Nav.scss";

function Nav({ t }) {
  const context = useContext(UserContext);
  const [navBurgerShow, setNavBurgerShow] = useState(false);
  // const [screen1024, setScreen1024] = useState(false);

  // useEffect(() => {
  //   const calc1024 = () => {
  //     window.innerWidth <= 1060 ? setScreen1024(true) : setScreen1024(false);
  //   };
  //   window.addEventListener("resize", calc1024);
  //   calc1024();
  //   return () => window.removeEventListener("resize", calc1024);
  // }, []);

  navBurgerShow
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <React.Fragment>
      <nav className={`nav ${navBurgerShow ? "burger-nav" : ""}`}>
        <div className="left-container">
          <div className="left-container__text bold">{t("nav.1")}</div>
          {!context.calc1060 && (
            <>
              <div className="left-container__item switch-1 switch-2">
                <input
                  type="checkbox"
                  data-after={t("nav.2")}
                  data-before={t("nav.3")}
                />
                <label htmlFor="switch"></label>
              </div>
            </>
          )}
        </div>
        {!context.calc1060 && (
          <div className="middle-container">
            <div className="middle-container__item">{t("nav.4")}</div>
            <div className="middle-container__item">{t("nav.5")}</div>
            <div className="middle-container__item">{t("nav.6")}</div>
            <div className="middle-container__item">{t("nav.7")}</div>
          </div>
        )}
        <div className="right-container">
          <LangSwitch />
          {!context.calc1060 && (
            <>
              <div className="right-container__item">+380 67 401 69 77</div>
              <div className="right-container__item">|</div>
              <div className="right-container__item">24/7</div>
            </>
          )}
          {context.calc1060 && (
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
