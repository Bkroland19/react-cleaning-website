import React, { useState, useEffect } from "react";
import "./SideMenu.scss";
import { BsArrowRight } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
const SideMenu = ({
  triggerMenu,
  showIcon,
  setShowIcon,
  smallScreen,
  setSmallScreen,
}) => {
  const buttonClickHandler = (num) => {
    setShowIcon(num);
  };

  const emeruk = () => {
    window.innerWidth <= 900 ? setSmallScreen(true) : setSmallScreen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", emeruk);
    return () => window.removeEventListener("resize", emeruk);
  }, []);

  const [burgerShow, setBurgerShow] = useState(false);

  return (
    <React.Fragment>
      {triggerMenu && (
        <div className="side--active">
          <div
            className={!smallScreen ? "sidemenu-container" : "small-sidemenu"}
          >
            {smallScreen && (
              <GiHamburgerMenu
                className="hamburger-menu"
                onClick={() => setBurgerShow(!burgerShow)}
              />
            )}

            {!smallScreen && (
              <>
                <div onClick={() => buttonClickHandler(1)}>
                  {showIcon == 1 && (
                    <BsArrowRight
                      className={`icon ${showIcon == 1 ? "icon" : ""}`}
                    />
                  )}
                  Кухня
                </div>

                <div onClick={() => buttonClickHandler(2)}>
                  {showIcon == 2 && <BsArrowRight className="icon" />}
                  Комнаты
                </div>
                <div onClick={() => buttonClickHandler(3)}>
                  {showIcon == 3 && <BsArrowRight className="icon" />}
                  Ванная
                </div>
                <div onClick={() => buttonClickHandler(4)}>
                  {showIcon == 4 && <BsArrowRight className="icon" />}
                  Прихожая
                </div>
              </>
            )}

            {smallScreen && burgerShow && (
              <>
                <div onClick={() => buttonClickHandler(1)}>
                  {showIcon == 1 && (
                    <BsArrowRight
                      className={`icon ${showIcon == 1 ? "icon" : ""}`}
                    />
                  )}
                  Кухня
                </div>

                <div onClick={() => buttonClickHandler(2)}>
                  {showIcon == 2 && <BsArrowRight className="icon" />}
                  Комнаты
                </div>
                <div onClick={() => buttonClickHandler(3)}>
                  {showIcon == 3 && <BsArrowRight className="icon" />}
                  Ванная
                </div>
                <div onClick={() => buttonClickHandler(4)}>
                  {showIcon == 4 && <BsArrowRight className="icon" />}
                  Прихожая
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default SideMenu;
