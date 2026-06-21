import React, { useEffect, useRef, useState } from 'react'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'work', label: 'Projects' },
  { id: 'interests', label: 'Interests' },
  { id: 'contact', label: 'Contact' },
]

const SCROLL_DELTA = 6

export default function SiteNav() {
  const [active, setActive] = useState('home')
  const [scrollHidden, setScrollHidden] = useState(false)
  const [navHeight, setNavHeight] = useState(0)
  const navRef = useRef(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const measureNav = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight)
    }
    measureNav()
    window.addEventListener('resize', measureNav)
    return () => window.removeEventListener('resize', measureNav)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY

      if (y < 16) {
        setScrollHidden(false)
      } else if (y - lastScrollY.current > SCROLL_DELTA) {
        setScrollHidden(true)
      } else if (lastScrollY.current - y > SCROLL_DELTA) {
        setScrollHidden(false)
      }

      lastScrollY.current = y

      const sectionProbe = y + navHeight + 80
      let current = 'home'
      for (const item of NAV) {
        const el = document.getElementById(item.id)
        if (el) {
          const top = el.offsetTop
          if (sectionProbe >= top) current = item.id
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [navHeight])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="portfolio-nav-sticky-root">
      <div className="portfolio-nav-spacer" style={{ height: navHeight }} aria-hidden="true" />
      <div
        ref={navRef}
        className={`portfolio-nav-wrap is-fixed${scrollHidden ? ' is-scroll-hidden' : ''}`}
      >
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
    </div>
  )
}
