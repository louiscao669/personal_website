import React from 'react'
import InvolvementCard from './InvolvementCard'
import '../styles/InvolvementsSection.css'

const InvolvementsSection = ({ items = [], hideTitle = false, integrated = false }) => {
  return (
    <section
      className={`involvements-section ${
        integrated ? 'involvements-section--integrated' : ''
      }`.trim()}
    >
      {!hideTitle && <h2 className="involvements-section-title">INVOLVEMENTS</h2>}
      <div className="involvement-scroll-container">
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
      <div className="involvement-scroll-hint">
        <img
          src="https://www.svgrepo.com/show/509896/double-right-chevron.svg"
          alt=""
          className="involvement-scroll-arrow"
        />
      </div>
    </section>
  )
}

export default InvolvementsSection
