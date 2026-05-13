import React, { useState } from 'react'
import { site, involvementStripItems } from '../../data/siteContent'
import SiteNav from './SiteNav'
import StatsStrip from './StatsStrip'
import ProjectModal from './ProjectModal'
import HeroSection from '../HeroSection'
import AboutSection from '../AboutSection'
import ExperienceTabs from '../ExperienceTabs'
import InterestsSection from '../InterestsSection'
import '../../styles/portfolio-site.css'
import '../../styles/portfolio-unified.css'

export default function PortfolioPage() {
  const [modalProject, setModalProject] = useState(null)

  return (
    <div className="portfolio">
      <div id="home" className="portfolio-home-anchor">
        <header className="portfolio-header">
          <h1>{site.name}</h1>
          <p className="tagline">{site.headline}</p>
        </header>
        <div className="portfolio-hero-slot">
          <HeroSection />
        </div>
        <p className="portfolio-hero-lead">{site.heroLead}</p>
      </div>

      <SiteNav />

      <main>
        <div className="portfolio-main">
          <section className="portfolio-section" id="about">
            <p className="portfolio-kicker">About</p>
            <h2 className="portfolio-h2">{site.about.title}</h2>
            {site.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="profile-card">
              <p>{site.about.profile.blurb}</p>
              <ul className="profile-list">
                {site.about.profile.bullets.map((b) => (
                  <li key={b.label}>
                    <strong>{b.label}</strong>
                    {b.href ? (
                      <a href={b.href}>{b.value}</a>
                    ) : (
                      <span>{b.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <p>{site.skillsIntro}</p>
            {site.skills.map((s) => (
              <div className="skill" key={s.name}>
                <div className="skill-top">
                  <span>{s.name}</span>
                  <span>{s.percent}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${s.percent}%` }} />
                </div>
              </div>
            ))}

            <div className="cta-row">
              <a className="btn btn-primary" href={site.cta.hireHref}>
                {site.cta.hireLabel}
              </a>
              <a className="btn btn-outline" href={site.cta.cvHref}>
                {site.cta.cvLabel}
              </a>
            </div>

            <div className="portfolio-about-visual">
              <AboutSection cards={site.about.flipCards} asideText={site.about.cardAside} />
            </div>
          </section>

          <section className="portfolio-section" id="resume">
            <p className="portfolio-kicker">Resume</p>
            <h2 className="portfolio-h2">{site.resume.title}</h2>

            <div className="timeline">
              <h3>Work experience</h3>
              {site.resume.work.map((job) => (
                <article className="timeline-item" key={`${job.org}-${job.dates}`}>
                  <h4>{job.role}</h4>
                  <div className="meta">
                    {job.dates} · <span className="org">{job.org}</span>
                  </div>
                  <p>{job.detail}</p>
                </article>
              ))}

              <h3>Education</h3>
              {site.resume.education.map((ed) => (
                <article className="timeline-item" key={`${ed.school}-${ed.dates}`}>
                  <h4>{ed.degree}</h4>
                  <div className="meta">
                    {ed.dates} · <span className="org">{ed.school}</span>
                  </div>
                  <p>{ed.detail}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="portfolio-section portfolio-section--work" id="work">
            <p className="portfolio-kicker">{site.work.kicker}</p>
            <h2 className="portfolio-h2">{site.work.title}</h2>
            <p className="portfolio-work-intro">{site.work.intro}</p>
            <ExperienceTabs
              projectItems={site.projects.items}
              involvementItems={involvementStripItems(site.activities)}
              onSelectProject={setModalProject}
            />
          </section>

          <section className="portfolio-section" id="interests">
            <p className="portfolio-kicker">Interests</p>
            <h2 className="portfolio-h2">{site.interests.title}</h2>
            <p>{site.interests.intro}</p>
            <InterestsSection items={site.interests.items} integrated />
          </section>
        </div>

        <StatsStrip stats={site.stats} />

        <div className="portfolio-main">
          <section className="portfolio-section" id="contact">
            <p className="portfolio-kicker">Contact</p>
            <h2 className="portfolio-h2">{site.contact.title}</h2>
            <p>{site.contact.intro}</p>
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
          </section>
        </div>
      </main>

      <footer className="portfolio-footer">
        © {new Date().getFullYear()} {site.name}. Built with React & Vite.
      </footer>

      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </div>
  )
}
