import React, { useEffect, useState } from 'react'
import { site } from '../../data/siteContent'
import SiteNav, { NAV_ITEMS } from './SiteNav'
import StatsStrip from './StatsStrip'
import ProjectModal from './ProjectModal'
import HeroSection from '../HeroSection'
import InterestsSection from '../InterestsSection'
import ProjectsSection from '../ProjectsSection'
import ServiceTimelinePage from '../ServiceTimelinePage'
import '../../styles/portfolio-site.css'
import '../../styles/portfolio-unified.css'

const PATH_ALIASES = {
  '/home': '/',
  '/work': '/projects',
  '/about': '/contact',
  '/resume': '/contact',
}

const normalisePath = (path) => {
  const cleanPath = path || '/'
  const withoutTrailingSlash = cleanPath.length > 1 ? cleanPath.replace(/\/+$/, '') : cleanPath
  return PATH_ALIASES[withoutTrailingSlash] || withoutTrailingSlash
}

const getPathFromLocation = () => {
  const hashPath = window.location.hash.replace(/^#/, '')
  if (!hashPath) return '/'
  return normalisePath(hashPath.startsWith('/') ? hashPath : `/${hashPath}`)
}

const getNavItemByPath = (path) => {
  const normalisedPath = normalisePath(path)
  if (normalisedPath === '/service') {
    return { id: 'service', label: 'Service', path: '/service' }
  }

  return NAV_ITEMS.find((item) => item.path === normalisedPath) || NAV_ITEMS[0]
}

function HomePageContent() {
  return (
    <>
      <div id="home" className="portfolio-home-anchor">
        <div className="portfolio-hero-slot">
          <HeroSection />
        </div>
        {site.heroLead ? <p className="portfolio-hero-lead">{site.heroLead}</p> : null}
      </div>
      <StatsStrip stats={site.stats} />
    </>
  )
}

function AboutContactIntro() {
  return (
    <section className="portfolio-section about-contact-intro" id="about">
      <p className="portfolio-kicker">About</p>
      {site.about.title ? <h2 className="portfolio-h2">{site.about.title}</h2> : null}
      {site.about.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      <div className="profile-card">
        {site.about.profile.blurb ? <p>{site.about.profile.blurb}</p> : null}
        <ul className="profile-list">
          {site.about.profile.bullets.map((b) => (
            <li key={b.label}>
              <strong>{b.label}</strong>
              {b.href ? <a href={b.href}>{b.value}</a> : <span>{b.value}</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className="cta-row">
        <a className="btn btn-primary" href={site.cta.hireHref}>
          {site.cta.hireLabel}
        </a>
      </div>
    </section>
  )
}

function ProjectsPage({ onSelectProject }) {
  return (
    <main>
      <div className="portfolio-main">
        <section className="portfolio-section portfolio-section--work" id="work">
          <h2 className="portfolio-h2">{site.work.title}</h2>
          <ProjectsSection
            items={site.projects.items}
            hideTitle
            integrated
            onSelectProject={onSelectProject}
          />
        </section>
      </div>
    </main>
  )
}

function InterestsPage() {
  return (
    <main className="portfolio-interests-page">
      <section className="portfolio-section portfolio-section--interests-full" id="interests">
        <InterestsSection items={site.interests.items} integrated />
      </section>
    </main>
  )
}

function ServicePage() {
  return (
    <>
      <InterestsPage />
      <ServiceTimelinePage />
    </>
  )
}

function ContactPage() {
  const handleContactSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.toString().trim() || 'Website visitor'
    const subject =
      formData.get('subject')?.toString().trim() || `Portfolio inquiry from ${name}`
    const message = formData.get('message')?.toString().trim() || ''
    const body = [message, '', name].join('\n')

    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <main>
      <div className="portfolio-main">
        <section className="portfolio-section contact-section" id="contact">
          <div className="contact-layout">
            <div className="contact-copy">
              <p className="portfolio-kicker">Contact</p>
              {site.contact.title ? <h2 className="portfolio-h2">{site.contact.title}</h2> : null}
              {site.contact.intro ? <p>{site.contact.intro}</p> : null}

              <div className="contact-grid">
                <div className="contact-block">
                  <h3>Where to find me</h3>
                  <p>{site.contact.location}</p>
                </div>
                <div className="contact-block">
                  <h3>Email</h3>
                  <p>
                    <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                  </p>
                </div>
                <div className="contact-block">
                  <h3>Let&apos;s connect</h3>
                  <div className="contact-links">
                    {site.contact.social.map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="contact-form__row">
                <label htmlFor="contact-name">Name</label>
                <input id="contact-name" name="name" type="text" autoComplete="name" required />
              </div>
              <div className="contact-form__row">
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="contact-form__row">
                <label htmlFor="contact-subject">Subject</label>
                <input id="contact-subject" name="subject" type="text" />
              </div>
              <div className="contact-form__row">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" rows="6" required />
              </div>
              <button className="btn btn-primary contact-form__submit" type="submit">
                Contact Me
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}

export default function PortfolioPage() {
  const [modalProject, setModalProject] = useState(null)
  const [currentPath, setCurrentPath] = useState(getPathFromLocation)

  const currentNavItem = getNavItemByPath(currentPath)

  useEffect(() => {
    const syncRoute = () => {
      setCurrentPath(getPathFromLocation())
    }

    window.addEventListener('hashchange', syncRoute)
    return () => window.removeEventListener('hashchange', syncRoute)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [currentNavItem.id])

  const navigate = (path) => {
    const nextPath = normalisePath(path)
    if (nextPath === currentPath) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      return
    }

    window.location.hash = nextPath
  }

  const renderPage = () => {
    switch (currentNavItem.id) {
      case 'work':
        return <ProjectsPage onSelectProject={setModalProject} />
      case 'interests':
        return <InterestsPage />
      case 'service':
        return <ServicePage />
      case 'contact':
        return <ContactPage />
      case 'home':
      default:
        return <HomePageContent />
    }
  }

  return (
    <div className={`portfolio portfolio-page--${currentNavItem.id}`}>
      <SiteNav activePage={currentNavItem.id} onNavigate={navigate} />

      {renderPage()}

      <footer className="portfolio-footer">
        © {new Date().getFullYear()} {site.name}
      </footer>

      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </div>
  )
}
