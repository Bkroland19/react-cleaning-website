import React, { useEffect, useState, useRef } from "react";
import "./Images.scss";
import img from "../../assets/7.png";
import img2 from "../../assets/8.png";
import img3 from "../../assets/9.jpg";
import img4 from "../../assets/10.jpg";

const Images = ({ showIcon, triggerMenu }) => {
  const ref = useRef();
  const [img1width, setimg1width] = useState(0);

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
            <div>
              <div
                style={{ left: img1width / 3 + "px" }}
                className="plus"
              ></div>
            </div>

            <div>
              <div style={{ left: img1width / 3.9 + "px" }}>
                {showIcon == 1 && <span>Чистим фасад вытяжки</span>}
              </div>
            </div>
            <div>
              <div
                style={{ left: img1width / 2.8 + "px" }}
                className="plus"
              ></div>
            </div>

            <div style={{ left: img1width / 3.3 + "px" }}>
              {showIcon == 1 && <span>Чистим плитку</span>}
            </div>

            <div>
              <div
                style={{ left: img1width / 2.9 + "px" }}
                className="plus"
              ></div>
            </div>

            <div style={{ left: img1width / 3.2 + "px" }}>
              {showIcon == 1 && <span>Моем пол</span>}
            </div>

            <div>
              <div
                style={{ left: img1width / 1.9 + "px" }}
                className="plus"
              ></div>
            </div>

            <div style={{ left: img1width / 2.1 + "px" }}>
              {showIcon == 1 && <span>Выносим мусор</span>}
            </div>

            <div>
              <div
                style={{ left: img1width / 1.8 + "px" }}
                className="plus"
              ></div>
            </div>

            <div style={{ left: img1width / 2.1 + "px" }}>
              {showIcon == 1 && <span>Протираем столешницу</span>}
            </div>

            <div>
              <div
                style={{ left: img1width / 1.6 + "px" }}
                className="plus"
              ></div>
            </div>

            <div style={{ left: img1width / 2 + "px" }}>
              {showIcon == 1 && <span>Моем фасады кухонных гарнитуров</span>}
            </div>

            <div>
              <div
                style={{ left: img1width / 1.3 + "px" }}
                className="plus"
              ></div>
            </div>

            <div style={{ left: img1width / 1.4 + "px" }}>
              {showIcon == 1 && <span>Моем посуду</span>}
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
