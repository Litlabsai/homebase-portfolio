import './Projects.css'

const projects = [
  {
    id: 1,
    title: "L1T.GRID Portfolio",
    description: "Personal developer portfolio with golden honeycomb matrix rain effect. Built for mobile-first development.",
    tech: ["React", "Vite", "CSS", "Termux"],
    github: "https://github.com/Litlabsai/homebase-portfolio",
    demo: "#"
  },
  {
    id: 2,
    title: "Termux God Mode",
    description: "Mobile development environment setup with automated workflows and terminal optimization.",
    tech: ["Bash", "Node.js", "Git"],
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
                <a href={project.github} className="link-btn">GitHub</a>
                <a href={project.demo} className="link-btn">Demo</a>
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
