import React, { useState, useCallback } from "react";
import "./SideMenu.scss";
import { BsArrowRight } from "react-icons/bs";

const SideMenu = ({ triggerMenu, showIcon, setShowIcon }) => {
  const buttonClickHandler = (num) => {
    setShowIcon(num);
  };
  return (
    <React.Fragment>
      {triggerMenu ? (
        <div
          className={`sidemenu-container ${triggerMenu ? "side--active" : " "}`}
        >
          <div onClick={() => buttonClickHandler(1)}>
            {showIcon == 1 && (
              <BsArrowRight
                className={`icon ${showIcon == 1 ? "active" : ""}`}
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
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default SideMenu;
