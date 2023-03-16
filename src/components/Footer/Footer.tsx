import React from "react";
import { facebook, instagram, linkedin, logo, twitter } from "../../assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer--details">
        <div className="footer--logo--container">
          <div className="img--container">
            <img src={logo} alt="logo" />
          </div>
          <p>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className="footer--inner--details">
          <div className="inner--details">
            <h6>useful links</h6>
            <ul>
              <li>Content</li>
              <li>How it Works</li>
              <li>Create</li>
              <li>Explore</li>
              <li>Terms & Services</li>
            </ul>
          </div>
          <div className="inner--details">
            <h6>Community</h6>
            <ul>
              <li>Help center</li>
              <li>Partner</li>
              <li>Suggestions</li>
              <li>Blog</li>
              <li>Newsletters</li>
            </ul>
          </div>
          <div className="inner--details">
            <h6>Partner</h6>
            <ul>
              <li>Our Partner</li>
              <li>Become a Partner</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer--links">
        <p>
          <span>Copyright</span> &copy; 2023 HooBank. All Rights Reserved.
        </p>
        <div className="icon--container">
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
