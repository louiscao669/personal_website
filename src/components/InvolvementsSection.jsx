import React, { useEffect } from 'react'
import InvolvementCard from './InvolvementCard'
import ProjectGridCard from './ProjectGridCard'
import StripScrollNav from './StripScrollNav'
import useHorizontalStripScroll from '../hooks/useHorizontalStripScroll'
import '../styles/InvolvementsSection.css'
import '../styles/project-grid.css'
import '../styles/strip-scroll-nav.css'

const InvolvementsSection = ({ items = [], hideTitle = false, integrated = false }) => {
  const {
    scrollRef,
    canScrollLeft,
    canScrollRight,
    hasOverflow,
    scrollPrev,
    scrollNext,
    syncScrollState,
  } = useHorizontalStripScroll(items.length)

  useEffect(() => {
    syncScrollState()
  }, [items, syncScrollState])

  const scrollOuterClassName = [
    'strip-scroll-outer',
    items.length > 2 ? 'has-scroll-affordance' : '',
    canScrollLeft ? 'can-scroll-left' : '',
    canScrollRight ? 'can-scroll-right' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section
      className={`involvements-section ${
        integrated ? 'involvements-section--integrated' : ''
      }`.trim()}
    >
      {!hideTitle && <h2 className="involvements-section-title">INVOLVEMENTS</h2>}
      {integrated ? (
        <div className="projects-display involvements-display">
          <div className={scrollOuterClassName}>
            <div
              className={items.length > 2 ? 'projects-scroll-container' : ''}
              ref={items.length > 2 ? scrollRef : null}
            >
              <div
                className={[
                  'projects-grid-display',
                  items.length > 2 ? 'projects-grid-display--scroll' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {items.map((involvement, index) => (
                  <ProjectGridCard
                    key={involvement.title + index}
                    title={involvement.title}
                    summary={involvement.summary ?? ''}
                    image={involvement.image}
                    alt={involvement.alt ?? involvement.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={scrollOuterClassName}>
          <div className="involvement-scroll-container" ref={scrollRef}>
            <div className="involvements-grid">
              {items.map((involvement, index) => (
                <InvolvementCard
                  key={involvement.title + index}
                  title={involvement.title}
                  image={involvement.image}
                  alt={involvement.alt ?? involvement.title}
                />
              ))}
            </div>
          </div>
          <StripScrollNav
            className="involvement-scroll-hint"
            onPrev={scrollPrev}
            onNext={scrollNext}
            canScrollLeft={canScrollLeft}
            canScrollRight={canScrollRight}
            showNav={hasOverflow || items.length > 1}
          />
        </div>
      )}
    </section>
  )
}

export default InvolvementsSection
