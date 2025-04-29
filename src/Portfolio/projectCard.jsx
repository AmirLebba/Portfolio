// src/Portfolio/ProjectCard.jsx
import React from 'react';
import './Portfolio.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} className="project-image" />
      <div className="project-info">
        <h2>{project.name}</h2>
        <p className="technologies">
          {project.technologies.join(" • ")}
        </p>
        <p className="description">{project.description}</p>
        <div className="project-buttons">
          <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <button className="btn">Live Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
