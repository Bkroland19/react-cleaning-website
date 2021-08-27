// import React from "react";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Button from "./components/Button/Button";
import Cards from "./components/Cards/Cards";
import Text from "./components/Text/Text";
import Menu from "./components/Menu/Menu";
import { useTranslation } from "react-i18next";
import { UserContext } from "./contexts/UserContext";
import "./App.scss";
import React, { useState, useEffect } from "react";

const App = () => {
  const [calc1060, setCalc1060] = useState(false);
  const { t, i18n } = useTranslation("translation");

  const calcSmallScreen = () => {
    window.innerWidth <= 1060 ? setCalc1060(true) : setCalc1060(false);
  };

  useEffect(() => {
    window.addEventListener("resize", calcSmallScreen);
    calcSmallScreen();
    return () => window.removeEventListener("resize", calcSmallScreen);
  }, []);

  return (
    <UserContext.Provider value={{ calc1060, calcSmallScreen }}>
      <Nav t={t} i18n={i18n} />
      <Home t={t} />
      <Button t={t} />
      <Cards t={t} />
      <Text t={t} />
      <Menu t={t} i18n={i18n} />
    </UserContext.Provider>
  );
};

export default App;
