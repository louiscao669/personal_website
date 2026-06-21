import React, { useEffect } from 'react'
import ProjectGridCard from './ProjectGridCard'
import useHorizontalStripScroll from '../hooks/useHorizontalStripScroll'
import { normalizeProjectLinks } from '../utils/projectLinks'
import '../styles/ProjectsSection.css'
import '../styles/project-grid.css'
import '../styles/strip-scroll-nav.css'

const ProjectsSection = ({
  items = [],
  hideTitle = false,
  integrated = false,
  onSelectProject,
}) => {
  const useGrid = integrated
  const useScrollableGrid = integrated && items.length > 2
  const {
    scrollRef,
    canScrollLeft,
    canScrollRight,
    syncScrollState,
  } = useHorizontalStripScroll(items.length)

  useEffect(() => {
    syncScrollState()
  }, [items, syncScrollState])

  const scrollOuterClassName = [
    'strip-scroll-outer',
    useScrollableGrid ? 'has-scroll-affordance' : '',
    canScrollLeft ? 'can-scroll-left' : '',
    canScrollRight ? 'can-scroll-right' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section
      className={`projects-section ${integrated ? 'projects-section--integrated' : ''} ${
        useGrid ? 'projects-section--grid' : ''
      }`.trim()}
    >
      {!useGrid && <div className="background-blur-effects" aria-hidden />}
      {!hideTitle && <h2 className="section-title">PROJECTS</h2>}
      <div className="projects-display">
        <div className={scrollOuterClassName}>
          <div
            className={useScrollableGrid ? 'projects-scroll-container' : ''}
            ref={useScrollableGrid ? scrollRef : null}
          >
            <div
              className={[
                useGrid ? 'projects-grid-display' : 'projects-grid projects-grid--legacy',
                useScrollableGrid ? 'projects-grid-display--scroll' : '',
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
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
