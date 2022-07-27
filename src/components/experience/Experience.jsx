import "./experience.css";
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const experianceLangFront = [
  { name: "Html", experiance: "Experianced" },
  { name: "Css", experiance: "Experianced" },
  { name: "JavaScript", experiance: "Experianced" },
  { name: "VueJS", experiance: "intermediate" },
  { name: "ReactJS", experiance: "intermediate" },
  { name: "Sass", experiance: "intermediate" },
  { name: "pug", experiance: "Basic" },
];

const experianceLangBack = [
  { name: "NodeJS", experiance: "intermediate" },
  { name: "MongoDB", experiance: "intermediate" },
  { name: "php", experiance: "Basic" },
  { name: "Firebase", experiance: "intermediate" },
  { name: "NoSql", experiance: "Basic" },
  { name: "MySql", experiance: "Basic" },
];
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developmet</h3>
          <div className="experience__content">
            {experianceLangFront.map((lang) => {
              return (
                <article className="experience__details"  key={lang.name}> 
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{lang.name}</h4>
                    <small className="text-light">{lang.experiance}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Developmet</h3>
          <div className="experience__content">
            {experianceLangBack.map((lang) => {
              return (
                <article className="experience__details" key={lang.name}>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{lang.name}</h4>
                    <small className="text-light">{lang.experiance}</small>
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

export default Experience;
