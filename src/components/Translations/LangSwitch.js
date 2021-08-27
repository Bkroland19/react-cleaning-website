import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../contexts/UserContext";
import "./LangSwitch.scss";

function LangSwitch() {
  const context = useContext(UserContext);
  const [t, i18next] = useTranslation("header");

  return (
    <div className={`lang-container ${context.calc1060 ? "lang--small" : ""}`}>
      <button>Lang</button>
      <ul className="ul">
        <li>
          <input
            type="button"
            value="tr"
            onClick={() => i18next.changeLanguage("tr")}
          />
        </li>
        <li>
          <input
            type="button"
            value="ru"
            onClick={() => i18next.changeLanguage("ru")}
          />
        </li>
      </ul>
    </div>
  );
}

export default LangSwitch;
