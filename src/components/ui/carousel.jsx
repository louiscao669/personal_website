import { useEffect, useId, useRef, useState } from 'react'
import './carousel.css'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="interest-carousel__arrow-icon">
    <path
      d="M5 12h14m-6-6 6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
)

const Slide = ({ slide, index, current, handleSlideClick }) => {
  const slideRef = useRef(null)
  const xRef = useRef(0)
  const yRef = useRef(0)
  const frameRef = useRef()

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return

      slideRef.current.style.setProperty('--x', `${xRef.current}px`)
      slideRef.current.style.setProperty('--y', `${yRef.current}px`)
      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  const handleMouseMove = (event) => {
    const el = slideRef.current
    if (!el) return

    const r = el.getBoundingClientRect()
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2))
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2))
  }

  const handleMouseLeave = () => {
    xRef.current = 0
    yRef.current = 0
  }

  const imageLoaded = (event) => {
    event.currentTarget.style.opacity = '1'
  }

  const isCurrent = current === index

  return (
    <li
      ref={slideRef}
      className={`interest-carousel__slide${isCurrent ? ' is-current' : ''}`}
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden={!isCurrent}
    >
      <div
        className="interest-carousel__slide-card"
        style={{ boxShadow: isCurrent ? 'none' : undefined }}
      >
        <img
          className="interest-carousel__image"
          alt={slide.title}
          src={slide.src}
          style={
            slide.imageRotation
              ? { transform: `rotate(${slide.imageRotation}deg) scale(1.2)` }
              : undefined
          }
          onLoad={imageLoaded}
          loading="eager"
          decoding="async"
        />
      </div>

      <article className={`interest-carousel__content${isCurrent ? ' is-visible' : ''}`}>
        <h2>{slide.title}</h2>
      </article>

      {slide.description ? (
        <div className="interest-carousel__description" aria-hidden="true">
          <p>{slide.description}</p>
          {slide.showReadMore && slide.readMoreHref ? (
            <a
              className="interest-carousel__read-more"
              href={slide.readMoreHref}
              onClick={(event) => event.stopPropagation()}
            >
              Click to read more
              <span className="interest-carousel__read-more-box" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      ) : null}
    </li>
  )
}

const CarouselControl = ({ type, title, handleClick }) => {
  return (
    <button
      className={`interest-carousel__control${
        type === 'previous' ? ' interest-carousel__control--previous' : ''
      }`}
      title={title}
      aria-label={title}
      onClick={handleClick}
      type="button"
    >
      <ArrowIcon />
    </button>
  )
}

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0)
  const id = useId()
  const wheelLockRef = useRef(false)

  const goToPrevious = () => {
    setCurrent((value) => {
      const previous = value - 1
      return previous < 0 ? slides.length - 1 : previous
    })
  }

  const goToNext = () => {
    setCurrent((value) => {
      const next = value + 1
      return next === slides.length ? 0 : next
    })
  }

  const handlePreviousClick = () => {
    goToPrevious()
  }

  const handleNextClick = () => {
    goToNext()
  }

  const handleSlideClick = (index) => {
    if (current !== index) setCurrent(index)
  }

  const handleWheel = (event) => {
    if (Math.abs(event.deltaX) < 8 || wheelLockRef.current) return

    event.preventDefault()
    wheelLockRef.current = true

    if (event.deltaX > 0) {
      goToNext()
    } else {
      goToPrevious()
    }

    window.setTimeout(() => {
      wheelLockRef.current = false
    }, 650)
  }

  if (!slides?.length) return null

  return (
    <div
      className="interest-carousel"
      aria-labelledby={`carousel-heading-${id}`}
      onWheel={handleWheel}
    >
      <h2 id={`carousel-heading-${id}`} className="interest-carousel__sr-only">
        Interests gallery
      </h2>

      <ul
        className="interest-carousel__track"
        style={{
          transform: `translateX(calc(-1 * ${current} * (var(--slide-size) + var(--slide-gap))))`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={`${slide.title}-${index}`}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="interest-carousel__controls">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
        <CarouselControl type="next" title="Go to next slide" handleClick={handleNextClick} />
      </div>
    </div>
  )
}
