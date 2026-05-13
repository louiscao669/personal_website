import React from 'react'
import '../styles/AboutSection.css'
import CardSwap, { Card } from '../blocks/Components/CardSwap/CardSwap'

const defaultCards = [
  { title: 'Card 1', text: 'Your content here' },
  { title: 'Card 2', text: 'Your content here' },
  { title: 'Card 3', text: 'Your content here' },
]

const AboutSection = ({ cards = defaultCards, asideText = '' }) => {
  return (
    <div>
      <section className="about-section">
        <div className="card-section">
          <div className="about-card-swap-host">
            <CardSwap
              fillContainer
              delay={5000}
              pauseOnHover={false}
            >
              {cards.map((c) => (
                <Card key={c.title} className="custom-card">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSection
