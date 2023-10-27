import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

export default function FrontEnd() {
  return (
    <div className="experience__frontend">
      <h3>Frontend Libraries/Frameworks</h3>
      <div className="experience__content">
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>React JS</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>

        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>React Redux</h4>
            <small className="text-light">Beginner</small>
          </div>
        </article>

        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>Tailwind CSS</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>

        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>Bootstrap</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>

        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>Material UI</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>

        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>EJS</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
      </div>
    </div>
  );
}
