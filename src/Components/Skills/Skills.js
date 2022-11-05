import React from "react";
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { skillData } from "./mockData";
export const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills & Technology</h2>
        <div className="experience-container">
          <div className="experience-content">
            {skillData.map((item) => {
              return (
                <article className="experience-details" key={item.id}>
                  <BsPatchCheckFill className="icon" />
                  <div>
                    <h4>{item.title}</h4>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
