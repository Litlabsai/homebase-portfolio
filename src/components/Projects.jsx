import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "HomeBase Portfolio",
    description: "A dark-themed personal portfolio site with Matrix rain effects, a live social feed powered by Firebase, media gallery, and terminal-style UI. Built to showcase projects and connect with the grid.",
    tech: ["React", "Firebase", "Vite", "CSS"],
    demo: "#",
    source: "https://github.com/Litlabsai/homebase-portfolio"
  },
  {
    title: "L1T.GRID Feed",
    description: "Real-time social broadcast board built with Firebase Firestore. Anonymous authentication, live post streaming, and like interactions — all wrapped in a hacker-grid aesthetic.",
    tech: ["React", "Firebase", "Firestore", "Anonymous Auth"],
    demo: "#",
    source: "https://github.com/Litlabsai/homebase-portfolio"
  },
  {
    title: "Terminal UI Toolkit",
    description: "A reusable component library of terminal-style UI elements: glitch text, matrix rain canvas, animated progress bars, and sound-reactive buttons for building immersive dark-themed web apps.",
    tech: ["React", "CSS", "Canvas API", "Web Audio API"],
    demo: "#",
    source: "#"
  }
];

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="section-title">// ACTIVE PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-header">
              <h3>{project.title}</h3>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {project.demo !== '#' && (
                  <a href={project.demo} className="link-btn" target="_blank" rel="noreferrer">DEMO</a>
                )}
                {project.source !== '#' && (
                  <a href={project.source} className="link-btn" target="_blank" rel="noreferrer">CODE</a>
                )}
              </div>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((t) => (
                <span className="tech-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
