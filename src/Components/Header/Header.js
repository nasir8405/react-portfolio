import React from 'react'
import { CTA } from './CTA'
import "./Header.css"
import ME from "../../Assets/me.png"
import { HeaderSocials } from './HeaderSocials'

export const Header = () => {
  return (
    <header id='header'>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Nasir Firdaush</h1>
        <h5 className="text-light">Fronend Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me"/>
        </div>
        <a href="#contact" className='scroll-down'>Scroll Down</a>

      </div>
    </header>
  )
}
