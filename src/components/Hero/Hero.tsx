import React from "react";
import { discount, arrowUp, robot } from "../../assets";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero--text">
        <div className="discount--container">
          <img src={discount} alt="discount icon" />
          <div className="discount--text">
            <p>
              20% <span>DISCOUNT FOR</span> 1 MONTH <span>ACCOUNT</span>
            </p>
          </div>
        </div>

        <div className="big--hero--text">
          <div className="top--text--flex">
            <h1>
              The Next <br /> <span>Generation</span>
            </h1>

            <div className="web--container">
              <div className="get--started--container">
                <p>
                  Get <img src={arrowUp} alt="arrow up" /> <br />
                  Started
                </p>
              </div>
            </div>
          </div>
          <h1 className="payment--text">Payment Method.</h1>
        </div>

        <p className="hero--desc">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. <br /> We examine annual percentage
          rates, annual fees.
        </p>
      </div>

      <div className="blur--bg--left"></div>
      <div className="blur--bg3"></div>

      <div className="hero--img">
        <img src={robot} alt="" />
      </div>

      <div className="mobile--container">
        <div className="get--started--container">
          <p>
            Get <img src={arrowUp} alt="arrow up" /> <br />
            Started
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
