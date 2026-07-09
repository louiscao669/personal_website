import React, { useMemo } from 'react'
import BorderGlow from './ui/BorderGlow/BorderGlow'
import { normalizeProjectLinks } from '../utils/projectLinks'
import '../styles/project-grid.css'

function ProjectLinkIcon({ type }) {
  if (type === 'github') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    )
  }
  if (type === 'demo' || type === 'live') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    )
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M14 3h7v7M10 14L21 3M21 14v7h-7M3 10V3h7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ProjectGridCard({
  title,
  summary,
  image,
  alt,
  links = [],
  paper,
  readMoreText,
  onReadMore,
  onOpen,
  className = '',
}) {
  const interactive = typeof onOpen === 'function'
  const hasReadMore = Boolean(readMoreText && onReadMore)
  const hasPaper = Boolean(paper?.href)
  const normalizedLinks = useMemo(() => normalizeProjectLinks(links), [links])

  const card = (
    <article
      className={`project-grid-card ${className}`.trim()}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={interactive ? onOpen : undefined}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onOpen()
              }
            }
          : undefined
      }
    >
      <div className="project-grid-card__media">
        {image ? (
          <img
            className="project-grid-card__photo"
            src={image}
            alt={alt ?? title}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="project-grid-card__photo-placeholder" aria-hidden />
        )}
      </div>
      <div className="project-grid-card__body">
        <h3 className="project-grid-card__title">{title}</h3>
        {summary ? <p className="project-grid-card__summary">{summary}</p> : null}
        {hasReadMore ? (
          <button
            className="project-grid-card__read-more"
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              onReadMore()
            }}
          >
            Click to read more
          </button>
        ) : null}
        {normalizedLinks.length > 0 || hasPaper ? (
          <div className="project-grid-card__links" onClick={(e) => e.stopPropagation()}>
            {normalizedLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="project-grid-card__link"
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                <ProjectLinkIcon type={link.icon} />
              </a>
            ))}
            {hasPaper ? (
              <a
                className="project-grid-card__paper-button"
                href={paper.href}
                target="_blank"
                rel="noreferrer"
              >
                {paper.label}
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  )

  return (
    <BorderGlow
      className="project-grid-card-glow"
      edgeSensitivity={24}
      glowColor="174 72 56"
      backgroundColor="#ffffff"
      borderRadius={16}
      glowRadius={76}
      glowIntensity={3}
      coneSpread={42}
      animated={false}
      colors={['#0f766e', '#38bdf8', '#f472b6']}
      fillOpacity={0.4}
    >
      {card}
    </BorderGlow>
  )
}
