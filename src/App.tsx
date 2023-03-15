import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
