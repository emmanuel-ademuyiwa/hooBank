import React from "react";
import { bill, apple, google } from "../../assets";

const Product = () => {
  return (
    <div className="product">
      <div className="img--container">
        <img src={bill} alt="" />
      </div>
      <div className="product--details">
        <h1>Easily control your billing & invoicing.</h1>
        <p>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="img--flex">
          <img src={apple} alt="apple icon" />
          <img src={google} alt="google icon" />
        </div>
      </div>
      <div className="blur--bg--left"></div>
    </div>
  );
};

export default Product;
