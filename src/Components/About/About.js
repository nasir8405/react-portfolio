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
                  <small>Currently working in Abaris softech</small>
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
              Software engineer with ability to learn and collaborate in rapidly
              changing environments and compositions.Resourceful professional
              with successful track record in developing innovative web designs
              and features. Possesses solid knowledge of JavaScript, React JS,
              HTML, CSS, and Bootstrap with ability to quickly learn new
              technologies. Demonstrated success in identifying and resolving
              complex code issues. For more contact me by click below...
            </p>
            <CTA />
          </div>
        </div>
      </div>
    </section>
  );
};
