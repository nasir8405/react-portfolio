import React from 'react';
import "./About.css";
import ME from "../../Assets/me-about.jpg";
import { FaAward } from "react-icons/fa"
import { VscFolderLibrary } from "react-icons/vsc"

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className='about-card'>
              <FaAward className='about-icon' />
              <h5>Done</h5>
              <small>Intership During College</small>
            </article>
            <article className='about-card'>
              <VscFolderLibrary className='about-icon' />
              <h5>Projects</h5>
              <small>5+ Small Project</small>
            </article>
          </div>
          <p>Software engineer with ability to learn and collaborate in rapidly changing environments and compositions.Worked through 1000+ hours of bootcamp structure, learning javaScript,React.js and HTML.Eager to tackle web development challenge to achieve lasting impacts on user experience. For more contact me by click below...
          </p>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}
