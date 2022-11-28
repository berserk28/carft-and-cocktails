import { Navbar, Showcase, Footer } from "./components/index";
import React from "react";
import "./app.css";
const App = () => {
  return (
    <div className="gradient-bg">
      <Navbar />
      <Showcase />
      <Footer />
    </div>
  );
};

export default App;
