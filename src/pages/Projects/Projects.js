import React, { Component } from "react";
import projectsData from "../../data/Projects";
import { Element, animateScroll as scroll } from "react-scroll";
import { ProjectCard } from "../../components";
import "./Projects.css";

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      word: "hello",
      projects: [],
    };
  }

  onFocus = () => {};

  componentDidMount() {
    window.addEventListener("focus", this.onFocus);
    this.setState({
      projects: projectsData,
    });
  }

  render() {
    return (
      <Element name="projects">
        <div className="project-page">
          <h1 className="project-page-header">projects</h1>
          <div className="projects-container">
            {projectsData.map((data) => (
              <ProjectCard
                id={data.id}
                img={data.img}
                title={data.title}
                description={data.description}
                tech={data.tech}
                link={data.link}
              />
            ))}
          </div>
        </div>
      </Element>
    );
  }
}
