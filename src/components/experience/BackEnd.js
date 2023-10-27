import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

export default function BackEnd() {
  return (
    <div className="experience__backend">
      <h3>Backend Libraries/Frameworks</h3>
      <div className="experience__content">
        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>REST API</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>

        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>Node JS</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>

        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>Express JS</h4>
            <small className="text-light">Intermediate</small>
          </div>
        </article>

        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>Next JS</h4>
            <small className="text-light">Beginner</small>
          </div>
        </article>

        <article className="experience__details">
          <BsPatchCheckFill className="experience__details-icon" />
          <div>
            <h4>Graph QL</h4>
            <small className="text-light">Beginner</small>
          </div>
        </article>
      </div>
    </div>
  );
}
