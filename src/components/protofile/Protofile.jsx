import "./protofile.css";
import React from "react";

const Protofile = () => {
  const data = [
    {
      id: Math.random(),
      title: "Live Chat Vuejs",
      img: "./assets/liveDemoChat.png",
      urlGitHub: "https://github.com/AmerSafia/chatroom-vue-with-firebase  ",
      urlDemo: "https://project1-ed4d1.web.app/",
    },
    {
      id: Math.random(),
      title: "Music Playlist",
      img: "./assets/musicPlaylist.png",
      urlGitHub: "https://github.com/AmerSafia/music-safia",
      urlDemo: "https://music-safia.firebaseapp.com/",
    },
    {
      id: Math.random(),
      title: "Custom Table Pagenation",
      img: "./assets/Table.png",
      urlGitHub: "https://github.com/AmerSafia/react-application-logger",
      urlDemo: "https://logger-demo-app.netlify.app/",
    },
    {
      id: Math.random(),
      title: "Live Chat Vuejs",
      img: "./assets/liveDemoChat.png",
      urlGitHub: "https://github.com/AmerSafia/chatroom-vue-with-firebase  ",
      urlDemo: "https://project1-ed4d1.web.app/",
    },

  ];
  return (
    <section id="protofile">
      <h5>My Recent Work</h5>
      <h2>Protofile</h2>
      <div className="container protofile__container">
        {data &&
          data.map((article) => {
            return (
              <article className="protofile__item" key={article.id}>
                <div className="protofile__item-image">
                  <img src={article.img} alt="" />
                </div>
                <h3>{article.title}</h3>
                <div className="protofile__item-cta">
                  <a
                    className="btn"
                    href={article.urlGitHub}
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="btn btn-primary"
                    href={article.urlDemo}
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
