import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithubAlt} from "react-icons/fa"
export const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href="https://www.linkedin.com/in/nasir-khan-b971911bb/" rel="noreferrer" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/nasir8405" rel="noreferrer" target='_blank'><FaGithubAlt/></a>
    </div>
  )
}
