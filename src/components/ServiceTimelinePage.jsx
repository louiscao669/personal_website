import React, { useEffect, useRef } from 'react'
import { site } from '../data/siteContent'
import { Timeline } from './ui/timeline'

const serviceItem = site.interests.items.find((item) => item.title === 'Service')
const lasCasaImage = {
  title: 'Las Casa',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2F049e22941f084988b8dad46dae79b4c5%2F48a7329acc124c0dbc2c2fa93f2f6d55',
}
const stFrancisInnImage = {
  title: 'St Francis Inn',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2F049e22941f084988b8dad46dae79b4c5%2F227c671d57674fc5b235e70dd80cb607',
}

const imageGrid = (items) => (
  <div className="story-timeline__image-grid">
    {items.map((item) => (
      <img key={item.title} src={item.image} alt={item.title} />
    ))}
  </div>
)

export default function ServiceTimelinePage() {
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        window.location.hash = '/interests'
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const closeTimeline = () => {
    window.location.hash = '/interests'
  }

  const data = [
    {
      title: 'Sep 2024 - Dec 2024 - Holy Cross House',
      content: (
        <div>
          <p>
            I served weekly in Holy Cross House, a community of priests and brothers that needed
            medical care or assistance, through Mercy Works - a Notre Dame initiative. There, my
            job was to talk with Fr. Tom once a week to provide companionship. He is a humble and
            kind priest that once served people in prison and worked in the Native American
            community. I developed a good relationship with him and got to know him really well.
          </p>
        </div>
      ),
    },
    {
      title: 'Sep 2024 - Apr 2025 - Las Casa',
      content: (
        <div>
          <p>
            I served weekly in Las Casa, a local after-school program institute. I quickly became
            good friends with the kids, especially the middle-schoolers. I tutored them with their
            schoolwork and helped in their semester-long art project that contributed to a mural that 
            honors local Latino baseball stars at the historic Latin American baseball leaugue venue. 
            The project was featured in several local news articles:   
            <br />
            <a href="https://www.wndu.com/2025/05/07/new-mural-graces-foundry-field/" target="_blank" rel="noopener noreferrer">https://www.wndu.com/2025/05/07/new-mural-graces-foundry-field/</a>
            <br />
            <a href="https://publicaffairs.nd.edu/news/full-circle-at-foundry-field/" target="_blank" rel="noopener noreferrer">https://publicaffairs.nd.edu/news/full-circle-at-foundry-field/</a>
          </p>
          {imageGrid([lasCasaImage])}
        </div>
      ),
    },
    {
      title: 'June 2025 - July 2025 - St Francis Inn',
      content: (
        <div>
          <p>
            I spent 2 months immersed in St Francis Inn, a soup kitchen on Kensington Ave,
            Philadelphia. Here is an article I wrote for the experience:
          </p>
          <p>
            "No other person can replace you. This place will never be the same without you." Jeff,
            a guest that I got to know, said this before I left the Inn in a way that you would
            think he motivates people professionally. Throughout the two months, I was always
            reminded of how appreciated my presence at the Inn was by the staff members and by the
            guests. The Inn became my second home, the same way the guests are welcomed and find the
            Inn a safe space within the Kensington area.
          </p>
          <p>
            Children are a symbol of hope, well, especially if they are adorable. Richy is a kid
            that I became friends with during my service. His carefree presence is a somewhat
            comical opposition to the inevitable tensions between the guests. He likes to go to any
            guest, smile shyly and ask silly questions. The guests love his innocence and would
            smile back even if he threw a football right into them. Children are much needed at the
            Inn not only for guests but also for the staff. The work at the Inn can be stressful
            because progress is hardly visible. As staff, you witness generational poverty,
            worsening drug conditions, and lifelong homelessness. However, I always see hopefulness
            with clarity among the staff members, and joy seems to grow the longer one stays at the
            Inn. During one of the daily masses, I realized their hope comes from their simple faith
            in God's love and the realization that they are not serving the poor but are among the
            poor, serving God. The staff members possess a kind of humility that reminds me only of
            children, a true embodiment of the Franciscan spirit. From then on, I was able to see a
            child in every staff member.
          </p>
          <p>
            The two-month service at the Inn has been the most meaningful experience in my life and
            made me a changed person in many ways. Guests and staff generously accepted my love and
            more generously loved me. I now understand what the long-term volunteers have been
            telling me from the beginning that the Inn is a magnet - you will always find yourself
            back at the Inn after having spent time here. The Inn has become my home. No other place
            can replace its position in my heart.
          </p>
          {imageGrid([stFrancisInnImage])}
        </div>
      ),
    },
  ]

  return (
    <div
      className="service-timeline-page"
      role="dialog"
      aria-modal="true"
      aria-label="Service timeline"
      onClick={closeTimeline}
    >
      <main className="service-timeline-window" onClick={(event) => event.stopPropagation()}>
        <header className="service-timeline-window__header">
          <div>
            <p>Interest detail</p>
            <h1>Service Timeline</h1>
          </div>
          <button type="button" onClick={closeTimeline}>
            Close
          </button>
        </header>
        <div className="service-timeline-window__body" ref={scrollContainerRef}>
          <Timeline
            title="Service"
            data={data}
            scrollContainerRef={scrollContainerRef}
          />
        </div>
      </main>
    </div>
  )
}
