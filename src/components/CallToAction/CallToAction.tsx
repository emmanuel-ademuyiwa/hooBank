import React from "react";
import Button from "../Button/Button";
import Companies from "../Companies/Companies";

const CallToAction = () => {
  return (
    <div className="cta--container">
      <Companies />
      <div className="cta">
        <div className="cta--text">
          <h1>Let’s try our service now!</h1>
          <p>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default CallToAction;
