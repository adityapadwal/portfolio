import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

export default function ProgrammingLanguages() {
  return (
    <div className="programming__languages">
      <h3>Programming Languages</h3>
      <div className="experience__content">
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>C/C++</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>JavaScript</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>TypeScript</h4>
            <small className="text-light">Beginner</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>Python</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
      </div>
    </div>
  );
}
