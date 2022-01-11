import React from "react";
import githubLogo from "../../imgs/svg/github.svg";
import "./ProjectCard.css";

export default function ProjectCard(props) {
  return (
    <div className="project-card" key={props.id}>
      <img className="project-img" src={props.img} />
      <div>
        <div className="project-title">{props.title}</div>
        <p className="desc">{props.description} <br />
        <b>Technologies:</b> {props.tech}
        </p>
        <div className="card-footer">
          <a href={props.link}>
            <img className="github-logo" src={githubLogo} width="32px" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
