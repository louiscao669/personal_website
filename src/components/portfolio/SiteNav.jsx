import React, { useEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import PillNav from './PillNav'
import logo from '../../assets/louis-cao-logo.svg'

export const NAV_ITEMS = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'work', label: 'Projects', path: '/projects' },
  { id: 'interests', label: 'Interests', path: '/interests' },
  { id: 'contact', label: 'Contact', path: '/contact' },
]

const SCROLL_DELTA = 6

export const getRouteHref = (path) => `#${path}`

export default function SiteNav({ activePage }) {
  const [scrollHidden, setScrollHidden] = useState(false)
  const [hoverReveal, setHoverReveal] = useState(false)
  const [navHeight, setNavHeight] = useState(0)
  const navRef = useRef(null)
  const lastScrollY = useRef(0)
  const prefersReducedMotion = useRef(false)
  const activeItem = NAV_ITEMS.find((item) => item.id === activePage) || NAV_ITEMS[0]
  const items = useMemo(
    () => NAV_ITEMS.map((item) => ({ label: item.label, href: getRouteHref(item.path) })),
    [],
  )

  useEffect(() => {
    const measureNav = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight)
    }
    measureNav()
    window.addEventListener('resize', measureNav)
    return () => window.removeEventListener('resize', measureNav)
  }, [])

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
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
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!navRef.current) return

    gsap.to(navRef.current, {
      yPercent: scrollHidden && !hoverReveal ? -115 : 0,
      duration: prefersReducedMotion.current ? 0 : 0.35,
      ease: 'power3.out',
      overwrite: true,
    })
  }, [scrollHidden, hoverReveal])

  const collapseSpacer = activePage === 'home'

  return (
    <div
      className={`portfolio-nav-sticky-root${collapseSpacer ? ' has-collapsed-spacer' : ''}${
        activePage === 'interests' ? ' is-interests' : ''
      }`}
    >
      <div className="portfolio-nav-spacer" style={{ height: navHeight }} aria-hidden="true" />
      <div
        className="portfolio-nav-hover-zone"
        aria-hidden="true"
        onMouseEnter={() => setHoverReveal(true)}
      />
      <div
        ref={navRef}
        className={`portfolio-nav-wrap is-fixed${scrollHidden ? ' is-scroll-hidden' : ''}${
          hoverReveal ? ' is-hover-revealed' : ''
        }`}
        onMouseEnter={() => setHoverReveal(true)}
        onMouseLeave={() => setHoverReveal(false)}
      >
        <PillNav
          logo={logo}
          logoAlt="Louis Cao"
          items={items}
          activeHref={getRouteHref(activeItem.path)}
          ease="power3.easeOut"
          baseColor="#151515"
          pillColor="#f4f4f2"
          hoveredPillTextColor="#f4f4f2"
          pillTextColor="#151515"
          initialLoadAnimation
        />
      </div>
    </div>
  )
}
