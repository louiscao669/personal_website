import React from 'react'
import '../styles/InterestsSection.css'
import Carousel from './ui/carousel'

const defaultItems = [
  {
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/2365485c0050abdd386287efcf0aa8768998f174?width=912',
    link: 'https://google.com/',
    title: 'Hiking',
    description: 'This is pretty cool, right?',
  },
  {
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/17de13a8711d29a39425f4ea7b220c88910cee8e?width=578',
    link: 'https://google.com/',
    title: 'Rowing',
    description: 'This is pretty cool, right?',
  },
  {
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/e881db67cc2243b2f9c381757729571b5ffae4aa?width=452',
    link: 'https://google.com/',
    title: 'Sports',
    description: 'This is pretty cool, right?',
  },
]

const InterestsSection = ({ items = defaultItems, integrated = false }) => {
  const slides = items.map((item) => ({
    title: item.title,
    description: item.description,
    showReadMore: item.showReadMore,
    readMoreHref: item.readMoreHref,
    imageRotation: item.imageRotation,
    src: item.image,
  }))

  return (
    <section className={`interests-section ${integrated ? 'interests-section--integrated' : ''}`.trim()}>
      {!integrated && <h2 className="interests-title">Interests</h2>}
      <div className="interests-gallery">
        <Carousel slides={slides} />
      </div>
    </section>
  )
}

export default InterestsSection
