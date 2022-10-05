import React from "react";
import "./Sidebar.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Sidebar() {
  return (
    <div className="sidebar-com">
      <Link activeClass="active" to="home" smooth={true} duration={500} hashSpy={true}>
        <div className="group">
          <button className="button"></button>
          <div className="sidebar">home</div>
        </div>
      </Link>
      <Link activeClass="active" to="about" smooth={true} duration={500} offset={-250} hashSpy={true}>
        <div className="group">
          <button className="button"></button>
          <div className="sidebar">about</div>
        </div>
      </Link>
      <Link activeClass="active" to="projects" smooth={true} duration={500}  offset={-87} hashSpy={true}> 
        <div className="group">
          <button className="button"></button>
          <div className="sidebar">projects</div>
        </div>
      </Link>
      <Link activeClass="active" to="contact" smooth={true} duration={500}  offset={-87} hashSpy={true}> 
        <div className="group">
          <button className="button"></button>
          <div className="sidebar">contact</div>
        </div>
      </Link>
    </div>
  );
}
