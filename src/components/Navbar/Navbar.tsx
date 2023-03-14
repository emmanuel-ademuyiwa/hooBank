import React from "react";
import LOGO from "../../assets/logo.svg";
import MENU from "../../assets/menu.svg";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div className="nav--bar">
      <div className="logo--nav--container">
        <div className="logo--nav">
          <div className="logo--container">
            <img src={LOGO} alt="logo icon" />
          </div>

          <div className="link--container">
            <ul>
              <li className="active--link">home</li>
              <li>features</li>
              <li>product</li>
              <li>client</li>
            </ul>
          </div>
        </div>

        <Button />
      </div>

      <div className="mobile--menu">
        <img src={MENU} alt="mobile menu" />
      </div>
    </div>
  );
};

export default Navbar;
