import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Images from "../Images/Images";
import SideMenu from "../SideMenu/SideMenu";
import "./Menu.scss";

const Menu = () => {
  const [triggerMenu, setTriggerMenu] = useState(false);
  const [scPosition, setScPosition] = useState(0);
  const [showIcon, setShowIcon] = useState(0);
  const [smallScreen, setSmallScreen] = useState(false);
  const ref = useRef();

  useLayoutEffect(() => {
    const imgPosition = ref.current.getBoundingClientRect().bottom;
    console.log(imgPosition);

    const scrollHandler = () => {
      const pageScroll = window.scrollY + window.innerHeight;
      pageScroll > imgPosition ? setTriggerMenu(true) : setTriggerMenu(false);
      console.log(pageScroll, imgPosition);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [triggerMenu, scPosition]);

  const calcWidth = () => {
    window.innerWidth <= 900 ? setSmallScreen(true) : setSmallScreen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", calcWidth);
    return () => window.removeEventListener("resize", calcWidth);
  }, []);

  return (
    <React.Fragment>
      <div className={triggerMenu ? "menu-container" : ""}>
        <SideMenu
          triggerMenu={triggerMenu}
          showIcon={showIcon}
          setShowIcon={setShowIcon}
          smallScreen={smallScreen}
          setSmallScreen={setSmallScreen}
        />
        <Images
          ref={ref}
          triggerMenu={triggerMenu}
          showIcon={showIcon}
          smallScreen={smallScreen}
        />
      </div>
    </React.Fragment>
  );
};

export default Menu;
