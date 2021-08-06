import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Button from "./components/Button/Button";
import Cards from "./components/Cards/Cards";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Button />
      <Cards />
    </div>
  );
}

export default App;
