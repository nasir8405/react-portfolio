import React from 'react'
import "./Footer.css"
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";

export const Footer = () => {
  return (
    <footer>
      <a href="#footer" className='footer-logo'>My Portfolio Page</a>
      <ul className='permalinks'>
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact Us</a></li>
      </ul>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/nasir-khan-b971911bb/" rel="noreferrer" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/nasir8405" rel="noreferrer" target='_blank'><BsGithub/></a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Portfolio. All rights reserved</small>
      </div>
    </footer>
  )
}
