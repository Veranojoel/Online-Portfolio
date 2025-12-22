import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: "Project One",
      description: "Your first project description",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Your second project description",
      technologies: ["Vue", "Express", "PostgreSQL"],
      link: "#",
    },
    {
      id: 3,
      title: "Project Three",
      description: "Your third project description",
      technologies: ["React", "TypeScript", "Firebase"],
      link: "#",
    },
  ]);

  return (
    <div className="page-content projects-page">
      <section className="section">
        <h1>My Projects</h1>
        <p className="section-subtitle">A showcase of my recent work</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
