import React from "react";
import { card } from "../../assets";
import Button from "../Button/Button";

const Cards = () => {
  return (
    <div className="the--card">
      <div className="card--details">
        <h1>Find a better card deal in few easy steps.</h1>
        <p>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button />
      </div>
      <div className="img--container">
        <img src={card} alt="" />
      </div>
    </div>
  );
};

export default Cards;
