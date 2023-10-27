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
              <small>Intern @ Persistent Systems</small>
            </article>

            <article className="about__card">
              <BsFillBookmarkStarFill className="about__icon" />
              <h5>Academic GPA</h5>
              <small>9.46 GPA</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed Projects</small>
            </article>

            <article className="about__card">
              <FiStar className="about__icon" />
              <h5>Skills</h5>
              <small>Web Development |</small>
              <small> Cloud</small>
            </article>

          </div>
          
          <p>
            Hi, I'm Aditya, a 21-year-old Computer Science Engineering student with a deep-rooted passion for technology. 
            I thrive on solving complex problems and turning innovative ideas into reality. 
            My goal is to make a positive impact through my work, and I'm dedicated to pushing the boundaries of what technology can achieve.
          </p>
          
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
