import React, { useEffect, useState } from "react";
import "./Menu.scss";
import img from "../../assets/7.png";
const Menu = () => {
  const [img1width, setimg1width] = useState(0);
  useEffect(() => {
    const img = document.querySelector(".image1-container");
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
      <div className="image1-container">
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
        <span style={{ top: "385px", left: img1width / 1.4 }}>Моем посуду</span>
      </div>
    </React.Fragment>
  );
};

export default Menu;
