import React from "react";
import "./Skills.css";
import { BsPatchCheckFill } from "react-icons/bs";
const data = [
  { id: "1", title: "HTML", status: "Intermediate" },
  { id: "2", title: "CSS", status: "Intermediate" },
  { id: "3", title: "Bootstrap", status: "Intermediate" },
  { id: "4", title: "JavaScript", status: "Intermediate" },
  { id: "5", title: "React Js", status: "Intermediate" },
  { id: "6", title: "Redux", status: "Intermediate" },
  { id: "7", title: "Git", status: "Intermediate" },
];
export const Experience = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2>Skills & Technology</h2>
        <div className="experience-container">
          <div className="experience-content">
            {data.map((item) => {
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
