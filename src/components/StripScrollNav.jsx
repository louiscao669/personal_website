import React from 'react'
import '../styles/strip-scroll-nav.css'

function ChevronIcon({ direction = 'right' }) {
  return (
    <svg
      className="strip-scroll-nav__icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d={direction === 'left' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function StripScrollNav({
  onPrev,
  onNext,
  canScrollLeft,
  canScrollRight,
  showNav = true,
  className = '',
}) {
  if (!showNav) return null

  return (
    <div className={`strip-scroll-nav ${className}`.trim()}>
      <button
        type="button"
        className="strip-scroll-nav__btn strip-scroll-nav__btn--prev"
        onClick={onPrev}
        disabled={!canScrollLeft}
        aria-label="Scroll to previous items"
      >
        <ChevronIcon direction="left" />
      </button>
      <button
        type="button"
        className="strip-scroll-nav__btn strip-scroll-nav__btn--next"
        onClick={onNext}
        disabled={!canScrollRight}
        aria-label="Scroll to next items"
      >
        <ChevronIcon direction="right" />
      </button>
    </div>
  )
}
