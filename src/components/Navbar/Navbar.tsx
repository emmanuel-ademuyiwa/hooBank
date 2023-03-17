import React, { useState } from "react";
import { close, logo, menu } from "../../assets";
import { Link } from "react-scroll";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(!modal);

  return (
    <div className="nav--bar">
      <div className="logo--nav--container">
        <div className="logo--nav">
          <div className="logo--container">
            <img src={logo} alt="logo icon" />
          </div>

          <div className="link--container">
            <ul>
              <li>
                <Link
                  className="active--link"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  to="features"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  features
                </Link>
              </li>
              <li>
                <Link
                  to="product"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  product
                </Link>
              </li>
              <li>
                <Link
                  to="client"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  client
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mobile--menu" onClick={closeModal}>
        {modal ? (
          <img src={close} alt="mobile menu" />
        ) : (
          <img src={menu} alt="mobile menu" />
        )}
      </div>

      <div className={modal ? "mobile--nav" : "close--modal"}>
        <p>
          <Link
            to="hero"
            smooth={true}
            offset={-150}
            duration={500}
            onClick={closeModal}
          >
            home
          </Link>
        </p>
        <p>
          <Link
            to="features"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeModal}
          >
            features
          </Link>
        </p>
        <p>
          <Link
            to="product"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeModal}
          >
            product
          </Link>
        </p>
        <p>
          <Link
            to="client"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeModal}
          >
            client
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
