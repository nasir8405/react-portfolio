import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { CTA } from "./CTA";

export const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="content-header">About</h2>
        <div className="about-container">
          <div className="about-me">
            <div className="about-me-image">
              <div className="about-cards">
                <article className="about-card">
                  <div>
                    <FaAward className="about-icon" />
                  </div>
                  <small>Currently working in Mccoy Mart</small>
                </article>
                <article className="about-card">
                  <div>
                    <VscFolderLibrary className="about-icon" />
                  </div>
                  <small>
                    Done Internship <br /> Worked on more than 5 projects
                  </small>
                </article>
              </div>
            </div>
          </div>
          <div className="about-content">
            <p>
              My name is Nasir Firdaush, and I am a Front End software
              developer with a degree from Galgotias University. With two years
              of experience in the software development industry, I possess a
              deep understanding of the software development life cycle and have
              successfully delivered high-quality solutions to clients.
              <br />
              <br />
              My primary area of expertise is in JavaScript, React JS,Next js, HTML,
              CSS, and Bootstrap, and I have extensive experience in designing
              and developing responsive web applications. I have a keen eye for
              detail and strive for excellence in every project that I work on.
              <br />
              <br />
              In addition to my technical skills, I am an excellent communicator
              and work well in a team environment. I believe that collaboration
              and open communication are key to delivering successful software
              solutions.
              <br />
              <br />
              Overall, I am a motivated, dedicated, and highly skilled software
              developer who is passionate about delivering exceptional results
              to clients. I look forward to continuing to expand my skill set
              and take on new challenges in the software development industry.
              <br />
              <br />
              For more contact me by click below...
            </p>
            <CTA />
          </div>
        </div>
      </div>
    </section>
  );
};
