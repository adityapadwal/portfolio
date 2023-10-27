import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Technology() {
  return (
    <div className="technologies">
      <h3>Technologies</h3>
      <div className="experience__content">
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>Front-End Dev</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>Back-end Dev</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>Dev-Ops</h4>
            <small className="text-light">Beginner</small>
          </div>
        </article>
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>Cloud</h4>
            <small className="text-light">Beginner</small>
          </div>
        </article>
      </div>
    </div>
  );
}
