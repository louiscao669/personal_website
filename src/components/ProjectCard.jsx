import React from 'react'
import '../styles/ProjectCard.css'

const ProjectCard = ({ title, image, alt, onOpen, className = '' }) => {
  const interactive = typeof onOpen === 'function'

  return (
    <div
      className={`visual-project-card ${className}`.trim()}
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
      <div className="visual-project-card-background">
        <svg width="411" height="690" viewBox="0 0 411 690" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_visual_project)">
            <path d="M4 0H407V682H4V0Z" fill="#D9D9D9"/>
          </g>
          <defs>
            <filter id="filter0_d_visual_project" x="0" y="0" width="411" height="690" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
      <h3 className="project-title">{title}</h3>
      <img className="project-image" src={image} alt={alt} />
    </div>
  )
}

export default ProjectCard
