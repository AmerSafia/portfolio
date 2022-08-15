import "./protofile.css";
import React, { useEffect,useState } from "react";
import { client, urlFor } from "../../lib/client";

const Protofile = () => {
const [projects, setProjects] = useState([])

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const query = '*[_type=="projects"]';
    const res = await client.fetch(query);
    setProjects(res)
  };
  return (
    <section id="protofile">
      <h5>My Recent Work</h5>
      <h2>portfolio</h2>
      <div className="container protofile__container">
        {projects &&
          projects.map((project) => {
            return (
              <article className="protofile__item" key={project._id}>
                <div className="protofile__item-image">
                  <img src={urlFor(project.image)} alt="" />
                </div>
                <h3>{project.title}</h3>
                <div className="protofile__item-cta">
                  <a
                    className="btn"
                    href={project.urlGitHub}
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="btn btn-primary"
                    href={project.urlDemo}
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    live Demo
                  </a>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default Protofile;
