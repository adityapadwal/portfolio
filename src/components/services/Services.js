import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Get to know more</h5>
      <h2>About me</h2>

      <div className="container services__container">

        <article className="service">
          <div className="services__head">
            <h3>Achievements</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>SGPA 10 in First Year Engineering</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Solved 150+ DSA Problems accross all platforms</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Active participant in extra curricular activities</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Active participant in hackathons and coding competitions</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="services__head">
            <h3>Certifications</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Full Stack web development, Udemy</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Web Design, Udemy</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Google Cloud Foundation, Quiklabs</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Fundamentals of Digital Marketing, Google</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>C and C++ programming, IACSD</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="services__head">
            <h3>Relevant Coursework</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Software Engineering</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Operating Systems</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Data Structures And Algorithms</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Object Oriented Programming</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Database Management Systems</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Computer Graphics</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  );
};

export default Services;
