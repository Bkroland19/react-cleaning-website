import React, { useEffect } from "react";
import "./Button.scss";

function Button() {
  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    const btn = document.querySelector(".button-container");
    wrapper.style.animation = "bounce 1.5s infinite alternate";

    wrapper.addEventListener("mousemove", function (e) {
      const position = btn.getBoundingClientRect();
      const x = e.pageX - position.left - position.width / 2;
      const y = e.pageY - position.top - position.height / 2;

      wrapper.style.transform =
        "translate(" + x * 0.4 + "px, " + y * 0.6 + "px)";

      wrapper.style.transform = "scale(1.2)";
      wrapper.style.animation = "none";
      wrapper.style.transition = "2s all";
    });
    wrapper.addEventListener("mouseout", function (e) {
      // btn.children[1].style.transform = "rotate(15deg)";
      btn.style.transform = "translate(0px,0px)";
      btn.children[2].style.transform = "translate(0px,0px)";
      wrapper.style.transform = "scale(1)";
      wrapper.style.animation = "bounce 1.5s infinite alternate";
    });

    btn.addEventListener("mousemove", function (e) {
      const position = btn.getBoundingClientRect();
      const x = e.pageX - position.left - position.width / 2;
      const y = e.pageY - position.top - position.height / 2;
      // btn.style.transform = "scale(1.3)";

      btn.style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
      btn.children[2].style.transform =
        "translate(" + x * 0.2 + "px, " + y * 0.2 + "px)";
      btn.children[1].style.transform = "scale(1.3)";
      // btn.children[1].style.transition = "0.5s";
    });

    btn.addEventListener("mouseout", function (e) {
      // btn.children[1].style.transform = "rotate(15deg)";
      btn.style.transform = "translate(0px,0px)";
      btn.children[2].style.transform = "translate(0px,0px)";
      btn.children[1].style.transform = "scale(1.0)";
      btn.children[1].style.transition = "none";
    });
  }, []);

  return (
    <React.Fragment>
      <div className="wrapper">
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
