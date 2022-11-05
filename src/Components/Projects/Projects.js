import React from "react";
import "./Projects.css";
import project1 from "../../Assets/project1.PNG";
const data = [
  {
    id: 1,
    image: project1,
    title: "My Portfolio",
    githubCodeUrl: "https://github.com/nasir8405/react-portfolio",
    demoUrl: "https://www.google.com",
  },
  {
    id: 2,
    image: project1,
    title: "My Portfolio",
    githubCodeUrl: "https://github.com/nasir8405/react-portfolio",
    demoUrl: "https://www.google.com",
  },
];
export const Projects = () => {
  console.log(data);
  return (
    <section id="projects">
      <div className="container">
        <h2>My Projects & Works</h2>
        <div className="projects-container">
          {data.map((project) => {
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
