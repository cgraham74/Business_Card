import React from "react";
import icon from "../images/Icon.png";

export default function Info() {
  return (
    <div className="info">
      <h1 className="info-name">Christina Graham</h1>
      <p className="info--title">Full Stack Java Developer</p>
      <a
        href="http://www.christinagraham.tech"
        className="info-weburl"
        target="_blank"
        rel="noreferrer"
      >
        christinagraham.tech
      </a>

      <Mailto
        email="cgraham74@gmail.com"
        subject="Hello"
        body="I clicked your business card!"
      >
        <button className="email">
          <img src={icon} width="12px" />
          Email
        </button>
      </Mailto>
    </div>
  );
}

function Mailto({ email, subject, body, ...props }) {
  return (
    <a
      href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}
      className="mailto"
    >
      {props.children}
    </a>
  );
}
