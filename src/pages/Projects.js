import React, { Component } from "react";
import projectsData from "../data/Projects";
import githubLogo from "../imgs/svg/github.svg";
import { Element, animateScroll as scroll } from "react-scroll";
// import AOS from 'aos';

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
    //test
    console.log(projectsData);
    console.log(this.state.projects);
  }

  render() {
    return (
        <Element name="projects">
          <div className="project-page">
            <h1 className="project-page-header">Projects</h1>
            <div className="projects-container">
              {projectsData.map((data) => (
                <div className="project-card" key={data.id}>
                  {/* <img className="project-img" src={data.img} width="100%" /> */}
                  <div className="project-title">{data.title}</div>
                  <div className="desc">
                    <p>{data.description}</p>
                  </div>
                  <div className="card-footer">
                    <a href={data.link}>
                      <img
                        className="github-logo"
                        src={githubLogo}
                        width="32px"
                      />{" "}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Element>
    );
  }
}
