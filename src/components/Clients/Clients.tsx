import React from "react";
import { people01, people02, people03, quotes } from "../../assets";

const Clients = () => {
  return (
    <div className="clients">
      <div className="top--text">
        <h1>What people are saying about us</h1>
        <p>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className="clients--testimonies">
        <div className="testimonies">
          <div className="img--container">
            <img src={quotes} alt="quote" />
          </div>

          <p>
            Money makes your life easier. If you're lucky to have it, you're
            lucky.
          </p>
          <div className="client">
            <div className="img--container">
              <img src={people02} alt="client-img" />
            </div>
            <div className="client--details">
              <h6>Steve Mark</h6>
              <p>Founder & Leader</p>
            </div>
          </div>
        </div>
        <div className="testimonies">
          <div className="img--container">
            <img src={quotes} alt="quote" />
          </div>

          <p>
            It is usually people in the money business, finance, and
            international trade that are really rich.
          </p>
          <div className="client">
            <div className="img--container">
              <img src={people03} alt="client-img" />
            </div>
            <div className="client--details">
              <h6>Kenn Gallagher</h6>
              <p>Founder & Leader</p>
            </div>
          </div>
        </div>
        <div className="testimonies">
          <div className="img--container">
            <img src={quotes} alt="quote" />
          </div>

          <p>
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="client">
            <div className="img--container">
              <img src={people01} alt="client-img" />
            </div>
            <div className="client--details">
              <h6>Herman Jensen</h6>
              <p>Founder & Leader</p>
            </div>
          </div>
        </div>
      </div>
      <div className="blur--bg--left"></div>
    </div>
  );
};

export default Clients;
