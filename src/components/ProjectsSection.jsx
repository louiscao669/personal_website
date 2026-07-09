import React from 'react'
import ProjectGridCard from './ProjectGridCard'
import { normalizeProjectLinks } from '../utils/projectLinks'
import '../styles/ProjectsSection.css'
import '../styles/project-grid.css'

const ProjectsSection = ({
  items = [],
  hideTitle = false,
  integrated = false,
  onSelectProject,
}) => {
  const useGrid = integrated

  return (
    <section
      className={`projects-section ${integrated ? 'projects-section--integrated' : ''} ${
        useGrid ? 'projects-section--grid' : ''
      }`.trim()}
    >
      {!useGrid && <div className="background-blur-effects" aria-hidden />}
      {!hideTitle && <h2 className="section-title">PROJECTS</h2>}
      <div className="projects-display">
        <div
          className={[
            useGrid ? 'projects-grid-display projects-grid-display--vertical' : 'projects-grid projects-grid--legacy',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {items.map((project, index) => (
            <ProjectGridCard
              key={project.title + index}
              title={project.title}
              summary={project.summary ?? ''}
              image={project.image}
              alt={project.alt ?? project.title}
              links={normalizeProjectLinks(project.links)}
              paper={project.paper}
              readMoreText={project.readMoreText}
              onReadMore={
                project.readMoreText && onSelectProject
                  ? () =>
                      onSelectProject({
                        title: project.title,
                        summary: project.readMoreText,
                        links: normalizeProjectLinks(project.links),
                      })
                  : undefined
              }
              onOpen={
                onSelectProject
                  ? () =>
                      onSelectProject({
                        title: project.title,
                        summary: project.summary ?? '',
                        links: normalizeProjectLinks(project.links),
                      })
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
