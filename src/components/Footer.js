import React from "react";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://twitter.com/tikiri74/" target="_blank" rel="noopener noreferrer">
        <img src={twitter} className="footer-icon" alt="twitter" />
      </a>
      <a
        href="https://www.instagram.com/cgraham74/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagram} className="footer-icon" alt="instagram" />
      </a>
      <a
        href="https://www.linkedin.com/in/christina--graham/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} className="footer-icon" alt="linkedin" />
      </a>
      <a href="https://github.com/cgraham74" target="_blank"  rel="noopener noreferrer">
        <img src={github} className="footer-icon" alt="github" />
      </a>
    </div>
  );
}
