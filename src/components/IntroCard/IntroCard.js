import React from "react";
import Anime from "react-anime";
import Arrow from "../../imgs/svg/arrow-down.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import './IntroCard.css';

export default function IntroCard() {
  return (
    <div className="header" id="home">
      <Anime easing="easeOutElastic" scale={[2]} rotate={[90,0]} duration={[2000]}>
        <div className="intro">
          <h1>hello. <br />i'm <span className="intro-name">giselle</span>!</h1>
          <Anime opacity={[0, 1]} duration={[2000]} delay={[1500]}>
          <p className="description" align="center"> developer & artist </p>
          </Anime>
        </div>
      </Anime>
      <Anime opacity={[0, 1]} duration={[2000]} delay={[1900]}>
        <Link activeClass="active" to="about" smooth={true} duration={500} offset={-150}>
          <img className="enter" src={Arrow} width='50px'/>
        </Link>
      </Anime>
    </div>
  );
}
