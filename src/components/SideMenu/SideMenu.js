import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import "./SideMenu.scss";

const SideMenu = ({
  triggerMenu,
  showIcon,
  setShowIcon,
  smallScreen,
  setSmallScreen,
  t,
}) => {
  const buttonClickHandler = (num) => {
    setShowIcon(num);
  };

  const calc = () => {
    window.innerWidth <= 900 ? setSmallScreen(true) : setSmallScreen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", calc);
    calc();
    return () => window.removeEventListener("resize", calc);
  }, [calc]); //

  const [burgerShow, setBurgerShow] = useState(false);
  return (
    <React.Fragment>
      {triggerMenu && (
        <div className="side--active">
          <div
            className={!smallScreen ? "sidemenu-container" : "small-sidemenu"}
          >
            {smallScreen && (
              <div
                className={`menu-btn ${
                  burgerShow ? "open menu-btn--color" : ""
                }`}
                onClick={() => setBurgerShow(!burgerShow)}
              >
                <a
                  className={`menu-btn__burger ${
                    burgerShow ? "menu-btn__burger--color" : ""
                  }`}
                ></a>
              </div>
            )}

            {!smallScreen && (
              <React.Fragment>
                <div onClick={() => buttonClickHandler(1)}>
                  {showIcon == 1 && (
                    <BsArrowRight
                      className={`icon ${showIcon == 1 ? "icon" : ""}`}
                    />
                  )}
                  {t("side-menu.1")}
                </div>

                <div onClick={() => buttonClickHandler(2)}>
                  {showIcon == 2 && <BsArrowRight className="icon" />}
                  {t("side-menu.2")}
                </div>
                <div onClick={() => buttonClickHandler(3)}>
                  {showIcon == 3 && <BsArrowRight className="icon" />}
                  {t("side-menu.3")}
                </div>
                <div onClick={() => buttonClickHandler(4)}>
                  {showIcon == 4 && <BsArrowRight className="icon" />}
                  {t("side-menu.4")}
                </div>
              </React.Fragment>
            )}

            {smallScreen && burgerShow && (
              <div className="side-container">
                <div
                  onClick={() => buttonClickHandler(1)}
                  className="side-btns btn1"
                >
                  <span></span>
                  {t("side-menu.1")}
                </div>

                <div
                  onClick={() => buttonClickHandler(2)}
                  className="side-btns btn2"
                >
                  <span></span>
                  {t("side-menu.2")}
                </div>
                <div
                  onClick={() => buttonClickHandler(3)}
                  className="side-btns btn3"
                >
                  <span></span>
                  {t("side-menu.3")}
                </div>
                <d
                  onClick={() => buttonClickHandler(4)}
                  className="side-btns btn4"
                >
                  <span></span>
                  {t("side-menu.4")}
                </d>
              </div>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default SideMenu;
