import React from "react";
import { logo, menu } from "../../assets";

const Navbar = () => {
  return (
    <div className="nav--bar">
      <div className="logo--nav--container">
        <div className="logo--nav">
          <div className="logo--container">
            <img src={logo} alt="logo icon" />
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

        {/* <Button /> */}
      </div>

      <div className="mobile--menu">
        <img src={menu} alt="mobile menu" />
      </div>
    </div>
  );
};

export default Navbar;
