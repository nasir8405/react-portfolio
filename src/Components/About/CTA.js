import React from 'react'
import newCV from "../../Assets/CV.pdf"

export const CTA = () => {
  return (
    <div className='cta'>
        <a href={newCV} className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">Contact Me</a>
    </div>
  )
}
