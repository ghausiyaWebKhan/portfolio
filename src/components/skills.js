import React from "react";
import html from "../assets/img/tech/html.png";
import css from "../assets/img/tech/css.png";
import javascript from "../assets/img/tech/javascript.png";
import tailwind from "../assets/img/tech/tailwind.png";
import react from "../assets/img/tech/react.png";
import node from "../assets/img/tech/node.png";
import github from "../assets/img/tech/github.png";
import expressjs from "../assets/img/tech/expressjs.png";
import mongodb from "../assets/img/tech/mongodb.png";
import postman from "../assets/img/tech/postman.png";
import redux from "../assets/img/tech/redux.png";
import bootstrap from "../assets/img/tech/bootstrap.png";
import materialui from "../assets/img/tech/material-ui.png";
import git from "../assets/img/tech/git.png";
import cplus2 from "../assets/img/tech/c++.png";
import python from "../assets/img/tech/python.png";

const Skills = () => {
  const skills = [
    { icon: html, name: "HTML" },
    { icon: css, name: "CSS" },
    { icon: bootstrap, name: "Bootstrap" },
    { icon: materialui, name: "Material UI" },
    { icon: javascript, name: "Javascript" },
    { icon: react, name: "React Js" },
    { icon: redux, name: "Redux" },
    { icon: tailwind, name: "TAILWIND" },
    { icon: expressjs, name: "express Js" },
    { icon: mongodb, name: "mongodb" },
    { icon: node, name: "Node Js" },
    { icon: git, name: "Git" },
    { icon: github, name: "Github" },
    { icon: cplus2, name: "C++" },
    { icon: postman, name: "Postman" },
    { icon: python, name: "Python" },
  ];
  return (
    <section className="ftco-section" id="skills">
      <div className="container">
        <div className="row justify-content-center py-5 mt-5">
          <div className="col-md-12 heading-section text-center ">
            <h1 className="big big-2">Skills</h1>
            <h2 className="mb-4">Skills</h2>
            <p>
              Skilled web developer specializing in building responsive and
              dynamic websites using front-end and back-end technologies.
            </p>
          </div>
        </div>
        <div className="row">
          {skills.map((item, i) => {
            return (
              <div
                className="col-md-3 text-center d-flex"
                key={i}
                data-aos="fade-down"
              >
                <span className="services-1">
                  <span className="icon">
                    <img
                      src={item.icon}
                      width={50}
                      height={50}
                      alt="Tech icons"
                    />
                  </span>
                  <div className="desc">
                    <h3 className="mb-5">{item.name}</h3>
                  </div>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
