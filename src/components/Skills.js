import React from "react";

export default function Skills() {
  const tech = ["Java", "Spring Boot","RESTful APIs","SQL", "PostgreSQL","JavaScript", "HTML","CSS","JUnit","Git"];
  const list = tech.map((item, id) => {
    return (
      <li key={id}>{item}</li>
    );
    
  });
  return (
    <div className="skills">
      <h4>Tech Stack</h4>
      <ul id="ul-skills">
        {list}
      </ul>
    </div>
  );
}
