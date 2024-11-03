// src/Portfolio/ProjectCard.jsx
import React from 'react';
import './Portfolio.css';

function ProjectCard({ project }) {
  return (
    <div
      className="project"
      style={{
        backgroundImage: `url(${project.image})`,
        backgroundSize: "cover",
      }}
    >
      <div className="project-content">
        <h1>{project.name}</h1>
        <p className="description">{project.description}</p>
        <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
          Check Github Repo
        </a>
        <br />
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <button className="btn">Live Demo</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
