import React from "react";
import icon from "../images/Icon.png";


export default function Info() {
  return (
    <div className="info">
      <h1 className="info-name">Christina Graham</h1>
      <p className="info--title">Full Stack Java Developer</p>
      <a
        href="https://www.christina-graham.com/projects/"
        className="info-weburl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Project Portfolio
      </a>

      <Mailto
        email="christina@christina-graham.com"
        subject="RE: Business Card"
        body=" "
      >
        <button className="email">
          <img src={icon} width="12px" alt="email" />
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
