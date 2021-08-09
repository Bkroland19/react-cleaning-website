import React from "react";
import "./Text.scss";

const Text = () => {
  return (
    <React.Fragment>
      <div className="text-container">
        <h1 className="text-container__h1">Как мы убираем</h1>
        <p className="text-container__text">
          Клинер приезжает в назначенное время со всем необходимым и сразу
          приступает к делу. Вам остаётся только оценить результать.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Text;
