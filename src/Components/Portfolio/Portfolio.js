import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../Assets/portfolio1.jpg"
import IMG2 from "../../Assets/portfolio2.jpg"
import IMG3 from "../../Assets/portfolio3.jpg"
import IMG4 from "../../Assets/portfolio4.jpg"
import IMG5 from "../../Assets/portfolio5.png"
import IMG6 from "../../Assets/portfolio6.jpg"

export const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "This is a portfolio item title",
      githubCodeUrl: "https://www.google.com",
      demoUrl: "https://www.google.com"
    },
    {
      id: 2,
      image: IMG2,
      title: "This is a portfolio item title",
      githubCodeUrl: "https://www.google.com",
      demoUrl: "https://www.google.com"
    },
    {
      id: 3,
      image: IMG3,
      title: "This is a portfolio item title",
      githubCodeUrl: "https://www.google.com",
      demoUrl: "https://www.google.com"
    },
    {
      id: 4,
      image: IMG4,
      title: "This is a portfolio item title",
      githubCodeUrl: "https://www.google.com",
      demoUrl: "https://www.google.com"
    },
    {
      id: 5,
      image: IMG5,
      title: "This is a portfolio item title",
      githubCodeUrl: "https://www.google.com",
      demoUrl: "https://www.google.com"
    },
    {
      id: 6,
      image: IMG6,
      title: "This is a portfolio item title",
      githubCodeUrl: "https://www.google.com",
      demoUrl: "https://www.google.com"
    },
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {
          data.map((project) => {
            return (
              <article className="portfolio-item" key={project.id}>
                <div className="portfolio-item-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <h3>{project.title+"-"+project.id}</h3>
                <div className="portfolio-item-cta">
                  <a href={project.githubCodeUrl} className='btn' target="-blank">Github Code</a>
                  <a href={project.demoUrl} className='btn btn-primary' target="-blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}