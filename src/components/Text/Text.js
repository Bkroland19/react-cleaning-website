import React, { useEffect, useState } from "react";
import "./Text.scss";

const Text = ({t}) => {
  return (
    <React.Fragment>
      <div className="text-container">
        <h1 className="text-container__h1">{t("text.1")}</h1>
        <p className="text-container__text">
        {t("text.2")}
        </p>
      </div>
    </React.Fragment>
  );
};

export default Text;
