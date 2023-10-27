import React from "react";
import "./experience.css";
import Technology from "./Technology.js";
import ProgrammingLanguages from "./ProgrammingLanguages";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import Other from "./Other";
import Database from "./Database";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <Technology />
        <ProgrammingLanguages />
        <FrontEnd />
        <BackEnd />
        <Database />
        <Other />
        
      </div>
    </section>
  );
};

export default Experience;
