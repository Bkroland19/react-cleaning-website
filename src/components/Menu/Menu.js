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

  // userLayoutEffect(() => {
  //   let imgPosition = meme.current.getBoundingClientRect().top;
  //   setElPosition(imgPosition);
  //   console.log(elPosition);
  // }, []);

  useLayoutEffect(() => {
    const imgPosition = ref.current.getBoundingClientRect().bottom;
    console.log(imgPosition);

    const scrollHandler = () => {
      // console.log(imgPs);
      const pageScroll = window.scrollY + window.innerHeight;
      // setScPosition(pageScroll);
      pageScroll > imgPosition ? setTriggerMenu(true) : setTriggerMenu(false);
      console.log(pageScroll, imgPosition);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [triggerMenu, scPosition]);

  const emeruk = () => {
    window.innerWidth <= 900 ? setSmallScreen(true) : setSmallScreen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", emeruk);
    return () => window.removeEventListener("resize", emeruk);
  }, []);

  // useLayoutEffect(() => {
  //   const imgPosition = document
  //     .querySelector(".menu-container")
  //     .getBoundingClientRect().top;
  //   console.log(imgPosition);
  //   const sd = () => {
  //     const scrollPosition = window.scrollY + window.offSetHeight;
  //     if (imgPosition < scrollPosition) {
  //       setImgPs(imgPosition);
  //     }
  //   };
  //   window.addEventListener("scroll", sd);
  //   return () => window.removeEventListener("scroll", sd);
  // }, []);

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
