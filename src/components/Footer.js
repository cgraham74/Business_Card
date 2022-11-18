import React from "react";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://twitter.com/tikiri74/" target="_blank" rel="noreferrer">
        <img src={twitter} className="footer-icon" alt="twitter" />
      </a>
      {/* <a href="#">
        <img src={facebook} className="footer-icon" alt="facebook" />
      </a> */}
      <a
        href="https://www.instagram.com/cgraham74/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} className="footer-icon" alt="instagram" />
      </a>
      <a
        href="https://www.linkedin.com/in/christina--graham/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} className="footer-icon" alt="linkedin" />
      </a>
      <a href="https://github.com/cgraham74" target="_blank" rel="noreferrer">
        <img src={github} className="footer-icon" alt="github" />
      </a>
    </div>
  );
}
