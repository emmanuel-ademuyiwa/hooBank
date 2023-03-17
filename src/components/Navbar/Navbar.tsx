import React, { useState } from "react";
import { close, logo, menu } from "../../assets";

const Navbar = () => {
  const [modal, setModal] = useState(false);

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
      </div>

      <div className="mobile--menu" onClick={() => setModal(!modal)}>
        {modal ? (
          <img src={close} alt="mobile menu" />
        ) : (
          <img src={menu} alt="mobile menu" />
        )}
      </div>

      <div className={modal ? "mobile--nav" : "close--modal"}>
        <p>Home</p>
        <p>features</p>
        <p>product</p>
        <p>client</p>
      </div>
    </div>
  );
};

export default Navbar;
