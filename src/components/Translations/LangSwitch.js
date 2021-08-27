import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./LangSwitch.scss";

function LangSwitch({ t, i18n }) {
  const context = useContext(UserContext);

  return (
    <div className={`lang-container ${context.calc1060 ? "lang--small" : ""}`}>
      <button>{t("nav.8")}</button>
      <ul className="ul">
        <li>
          <input
            type="button"
            value="tr"
            onClick={() => i18n.changeLanguage("tr")}
          />
        </li>
        <li>
          <input
            type="button"
            value="ru"
            onClick={() => i18n.changeLanguage("ru")}
          />
        </li>
      </ul>
    </div>
  );
}

export default LangSwitch;
