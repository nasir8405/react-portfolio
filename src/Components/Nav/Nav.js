import React, { useState } from "react";
import "./Nav.css";
export const Nav = () => {
  const [active, setActive] = useState("#header");

  return (
    <nav>
      <div className="container">
        <div>
          <a
            href="/"
            onClick={() => setActive("#header")}
            className={`nav-header ${active === "#header" ? "active" : ""}`}
          >
            My Portfolio
          </a>
        </div>
        <div>
          <a
            href="#about"
            onClick={() => setActive("#about")}
            className={active === "#about" ? "active" : ""}
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setActive("#experience")}
            className={active === "#experience" ? "active" : ""}
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setActive("#portfolio")}
            className={active === "#portfolio" ? "active" : ""}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setActive("#contact")}
            className={active === "#contact" ? "active" : ""}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
