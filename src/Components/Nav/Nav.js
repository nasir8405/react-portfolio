import React, { useState } from 'react'
import "./Nav.css"
export const Nav = () => {
  const [active,setActive] = useState("#header")
  
  return (
    <nav>
      <a href="#header" onClick={()=>setActive("#header")} className={active==="#header"? "active":""}>Home</a>
      <a href="#about" onClick={()=>setActive("#about")} className={active==="#about"? "active":""}>About</a>
      <a href="#experience" onClick={()=>setActive("#experience")} className={active==="#experience"? "active":""}>Experience</a>
      <a href="#portfolio"onClick={()=>setActive("#portfolio")} className={active==="#portfolio"? "active":""}>Portfolio</a>
      <a href="#contact" onClick={()=>setActive("#contact")} className={active==="#contact"? "active":""}>Contact</a>
    </nav>
  )
}
