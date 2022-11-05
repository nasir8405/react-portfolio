import React from "react";
import "./Projects.css";
import { projectData } from "./mockData";
export const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2>My Projects & Works</h2>
        <div className="projects-container">
          {projectData.map((project) => {
            return (
              <article className="projects-item" key={project.id}>
                <div className="projects-item-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <div className="projects-item-cta">
                  <a
                    href={project.githubCodeUrl}
                    className="btn"
                    target="-blank"
                  >
                    Github Code
                  </a>
                  <a
                    href={project.demoUrl}
                    className="btn btn-primary"
                    target="-blank"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
