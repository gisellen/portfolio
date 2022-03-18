import React from "react";
import Anime from "react-anime";
import Arrow from "../../imgs/svg/arrow-down.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import './IntroCard.css';

export default function IntroCard() {
  return (
    <div className="header">
      <Anime scale={[2]} duration={[1000]}>
        <div className="intro">
          <h1>hello. <br />i'm giselle!</h1>
          <Anime opacity={[0, 1]} duration={[2000]} delay={[1200]}>
          <p className="description">illustrator | developer | creator </p>
          </Anime>
        </div>
      </Anime>
      <Anime opacity={[0, 1]} duration={[2000]} delay={[1500]}>
        <Link activeClass="active" to="projects" smooth={true} duration={500}>
          <img className="enter" src={Arrow} width='50px'/>
        </Link>
      </Anime>
    </div>
  );
}
