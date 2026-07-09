import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import './timeline.css'

export function Timeline({ data = [], eyebrow, title, intro, scrollContainerRef }) {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (!ref.current) return

    const measure = () => {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className="story-timeline" ref={containerRef}>
      <div className="story-timeline__intro">
        {eyebrow ? <p className="story-timeline__eyebrow">{eyebrow}</p> : null}
        {title ? <h1>{title}</h1> : null}
        {intro ? <p>{intro}</p> : null}
      </div>

      <div ref={ref} className="story-timeline__entries">
        {data.map((item, index) => (
          <article className="story-timeline__entry" key={`${item.title}-${index}`}>
            <div className="story-timeline__marker-wrap">
              <div className="story-timeline__marker">
                <span />
              </div>
              <h2>{item.title}</h2>
            </div>

            <div className="story-timeline__content">{item.content}</div>
          </article>
        ))}

        <div className="story-timeline__line" style={{ height }}>
          <motion.div
            className="story-timeline__line-progress"
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
          />
        </div>
      </div>
    </div>
  )
}
