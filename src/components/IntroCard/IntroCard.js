import React from "react";
import Anime from "react-anime";
import Arrow from "../../imgs/arrow-down.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default function IntroCard() {
  return (
    <div className="header">
      <Anime scale={[2]} duration={[2000]}>
        <div className="intro" style={{textAlign: 'center'}}>
          <h1 style={{marginBottom:"0px"}}>Giselle Domingo</h1>
          <p>illustrator | developer | creator </p>
        </div>
      </Anime>
      <Anime opacity={[0, 1]} duration={[2000]} delay={[2000]}>
        <Link activeClass="active" to="projects" smooth={true} duration={500}>
          <p className="enter">check me out!</p>
        </Link>
      </Anime>
    </div>
  );
}
