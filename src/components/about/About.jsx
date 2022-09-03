import "./about.css";
import React, { useEffect, useState } from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { AiOutlineEye } from "react-icons/ai";
import { useStateContext } from "../../context/stateContext";
import { client } from "../../lib/client";

const About = () => {
  const [views, setViews] = useState(0);
  const { user } = useStateContext();

  useEffect(() => {
    getData();
  }, []);
  const updateViews = async (data) => {
  if (data) {
    await client
    .patch(data[0]._id) 
    .inc({ views: 1 }) 
    .commit()
    .then((updateViews) => {
      setViews(updateViews)
    })
    .catch((err) => {
      console.error("Oh no, the update failed: ", err.message);
    });
  }
  };

  const getData = async () => {
    const query = '*[_type=="visitors"]';
    await client.fetch(query).then(updateViews);
  };
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
            <article className="about__card">
              <AiOutlineEye className="about__icon" />
              <h5>Views </h5>
              <small style={{ fontSize: "0.7rem" }}>{views.views} Visitors</small>
            </article>
          </div>
          <p>{user?.description}</p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
