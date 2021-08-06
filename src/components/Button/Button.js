import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import "./Button.scss";

function Button() {
  const [showBtn, setShowBtn] = useState(false);
  const btnRef = useRef();
//ya text kısmı olayları ya da btn cpontainer olan wrapperdan değil gibi gfeli bana

// verdigimiz degeerler 2 ayri yerden ya orda bir cakisma var asnirim
  useLayoutEffect(() => {
    const btnPosition = btnRef.current.getBoundingClientRect().bottom;
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (btnPosition < scrollPosition) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
  }, []);

  useEffect(() => {
    var x=0;
    var y = 0
    const wrapper = document.querySelector(".wrapper");
    const btn = document.querySelector(".button-container");
    wrapper.style.animation = "bounce 1.5s infinite alternate";

    wrapper.addEventListener("mousemove", function (e) {
      const position = btn.getBoundingClientRect();
        x = e.pageX - position.left - position.width / 2;
        y = e.pageY - position.top - position.height / 2;
 
      // wrapper.style.transform =
      //   "translate(" + x * 0.3 + "px, " + y * 0.6 + "px)";
//en alta inince titremesi demi sorun

      wrapper.style.transform = "scale(1.2)";
      wrapper.style.animation = "none";
      wrapper.style.transition = "2s all";
    });
    wrapper.addEventListener("mouseout", function (e) {
      btn.style.transform = "translate(0px,0px)";
      btn.children[2].style.transform = "translate(0px,0px)";
      wrapper.style.transform = "scale(1)";
      wrapper.style.animation = "bounce 1.5s infinite alternate";
    });

    btn.addEventListener("mousemove", function (e) {
     
//
      btn.style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
      btn.children[2].style.transform =
        "translate(" + x * 0.2 + "px, " + y * 0.2 + "px)";
      btn.children[1].style.transform = "scale(1.1)";
    });

    btn.addEventListener("mouseout", function (e) {
      btn.style.transform = "translate(0px,0px)";
      btn.children[2].style.transform = "translate(0px,0px)";
      btn.children[1].style.transform = "scale(1.0)";
    });
  }, []);

  return (
    <React.Fragment>
      <div className="wrapper" ref={btnRef}>
        <div className="button-container">
          <div className="button-container__background"></div>
          <div className="button-container__outline"></div>
          <span className="button-container__text">Заказать уборку</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Button;
