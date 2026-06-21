import React from 'react'
import '../styles/InvolvementCard.css'

/** Longer strip titles (e.g. `Role — Org`) need a smaller headline to stay inside the card. */
function involvementTitleLengthClass(title) {
  const n = title.length
  if (n > 48) return ' involvement-title--tier-3'
  if (n > 34) return ' involvement-title--tier-2'
  if (n > 22) return ' involvement-title--tier-1'
  return ''
}

const InvolvementCard = ({ title, image, alt }) => {
  const tierClass = involvementTitleLengthClass(title)

  return (
    <div className="involvement-card" data-strip-card>
      <div className="involvement-card-background" aria-hidden>
        <svg
          width="411"
          height="690"
          viewBox="0 0 411 690"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <g filter="url(#filter0_d_involvement)">
            <path d="M4 0H407V682H4V0Z" fill="#D9D9D9" />
          </g>
          <defs>
            <filter id="filter0_d_involvement" x="0" y="0" width="411" height="690" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_involvement"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_involvement" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
      <div className="involvement-card-visual">
        <img className="involvement-image" src={image} alt={alt} />
      </div>
      <h3 className={`involvement-title${tierClass}`.trim()}>{title}</h3>
    </div>
  )
}

export default InvolvementCard
