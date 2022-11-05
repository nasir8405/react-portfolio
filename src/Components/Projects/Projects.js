import React from "react";
import "./Projects.css";
import IMG1 from "../../Assets/portfolio1.jpg";

export const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "This is a portfolio item title",
      githubCodeUrl: "https://github.com/nasir8405/react-portfolio",
      demoUrl: "https://www.google.com",
    },
  ];
  return (
    <section id="portfolio">
      <div className="container">
        <h2>My Projects & Works</h2>
        <div className="portfolio-container">
          {data.map((project) => {
            return (
              <article className="portfolio-item" key={project.id}>
                <div className="portfolio-item-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <h3>{project.title + "-" + project.id}</h3>
                <div className="portfolio-item-cta">
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
