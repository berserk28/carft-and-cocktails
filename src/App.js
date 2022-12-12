import { Navbar, Showcase, Footer } from "./components/index";
import { About, Home, Contact } from "./pages/index";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./app.css";
const App = () => {
  return (
    <div className="app-bg">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
