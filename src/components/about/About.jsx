import "./about.css";
import React, { useEffect, useState } from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useStateContext } from "../../context/stateContext";

const About = () => {
  const { user } = useStateContext();

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="./assets/me-about.jpg" alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiance</h5>
              <small style={{ fontSize: "0.7rem" }}>
                {user?.detailsExperiance}+ year Working
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small style={{ fontSize: "0.7rem" }}>
                {user?.detailsClients}+Worldwide
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small style={{ fontSize: "0.7rem" }}>
                {user?.detailsProjects}+Completed
              </small>
            </article>
          </div>
          <p>{user?.description}</p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
