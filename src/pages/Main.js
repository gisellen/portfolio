import React from "react";
//components
import { IntroCard } from "../components"
import Projects from "./Projects"
import Contact from "./Contact"
//images & data
// import Arrow from "../imgs/arrow-down.png";
import pomodoroimg from "../imgs/pomodoroimg.PNG";
import projectsData from "../data/Projects";
import githubLogo from "../imgs/svg/github.svg";
//misc
import {
  Element,
  animateScroll as scroll,
} from "react-scroll";

export default class Main extends React.Component {
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
      <>
      <IntroCard />
      <Projects />
      <Contact />
      </>
    );
  }
}
