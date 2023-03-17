import React from "react";
import Button from "../Button/Button";
import { star, shield, send } from "../../assets";

const Features = () => {
  return (
    <div id="features" className="features">
      <div className="feature--text">
        <h1>You do the business, we’ll handle the money.</h1>
        <p>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className="feature--card--container">
        <div className="feature--card">
          <div className="img--container">
            <img src={star} alt="star" />
          </div>
          <div className="card--details">
            <h6>Rewards</h6>
            <p>
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </div>
        <div className="feature--card">
          <div className="img--container">
            <img src={shield} alt="star" />
          </div>
          <div className="card--details">
            <h6>100% Secured</h6>
            <p>
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </div>
        <div className="feature--card">
          <div className="img--container">
            <img src={send} alt="star" />
          </div>
          <div className="card--details">
            <h6>Balance Transfer</h6>
            <p>
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
