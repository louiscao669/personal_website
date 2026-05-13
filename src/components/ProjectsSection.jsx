import React from 'react'
import ProjectCard from './ProjectCard'
import '../styles/ProjectsSection.css'

const ProjectsSection = ({
  items = [],
  hideTitle = false,
  integrated = false,
  onSelectProject,
}) => {
  return (
    <section
      className={`projects-section ${integrated ? 'projects-section--integrated' : ''}`.trim()}
    >
      <div className="background-blur-effects" aria-hidden />
      {!hideTitle && <h2 className="section-title">PROJECTS</h2>}
      <div className="projects-scroll-container">
        <div className="projects-grid">
          {items.map((project, index) => (
            <ProjectCard
              key={project.title + index}
              title={project.title}
              image={project.image}
              alt={project.alt ?? project.title}
              onOpen={
                onSelectProject
                  ? () =>
                      onSelectProject({
                        title: project.title,
                        summary: project.summary ?? '',
                      })
                  : undefined
              }
            />
          ))}
        </div>
      </div>
      <div className="scroll-hint">
        <img
          src="https://www.svgrepo.com/show/509896/double-right-chevron.svg"
          alt=""
          className="scroll-arrow"
        />
      </div>
    </section>
  )
}

export default ProjectsSection
