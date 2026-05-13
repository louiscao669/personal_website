import React from 'react'
import '../styles/HeroSection.css'
import SplitText from '../blocks/TextAnimations/SplitText/SplitText'

const HeroSection = () => {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <div className="hero-image-wrapper">
          <img 
            className="hero-background-image"
            src="https://api.builder.io/api/v1/image/assets/TEMP/f18eab9760c5d1128b13142b7e30cabe1a6996a7?width=3456"
            alt="Hero background"
          />
        </div>
        <div className="hero-overlay"></div>
      </div>
      <h1 className="hero-title">
        <SplitText
          text="WELCOME"
          className="text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </h1>
    </section>
  )
}

export default HeroSection
