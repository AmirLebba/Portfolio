// src/Portfolio/Portfolio.jsx
import React from 'react';
import './Portfolio.css';
import projectsData from './projectsData';
import ProjectCard from './projectCard';

function Portfolio() {
  return (
    <section className="portfolio-Wrapper">
      <h1>Portfolio</h1>
      <div className="container">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
