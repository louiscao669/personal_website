import React, { useEffect, useState } from 'react'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'work', label: 'Work' },
  { id: 'interests', label: 'Interests' },
  { id: 'contact', label: 'Contact' },
]

export default function SiteNav() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120
      let current = 'home'
      for (const item of NAV) {
        const el = document.getElementById(item.id)
        if (el) {
          const top = el.offsetTop
          if (y >= top) current = item.id
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="portfolio-nav-wrap">
      <nav className="portfolio-nav" aria-label="Primary">
        {NAV.map((item) => (
          <button
            key={item.id}
            type="button"
            className={item.id === active ? 'is-active' : ''}
            onClick={() => go(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
