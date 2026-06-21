import React, { useState } from 'react'
import { site, involvementStripItems } from '../../data/siteContent'
import SiteNav from './SiteNav'
import ResumeMonthTimeline from './ResumeMonthTimeline'
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
      <SiteNav />

      <div id="home" className="portfolio-home-anchor">
        <header className="portfolio-header">
          <h1>{site.name}</h1>
          <p className="tagline">{site.headline}</p>
        </header>
        <div className="portfolio-hero-slot">
          <HeroSection />
        </div>
        {site.heroLead ? <p className="portfolio-hero-lead">{site.heroLead}</p> : null}
      </div>

      <main>
        <div className="portfolio-main">
          <section className="portfolio-section" id="about">
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
                    {b.href ? (
                      <a href={b.href}>{b.value}</a>
                    ) : (
                      <span>{b.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="cta-row">
              <a className="btn btn-primary" href={site.cta.hireHref}>
                {site.cta.hireLabel}
              </a>
              <a className="btn btn-outline" href={site.cta.cvHref}>
                {site.cta.cvLabel}
              </a>
            </div>

          </section>

          <section className="portfolio-section" id="resume">
            <p className="portfolio-kicker">Resume</p>
            <h2 className="portfolio-h2">{site.resume.title}</h2>

            <div className="timeline">
      

              <h3>Education</h3>
              {site.resume.education.map((ed) => (
                <article className="timeline-item" key={`${ed.school}-${ed.dates}`}>
                  <h4>{ed.degree}</h4>
                  <div className="meta">
                    {ed.dates} · <span className="org">{ed.school}</span>
                  </div>
                  {ed.major ? <p className="timeline-item__line">Majors: {ed.major}</p> : null}
                  {ed.concentration ? (
                    <p className="timeline-item__line">Concentration: {ed.concentration}</p>
                  ) : null}
                  {ed.honors ? <p className="timeline-item__line">Honors: {ed.honors}</p> : null}
                  {ed.detail ? <p>{ed.detail}</p> : null}
                </article>
              ))}

              <h3>Experience</h3>
              {site.resume.work.map((job) => (
                <article className="timeline-item" key={`${job.org}-${job.dates}`}>
                  <h4>{job.role}</h4>
                  <div className="meta">
                    {job.dates} · <span className="org">{job.org}</span>
                  </div>
                  <p>{job.detail}</p>
                </article>
              ))}

              <h3>Projects</h3>
              {site.resume.projects.map((item) => (
                <article className="timeline-item" key={`${item.org}-${item.dates}`}>
                  <h4>{item.role}</h4>
                  <div className="meta">
                    {item.dates} · <span className="org">{item.org}</span>
                  </div>
                  <p>{item.detail}</p>
                </article>
              ))}

              <h3>Leadership &amp; Activities</h3>
              {site.resume.leadership.map((item) => (
                <article className="timeline-item" key={`${item.org}-${item.dates}`}>
                  <h4>{item.role}</h4>
                  <div className="meta">
                    {item.dates} · <span className="org">{item.org}</span>
                  </div>
                  <p>{item.detail}</p>
                </article>
              ))}

              <h3>Skills</h3>
              <div className="resume-skills">
                {site.resume.skills.map((group) => (
                  <div className="resume-skills__group" key={group.category}>
                    <h4 className="resume-skills__category">{group.category}</h4>
                    <p className="resume-skills__items">{group.items.join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>

            <ResumeMonthTimeline
              experiences={site.resume.monthlyExperiences}
              intro={site.resume.monthlyTimelineIntro}
            />

            {/* <div className="portfolio-about-visual">
              <AboutSection cards={site.about.flipCards} asideText={site.about.cardAside} />
            </div> */}
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
          </section>
        </div>
      </main>

      <footer className="portfolio-footer">
        © {new Date().getFullYear()} {site.name}
      </footer>

      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </div>
  )
}
