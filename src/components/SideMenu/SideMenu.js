import React, { useState } from "react";
import "./SideMenu.scss";
import { BsArrowRight } from "react-icons/bs";
const SideMenu = () => {
  const [showIcon, setShowIcon] = useState(0);
  const buttonClickHandler = (param) => {
    setShowIcon(param);
  };
  return (
    <div className="sidemenu-container">
      <div onClick={() => buttonClickHandler(1)}>
        {showIcon == 1 && (
          <BsArrowRight className={`icon ${showIcon == 1 ? "active" : ""}`} />
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
  );
};

export default SideMenu;
