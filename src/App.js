import React, { useRef } from "react";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Button from "./components/Button/Button";
import Cards from "./components/Cards/Cards";
import Text from "./components/Text/Text";
import Menu from "./components/Menu/Menu";
import SideMenu from "./components/SideMenu/SideMenu";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Button />
      <Cards />
      <Text />
      <Menu />
      <SideMenu />
    </div>
  );
}

export default App;
