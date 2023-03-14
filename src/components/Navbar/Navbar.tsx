import React from "react";
import LOGO from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="nav--bar">
      <div className="logo--container">
        <img src={LOGO} alt="logo-icon" />
      </div>

      <div className="link--container">
        <ul>
          <li className="active--link">home</li>
          <li>about us</li>
          <li>features</li>
          <li>solution</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
