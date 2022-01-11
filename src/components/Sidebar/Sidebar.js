import React from "react";
import "./Sidebar.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link activeClass="active" to="header" smooth={true} duration={500}>
        <div className="home-group">
          <button className="home-button"></button>
          <div className="home-sidebar">Home</div>
        </div>
      </Link>
      <Link activeClass="active" to="projects" smooth={true} duration={500}>
        <div className="projects-group">
          <button className="projects-button"></button>
          <div className="projects-sidebar">Projects</div>
        </div>
      </Link>
    </div>
  );
}
