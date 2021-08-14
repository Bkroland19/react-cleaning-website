import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import "./Images.scss";
import img from "../../assets/7.png";
import img2 from "../../assets/8.png";
import img3 from "../../assets/9.jpg";
import img4 from "../../assets/10.jpg";

const Images = ({ showIcon, triggerMenu, setShowImg, setImgPs }) => {
  const [img1width, setimg1width] = useState(0);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);
  const [hover6, setHover6] = useState(false);
  const [hover7, setHover7] = useState(false);
  useEffect(() => {
    const img1 = document.querySelector(".refref");
    setimg1width(img1.clientWidth);
  }, []);

  const calcwidth = () => {
    const img1 = document.querySelector(".refref");
    const imgWidth = img1.clientWidth;
    setimg1width(imgWidth);
  };
  window.addEventListener("resize", calcwidth);

  // useLayoutEffect(() => {
  //   const imgPosition = document
  //     .querySelector(".image-container")
  //     .getBoundingClientRect().top;
  //     console.log(imgPosition);
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
      <div className={`image-container ${triggerMenu ? "active--img1" : ""}`}>
        <div>
          <img
            className={`refref ${
              showIcon !== 1 && showIcon !== 0 ? "deactive" : ""
            }`}
            src={img}
          />
        </div>

        {triggerMenu && (
          <>
            <div
              onMouseEnter={() => setHover1(true)}
              onMouseLeave={() => setHover1(false)}
            >
              <div
                style={{ left: img1width / 3 + "px" }}
                className="plus"
              ></div>
            </div>

            <div>
              {hover1 && (
                <div style={{ left: img1width / 3.9 + "px" }}>
                  <span>Чистим фасад вытяжки</span>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => setHover2(true)}
              onMouseLeave={() => setHover2(false)}
            >
              <div
                style={{ left: img1width / 2.8 + "px" }}
                className="plus"
              ></div>
            </div>

            <div>
              {hover2 && (
                <div style={{ left: img1width / 3.3 + "px" }}>
                  <span>Чистим плитку</span>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => setHover3(true)}
              onMouseLeave={() => setHover3(false)}
            >
              <div
                style={{ left: img1width / 2.9 + "px" }}
                className="plus"
              ></div>
            </div>

            <div>
              {hover3 && (
                <div style={{ left: img1width / 3.2 + "px" }}>
                  <span>Моем пол</span>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => setHover4(true)}
              onMouseLeave={() => setHover4(false)}
            >
              <div
                style={{ left: img1width / 1.9 + "px" }}
                className="plus"
              ></div>
            </div>

            <div>
              {hover4 && (
                <div style={{ left: img1width / 2.1 + "px" }}>
                  <span>Выносим мусор</span>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => setHover5(true)}
              onMouseLeave={() => setHover5(false)}
            >
              <div
                style={{ left: img1width / 1.8 + "px" }}
                className="plus"
              ></div>
            </div>

            <div>
              {hover5 && (
                <div style={{ left: img1width / 2.1 + "px" }}>
                  <span>Протираем столешницу</span>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => setHover6(true)}
              onMouseLeave={() => setHover6(false)}
            >
              <div
                style={{ left: img1width / 1.6 + "px" }}
                className="plus"
              ></div>
            </div>

            <div>
              {hover6 && (
                <div style={{ left: img1width / 2 + "px" }}>
                  <span>Моем фасады кухонных гарнитуров</span>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => setHover7(true)}
              onMouseLeave={() => setHover7(false)}
            >
              <div
                style={{ left: img1width / 1.3 + "px" }}
                className="plus"
              ></div>
            </div>

            <div>
              {hover7 && (
                <div style={{ left: img1width / 1.4 + "px" }}>
                  <span>Моем посуду</span>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {showIcon == 2 && (
        <div className={`image-container ${showIcon == 2 ? "active" : ""}`}>
          <img
            className="img2"
            src={img2}
            style={{ width: "100%", height: "630px" }}
          />
          <span>Чистим фасад зеркала</span>
          <span>Чистим ракавены</span>
          <span>Чистим туалет</span>
          <span>Чистим ванное</span>
        </div>
      )}

      {showIcon == 3 && (
        <div className={`image-container ${showIcon == 3 ? "active" : ""}`}>
          <img
            className="img3"
            src={img3}
            style={{ width: "100%", height: "630px" }}
          />
          <span>Чистим стены</span>
          <span>Моем диван</span>
          <span>Протираем любое пространство</span>
          <span>Моем ковёр</span>
        </div>
      )}

      {showIcon == 4 && (
        <div className={`image-container ${showIcon == 4 ? "active" : ""}`}>
          <img
            className="img4"
            src={img4}
            style={{ width: "100%", height: "630px" }}
          />
          <span>Чистим фасад зеркала</span>
          <span>Чистим ракавены</span>
          <span>Чистим туалет</span>
          <span>Чистим ванное</span>
        </div>
      )}
    </React.Fragment>
  );
};

export default Images;
