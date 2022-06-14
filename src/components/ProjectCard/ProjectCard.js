import React from "react";
import "./ProjectCard.css";

import Chip from "@mui/material/Chip";

import IconButton from "@mui/material/IconButton";
import ScatterPlot from "@mui/icons-material/ScatterPlot";
import GithubIcon from "@mui/icons-material/GitHub";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import Tooltip from "@mui/material/Tooltip";

export default function ProjectCard(props) {
  const tech = props.tech;

  const techList = tech.map((item) => <Chip className="project-tag" label={item} />);

  return (
    <div className="project-card" key={props.id}>
      <div className="project-info">
        <div className="project-header">
          <div className="project-title">{props.title}</div>
          <ScatterPlot className="header-icon" />
        </div>
        <p className="desc">{props.description}</p>
        <div className="technologies"> {techList}</div>
        <div className="card-footer">
          <a href={props.link} target="_blank">
            <Tooltip title="Github" placement="left">
              <IconButton>
                <GithubIcon
                  className="github-icon"
                  target="_blank"
                  fontSize="large"
                />
              </IconButton>
            </Tooltip>
          </a>
          {props.demo !== "" ? (
            <a href={props.demo} target="_blank">
              <Tooltip title="Demo" placement="right">
                <IconButton>
                  <WebAssetIcon
                    className="webasset-icon"
                    target="_blank"
                    fontSize="large"
                  />
                </IconButton>
              </Tooltip>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
