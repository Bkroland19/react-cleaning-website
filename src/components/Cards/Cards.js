import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import "./Cards.scss";

function Cards() {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useLayoutEffect(() => {
    const cardPosition = ref.current.getBoundingClientRect().top;
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      // console.log(cardPosition);
      if (cardPosition < scrollPosition) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <React.Fragment>
      <div ref={ref} className="card-container">
        <div className={`card-container__item x ${show ? "animated1" : ""}`}>
          <p className="card-container__item__hover--text">
            Не нужно тратить время, силы и ресурсы на размещение вакансий,
            проведение собеседований, проверку кандидатов на должность уборщицы.
            За счёт больших объёмов мы можем сделать это эффективнее.
          </p>
          <div className="card-container__item__text">
            <p>Тщательно отобранный персонал</p>
          </div>
          <div className="card-container__item__img">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className={`card-container__item y ${show ? "animated2" : ""}`}>
          <p className="card-container__item__hover--text">
            Не нужно тратить время, силы и ресурсы на размещение вакансий,
            проведение собеседований, проверку кандидатов на должность уборщицы.
            За счёт больших объёмов мы можем сделать это эффективнее.
          </p>
          <div className="card-container__item__text">
            <p>Качественная эко-химия</p>
          </div>
          <div className="card-container__item__img">
            <img src={img2} alt="" className="bottle--img" />
            <img src={img3} alt="" className="bottle--img" />
            <img src={img4} alt="" className="bottle--img" />
          </div>
        </div>
        <div className={`card-container__item z ${show ? "animated3" : ""}`}>
          <p className="card-container__item__hover--text">
            Не нужно тратить время, силы и ресурсы на размещение вакансий,
            проведение собеседований, проверку кандидатов на должность уборщицы.
            За счёт больших объёмов мы можем сделать это эффективнее.
          </p>
          <div className="card-container__item__text">
            <p>Контролируем качество</p>
          </div>
          <div className="card-container__item__img">
            <img src={img5} alt="" />
          </div>
        </div>
        <div className={`card-container__item e ${show ? "animated4" : ""}`}>
          <p className="card-container__item__hover--text">
            Не нужно тратить время, силы и ресурсы на размещение вакансий,
            проведение собеседований, проверку кандидатов на должность уборщицы.
            За счёт больших объёмов мы можем сделать это эффективнее.
          </p>
          <div>
            <p className="card-container__item__text">Работаем круглосуточно</p>
          </div>
          <div className="card-container__item__img">
            <img src={img6} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cards;
