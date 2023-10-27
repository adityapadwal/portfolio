import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Other() {
  return (
    <div className="others">
      <h3>Other tools</h3>
      <div className="experience__content">
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>Git/GitHub</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>

        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>Linux</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>
      </div>
    </div>
  );
}
