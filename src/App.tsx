import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import CompanyInfo from "./components/CompanyInfo/CompanyInfo";
import Features from "./components/Features/Features";
import Product from "./components/Product/Product";
import Cards from "./components/Cards/Cards";
import Clients from "./components/Clients/Clients";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <CompanyInfo />
      <Features />
      <Product />
      <Cards />
      <Clients />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
