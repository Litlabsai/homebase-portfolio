import './Projects.css'

const projects = [
  {
    id: 1,
    title: "L1T.GRID Portfolio",
    description: "Personal developer portfolio with golden honeycomb matrix rain effect. Built for mobile-first development.",
    tech: ["React", "Vite", "CSS", "Termux"],
    github: "https://github.com/Litlabsai/homebase-portfolio",
    demo: "http://localhost:5173"
  },
  {
    id: 2,
    title: "Termux God Mode",
    description: "Mobile development environment setup with automated workflows, aliases, and terminal optimization.",
    tech: ["Bash", "Node.js", "Git", "Mobile Dev"],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Coming Soon",
    description: "Next project in development. Stay tuned for updates.",
    tech: ["TBD"],
    github: "#",
    demo: "#"
  }
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">[ PROJECTS ]</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-btn">Demo</a>
              </div>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
