import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Database() {
  return (
    <div className="database">
      <h3>Database</h3>
      <div className="experience__content">
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>MySQL</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>

        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>MongoDB</h4>
            <small className="text-light">Experienced</small>
          </div>
        </article>
      </div>
    </div>
  );
}
