import "./experience.css";
import React, { useEffect, useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { client } from "../../lib/client";
const Experience = () => {
  const [frontendLang, setFrontendLang] = useState([]);
  const [backendLang, setBackendLang] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const query = '*[_type=="experience"]';
    const res = await client.fetch(query);
    setFrontendLang(filterDataByLang("frontend", res));
    setBackendLang(filterDataByLang("backend", res));
  };
  const filterDataByLang = (type, data) => {
    return data.filter((ele) => {
      return ele.type === type;
    });
  };
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developmet</h3>
          <div className="experience__content">
            {frontendLang && frontendLang.map((item) => {
              return (
                <article className="experience__details" key={item._id}>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{item.language}</h4>
                    <small className="text-light">{item.experience}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Developmet</h3>
          <div className="experience__content">
            {backendLang && backendLang.map((item) => {
              return (
                <article className="experience__details" key={item._id}>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{item.language}</h4>
                    <small className="text-light">{item.experience}</small>
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
