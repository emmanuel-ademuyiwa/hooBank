import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import CompanyInfo from "./components/CompanyInfo/CompanyInfo";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <CompanyInfo />
    </div>
  );
}

export default App;
