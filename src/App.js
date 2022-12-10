import { Navbar, Showcase, Footer } from "./components/index";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";
const App = () => {
  return (
    <div className="app-bg">
      <Navbar />
      <Showcase />
      <Footer />
    </div>
  );
};

export default App;
