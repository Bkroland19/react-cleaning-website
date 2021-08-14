import React, { useState, useEffect, useRef } from "react";
import Images from "../Images/Images";
import SideMenu from "../SideMenu/SideMenu";
import "./Menu.scss";

const Menu = () => {
  const [triggerMenu, setTriggerMenu] = useState(false);
  const [scPosition, setScPosition] = useState(0);
  const [showIcon, setShowIcon] = useState(0);
  const [showImg, setShowImg] = useState(false);
  const [imgPs, setImgPs] = useState(0);

  useEffect(() => {
    scPosition > 2220 ? setTriggerMenu(true) : setTriggerMenu(false);
    // console.log(imgPs);
    const scrollHandler = () => {
      let pageScroll = window.innerHeight + window.scrollY;
      setScPosition(pageScroll);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [triggerMenu, scPosition]);

  // const textPosition = document
  //   .querySelector(".text-container")
  //   .getBoundingClientRect().bottom;
  // console.log(textPosition);

  return (
    <React.Fragment>
      <div className={triggerMenu ? "menu-container" : ""}>
        <SideMenu
          triggerMenu={triggerMenu}
          showIcon={showIcon}
          setShowIcon={setShowIcon}
        />
        <Images
          triggerMenu={triggerMenu}
          showIcon={showIcon}
          // setShowImg={setShowImg}
          // setImgPs={setImgPs}
        />
      </div>
    </React.Fragment>
  );
};

export default Menu;
