import React, { useEffect, useState, useCallback, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./Button.scss";

function Button({ t }) {
  const context = useContext(UserContext);
  const [showBtn, setShowBtn] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const mouseMove = useCallback((e) => {
    const btn = document.querySelector(".button-container");
    const position = btn.getBoundingClientRect();
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;
    btn.style.transform =
      "translate3d(" + x * 0.4 + "px, " + y * 0.6 + "px, " + 0 + "px) scale(1)";
    btn.children[1].style.transform =
      "translate3d(" +
      x * 0.3 +
      "px, " +
      y * 0.4 +
      "px, " +
      0 +
      "px) scale(1.2)";
    btn.children[0].style.transform = "scale(1.4)";
  }, []);

  const mouseOut = useCallback((e) => {
    const btn = document.querySelector(".button-container");

    btn.style.transform = "translate3d(0px, 0px, 0px) scale(1)";
    btn.children[1].style.transform = "translate(0,0)";
    btn.children[0].style.transform = "scale(1)";
  }, []);

  useEffect(() => {
    const btn = document.querySelector(".button-container");
    if (!context.calc1060) {
      if (scrollPosition > window.innerHeight + 250) {
        setShowBtn(true);
        btn.removeEventListener("mousemove", mouseMove, false);
        btn.removeEventListener("mouseout", mouseOut, false);
      } else {
        setShowBtn(false);
        btn.addEventListener("mousemove", mouseMove, false);
        btn.addEventListener("mouseout", mouseOut, false);
      }

      scrollPosition > window.innerHeight + 1100
        ? (btn.style.display = "none")
        : (btn.style.display = "block");

      const scroolCatch = () => {
        let pos = window.innerHeight + window.scrollY;
        setScrollPosition(pos);
      };

      window.addEventListener("scroll", scroolCatch);
      return () => window.removeEventListener("scroll", scroolCatch);
    } else {
      return;
    }
  }, [scrollPosition, showBtn]);

  return (
    <React.Fragment>
      {!context.calc1060 && (
        <div className={`wrapper ${showBtn ? "active--wrapper" : "bounce"}`}>
          <div
            className={`button-container ${
              showBtn
                ? "deactive--button--container"
                : "active--button--container "
            }`}
          >
            <div className="button-container__outline"></div>
            <div className="button-container__text">{t("button.1")}</div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Button;
