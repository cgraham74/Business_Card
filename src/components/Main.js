import React from "react";
import About from "./About";
import Interests from "./Interests";
import Info from "./Info";
import Skills from "./Skills";

export default function Main() {
  return (
    <div className="main">
      <Info />
      <About />
      <Interests />
      <Skills />
    </div>
  );
}

