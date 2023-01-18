import { Navbar, Showcase } from "./components/index";
import { About, Home, Error, SingleCocltail } from "./pages/index";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";
import { useGlobalContext } from "./context";
const App = () => {
  const { toggleMenu, setToggleMenu } = useGlobalContext();
  const handle = (e) => {
    if (
      toggleMenu &&
      e.target.className !== "Cocktail__navbar-menu-container-links"
    ) {
      setToggleMenu(false);
    }
  };
  return (
    <div className="app-bg" onClick={handle}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/SingleCocltail/:id" element={<SingleCocltail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
