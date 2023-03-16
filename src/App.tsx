import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import CompanyInfo from "./components/CompanyInfo/CompanyInfo";
import Features from "./components/Features/Features";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <CompanyInfo />
      <Features />
      <Product />
    </div>
  );
}

export default App;
