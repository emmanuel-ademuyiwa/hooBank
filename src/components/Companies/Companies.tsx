import React from "react";
import { airbnb, binance, coinbase, dropbox } from "../../assets";

const Companies = () => {
  return (
    <div className="companies">
      <img src={airbnb} alt="airbnb" />
      <img src={binance} alt="binance" />
      <img src={coinbase} alt="coinbase" />
      <img src={dropbox} alt="dropbox" />
    </div>
  );
};

export default Companies;
