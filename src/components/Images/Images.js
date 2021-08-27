import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import "./Images.scss";
import img from "../../assets/7.png";
import img2 from "../../assets/8.png";
import img3 from "../../assets/9.jpg";
import img4 from "../../assets/10.jpg";
// import { className } from "postcss-selector-parser";

const Images = ({ showIcon, triggerMenu, smallScreen }, ref) => {
  const [imgWidthPosition, setImgWidthPosition] = useState(0);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);
  const [hover6, setHover6] = useState(false);
  const [hover7, setHover7] = useState(false);

  const calcWidth = () => {
    const imgEl = document.querySelector(".image-container--position");
    const imgWidth = imgEl.clientWidth;
    setImgWidthPosition(imgWidth);
  };

  useEffect(() => {
    const imgEl = document.querySelector(".image-container--position");
    setImgWidthPosition(imgEl.clientWidth);

    window.addEventListener("resize", calcWidth);
    calcWidth();
    return () => window.removeEventListener("resize", calcWidth);
  }, []);

  return (
    <React.Fragment>
      <div
        ref={ref}
        className={`image-container image-container--position ${
          triggerMenu ? "active--img1" : ""
        } ${showIcon !== 1 && showIcon !== 0 ? "deactive" : ""} ${
          smallScreen ? "small" : ""
        }`}
      >
        <div>
          <img
            className={showIcon !== 1 && showIcon !== 0 ? "deactive" : ""}
            src={img}
          />
        </div>

        {triggerMenu && !smallScreen && (
          <>
            <div>
              {showIcon === 1 && (
                <div
                  onMouseEnter={() => setHover1(true)}
                  onMouseLeave={() => setHover1(false)}
                >
                  <div
                    style={{ left: imgWidthPosition / 3 + "px" }}
                    className={`plus ${
                      showIcon !== 1 && showIcon !== 0 ? "deactive" : ""
                    }`}
                  ></div>
                </div>
              )}
            </div>

            <div>
              {hover1 && (
                <div style={{ left: imgWidthPosition / 4.6 + "px" }}>
                  <span>Чистим фасад вытяжки</span>
                </div>
              )}
            </div>

            <div>
              {showIcon === 1 && (
                <div
                  onMouseEnter={() => setHover2(true)}
                  onMouseLeave={() => setHover2(false)}
                >
                  <div
                    style={{ left: imgWidthPosition / 2.8 + "px" }}
                    className="plus"
                  ></div>
                </div>
              )}
            </div>

            <div>
              {hover2 && (
                <div style={{ left: imgWidthPosition / 3.5 + "px" }}>
                  <span>Чистим плитку</span>
                </div>
              )}
            </div>

            <div>
              {showIcon === 1 && (
                <div
                  onMouseEnter={() => setHover3(true)}
                  onMouseLeave={() => setHover3(false)}
                >
                  <div
                    style={{ left: imgWidthPosition / 2.9 + "px" }}
                    className="plus"
                  ></div>
                </div>
              )}
            </div>

            <div>
              {hover3 && (
                <div style={{ left: imgWidthPosition / 3.4 + "px" }}>
                  <span>Моем пол</span>
                </div>
              )}
            </div>

            <div>
              {showIcon === 1 && (
                <div
                  onMouseEnter={() => setHover4(true)}
                  onMouseLeave={() => setHover4(false)}
                >
                  <div
                    style={{ left: imgWidthPosition / 1.9 + "px" }}
                    className="plus"
                  ></div>
                </div>
              )}
            </div>

            <div>
              {hover4 && (
                <div style={{ left: imgWidthPosition / 2.3 + "px" }}>
                  <span>Выносим мусор</span>
                </div>
              )}
            </div>

            <div>
              {showIcon === 1 && (
                <div
                  onMouseEnter={() => setHover5(true)}
                  onMouseLeave={() => setHover5(false)}
                >
                  <div
                    style={{ left: imgWidthPosition / 1.8 + "px" }}
                    className="plus"
                  ></div>
                </div>
              )}
            </div>

            <div>
              {hover5 && (
                <div style={{ left: imgWidthPosition / 2.3 + "px" }}>
                  <span>Протираем столешницу</span>
                </div>
              )}
            </div>

            <div>
              {showIcon === 1 && (
                <div
                  onMouseEnter={() => setHover6(true)}
                  onMouseLeave={() => setHover6(false)}
                >
                  <div
                    style={{ left: imgWidthPosition / 1.6 + "px" }}
                    className="plus"
                  ></div>
                </div>
              )}
            </div>

            <div>
              {hover6 && (
                <div style={{ left: imgWidthPosition / 2.2 + "px" }}>
                  <span>Моем фасады кухонных гарнитуров</span>
                </div>
              )}
            </div>

            <div>
              {showIcon === 1 && (
                <div
                  onMouseEnter={() => setHover7(true)}
                  onMouseLeave={() => setHover7(false)}
                >
                  <div
                    style={{ left: imgWidthPosition / 1.3 + "px" }}
                    className="plus"
                  ></div>
                </div>
              )}
            </div>

            <div>
              {hover7 && (
                <div style={{ left: imgWidthPosition / 1.4 + "px" }}>
                  <span>Моем посуду</span>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {showIcon == 2 && (
        <div
          className={`image-container ${showIcon == 2 ? "active--img1" : ""} ${
            smallScreen ? "small" : ""
          }`}
        >
          <img className="img2" src={img2} />
        </div>
      )}

      {showIcon == 3 && (
        <div
          className={`image-container ${showIcon == 3 ? "active--img1" : ""} ${
            smallScreen ? "small" : ""
          }`}
        >
          <img className="img3" src={img3} />
        </div>
      )}

      {showIcon == 4 && (
        <div
          className={`image-container ${showIcon == 4 ? "active--img1" : ""} ${
            smallScreen ? "small" : ""
          }`}
        >
          <img className="img4" src={img4} />
        </div>
      )}
    </React.Fragment>
  );
};

export default React.forwardRef(Images);
