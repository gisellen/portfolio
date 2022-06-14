import React, { Component } from "react";
import "./About.css";

import IconButton from "@mui/material/IconButton";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import Avatar from "../../imgs/avatar.png";
export default class About extends Component {
  render() {
    return (
      <div class="about" id="about">
        <h1 className="about-page-header">about</h1>
        <div className="box">
          <img src={Avatar} width="40%" />
          <div>
            <p className="about-description" align="justified">
              I am a software engineer and artist based in NYC. I am heavily
              interested in front-end engineering, UX/UI design, and human
              connections.
            </p>
            <div className="about-links">
            <a href="https://www.linkedin.com/in/gisellengd/" target="_blank">
              <IconButton>
                <LinkedInIcon
                  className="about-linkedin-icon"
                  sx={{ fontSize: 40 }}
                />
              </IconButton>
            </a>
            <a href="https://github.com/gisellen" target="_blank">
              <IconButton>
                <GitHubIcon
                  className="about-github-icon"
                  sx={{ fontSize: 40 }}
                />
              </IconButton>
            </a>
            <a href="mailto:giselle.domingo.x@gmail.com">
              <IconButton>
                <EmailIcon className="about-email-icon" sx={{ fontSize: 40 }} />
              </IconButton>
            </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
