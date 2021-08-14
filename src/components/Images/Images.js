import React, { useEffect, useState, useRef } from "react";
import "./Images.scss";
import img from "../../assets/7.png";
import img2 from "../../assets/8.png";
import img3 from "../../assets/9.jpg";
import img4 from "../../assets/10.jpg";

const Images = ({ showIcon, triggerMenu }) => {
  // const ref = useRef();
  // const [img1width, setimg1width] = useState(0);

  // useEffect(() => {
  //   const imgWidth = ref.current.offsetWidth;
  //   setimg1width(imgWidth);
  //   const imgHeight = img.offsetHeight;
  // }, []);

  // const calcwidth = () => {
  //   const img1 = document.querySelector(".img1");
  //   const imgWidth = img1.offsetWidth;
  //   setimg1width(imgWidth);
  // };
  // window.addEventListener("resize", calcwidth);

  return (
    <React.Fragment>
      <div className={`image-container ${triggerMenu ? "active--img1" : ""}`}>
        <img
          className={`${showIcon !== 1 && showIcon !== 0 ? "deactive" : ""}`}
          src={img}
        />
        <div>
          <div className="plus"></div>
        </div>

        <div><span className="zpan">Чистим фасад вытяжки</span></div>
// onHover ile dene
        <div>
          <div className="plus"></div>
        </div>

        <div>{showIcon == 1 && <span>Чистим плитку</span>}</div>

        <div>
          <div className="plus"></div>
        </div>

        <div>{showIcon == 1 && <span>Моем пол</span>}</div>

        <div>
          <div className="plus"></div>
        </div>

        <div>{showIcon == 1 && <span>Выносим мусор</span>}</div>

        <div>
          <div className="plus"></div>
        </div>

        <div>{showIcon == 1 && <span>Протираем столешницу</span>}</div>

        <div>
          <div className="plus"></div>
        </div>

        <div>
          {showIcon == 1 && <span>Моем фасады кухонных гарнитуров</span>}
        </div>

        <div>
          <div className="plus"></div>
        </div>

        <div>{showIcon == 1 && <span>Моем посуду</span>}</div>
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
