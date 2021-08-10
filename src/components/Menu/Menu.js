import React, { useEffect, useState } from "react";
import "./Menu.scss";
import img from "../../assets/7.png";
import img2 from "../../assets/8.png";
import img3 from "../../assets/9.jpg";
import img4 from "../../assets/10.jpg";

const Menu = () => {
  const [img1width, setimg1width] = useState(0);
  useEffect(() => {
    const img = document.querySelector(".image-container.active");

    const imgWidth = img.offsetWidth;
    setimg1width(imgWidth);
    const imgHeight = img.offsetHeight;
  }, []);
  const calcwidth = () => {
    const img1 = document.querySelector(".img1");
    const imgWidth = img1.offsetWidth;
    setimg1width(imgWidth);

    console.log(imgWidth + "sadas");
  };
  window.addEventListener("resize", calcwidth);

  return (
    <React.Fragment>
      <div className="image-wrapper">
        <div className="image-container active">
          <img
            className="img1"
            src={img}
            style={{ width: "100%", height: "630px" }}
          />
          <span style={{ top: "200px", left: img1width / 4.3 }}>
            Чистим фасад вытяжки
          </span>
          <span style={{ top: "340px", left: img1width / 3.6 }}>
            Чистим плитку
          </span>
          <span style={{ top: "585px", left: img1width / 3.8 }}>Моем пол</span>
          <span style={{ top: "430px", left: img1width / 2.5 }}>
            Выносим мусор
          </span>
          <span style={{ top: "500px", left: img1width / 2 }}>
            Протираем столешницу
          </span>
          <span style={{ top: "225px", left: img1width / 2.1 }}>
            Моем фасады кухонных гарнитуров
          </span>
          <span style={{ top: "385px", left: img1width / 1.4 }}>
            Моем посуду
          </span>
        </div>

        <div className="image-container">
          <img
            className="img2"
            src={img2}
            style={{ width: "100%", height: "630px" }}
          />
          <span style={{ top: "155px", left: img1width / 4.5 }}>
            Чистим фасад зеркала
          </span>
          <span style={{ top: "430px", left: img1width / 5 }}>
            Чистим ракавены
          </span>
          <span style={{ top: "490px", left: img1width / 2 }}>
            Чистим туалет
          </span>
          <span style={{ top: "465px", left: img1width / 1.4 }}>
            Чистим ванное
          </span>
        </div>

        <div className="image-container">
          <img
            className="img3"
            src={img3}
            style={{ width: "100%", height: "630px" }}
          />
          <span style={{ top: "155px", left: img1width / 4.5 }}>
            Чистим стены
          </span>
          <span style={{ top: "410px", left: img1width / 2.3 }}>
            Моем диван
          </span>
          <span style={{ top: "510px", left: img1width / 3 }}>
            Протираем любое пространство
          </span>
          <span style={{ top: "560px", left: img1width / 7.6 }}>
            Моем ковёр
          </span>
        </div>

        <div className="image-container">
          <img
            className="img4"
            src={img4}
            style={{ width: "100%", height: "630px" }}
          />
          <span style={{ top: "155px", left: img1width / 4.5 }}>
            Чистим фасад зеркала
          </span>
          <span style={{ top: "430px", left: img1width / 5 }}>
            Чистим ракавены
          </span>
          <span style={{ top: "490px", left: img1width / 2 }}>
            Чистим туалет
          </span>
          <span style={{ top: "465px", left: img1width / 1.4 }}>
            Чистим ванное
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;
