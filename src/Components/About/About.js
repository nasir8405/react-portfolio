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
                  <FaAward className="about-icon" />
                  <h5>Done</h5>
                  <small>Intership During College</small>
                </article>
                <article className="about-card">
                  <VscFolderLibrary className="about-icon" />
                  <h5>Projects</h5>
                  <small>Worked on more than 5 projects</small>
                </article>
              </div>
            </div>
          </div>
          <div className="about-content">
            <p>
              Software engineer with ability to learn and collaborate in rapidly
              changing environments and compositions.Worked through 1000+ hours
              of bootcamp structure, learning javaScript,React.js and HTML.Eager
              to tackle web development challenge to achieve lasting impacts on
              user experience. For more contact me by click below...
            </p>
            <CTA />
          </div>
        </div>
      </div>
    </section>
  );
};
