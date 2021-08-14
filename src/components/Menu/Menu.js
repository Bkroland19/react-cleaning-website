import React, { useState, useEffect } from "react";
import Images from "../Images/Images";
import SideMenu from "../SideMenu/SideMenu";
import "./Menu.scss";

const Menu = () => {
  const [triggerMenu, setTriggerMenu] = useState(false);
  const [scPosition, setScPosition] = useState(0);
  const [showIcon, setShowIcon] = useState(0);

  useEffect(() => {
    scPosition > 1800 ? setTriggerMenu(true) : setTriggerMenu(false);
    //4263

    const scrollHandler = () => {
      let pageScroll = window.innerHeight + window.scrollY;
      setScPosition(pageScroll);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [triggerMenu, scPosition]);

  return (
    <React.Fragment>
      <div className={triggerMenu ? "menu-container" : ""}>
        <SideMenu
          triggerMenu={triggerMenu}
          showIcon={showIcon}
          setShowIcon={setShowIcon}
        />
        <Images triggerMenu={triggerMenu} showIcon={showIcon} />
      </div>
    </React.Fragment>
  );
};

export default Menu;
