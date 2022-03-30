import React from "react";
import "./ProjectCard.css";

export default function ProjectCard(props) {
  return (
    <div className="project-card" key={props.id}>
      <div className="project-info">
        <div className="project-title">{props.title}</div>
        <p className="desc">{props.description}</p>
        <div className="technologies">{props.tech}</div>
        <div className="card-footer">
          <a href={props.link} target="_blank" >
            <button className="source">source</button>
          </a>
        </div>
      </div>
    </div>
  );
}
