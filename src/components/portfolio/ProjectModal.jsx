import React, { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!project) return null
  const paragraphs = Array.isArray(project.summary) ? project.summary : [project.summary]

  return (
    <div
      className="portfolio-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div className="portfolio-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="portfolio-modal-close" onClick={onClose}>
          Close
        </button>
        <h3 id="project-modal-title">{project.title}</h3>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {project.links?.length > 0 ? (
          <div className="portfolio-modal-links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
