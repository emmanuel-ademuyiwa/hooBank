import React from "react";
import { Row, Col } from "react-bootstrap";

const CompanyInfo = () => {
  return (
    <div className="company--info">
      <div className="info--container">
        <h1>3800+</h1>
        <p>users active</p>
      </div>
      <div className="info--container">
        <h1>230+</h1>
        <p>trusted by companies</p>
      </div>

      <div className="info--container">
        <h1>$230M+</h1>
        <p>transactions</p>
      </div>
    </div>
  );
};

export default CompanyInfo;
