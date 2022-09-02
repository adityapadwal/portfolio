import React from "react";
import "./about.css";
import ME from "../../assets/adiPhoto1.jpg";
import { FaAward } from "react-icons/fa";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { VscFolderLibrary } from "react-icons/vsc";
import { FiStar } from "react-icons/fi"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Intern at Sparks Foundation</small>
            </article>

            <article className="about__card">
              <BsFillBookmarkStarFill className="about__icon" />
              <h5>Academic GPA</h5>
              <small>9.34 SGPA</small>
              <small>(Second Year)</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>

            <article className="about__card">
              <FiStar className="about__icon" />
              <h5>Skills</h5>
              <small>Problem Solving (DSA)</small>
            </article>

          </div>

          <p>
            I am a Third Year Computer Engineering Undergraduate at Savitribai Phule
            Pune University and currently studying at Dr. D. Y. Patil Institute of
            Technology, Pimpri, Pune.
          </p>
          <p>
          I am currently looking for internship opportunities
          where I can put my skills to use and contribute towards making a change.
          </p>
          
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
