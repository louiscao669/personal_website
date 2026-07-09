import React, { useEffect, useState } from 'react'
import { site } from '../data/siteContent'
import ResumeMonthTimeline from './portfolio/ResumeMonthTimeline'
import '../styles/HeroSection.css'

const getDriveFileId = (url) => {
  const driveMatch = url.match(/\/file\/d\/([^/]+)/)
  if (driveMatch?.[1]) return driveMatch[1]

  const idMatch = url.match(/[?&]id=([^&]+)/)
  return idMatch?.[1]
}

const getPreviewUrl = (url) => {
  const fileId = getDriveFileId(url)
  if (fileId) return `https://drive.google.com/file/d/${fileId}/preview`

  return url
}

const getDownloadUrl = (url) => {
  const fileId = getDriveFileId(url)
  if (fileId) return `https://drive.google.com/uc?export=download&id=${fileId}`

  return url
}

const HeroSection = () => {
  const [isCvPreviewOpen, setIsCvPreviewOpen] = useState(false)
  const [previewMode, setPreviewMode] = useState('cv')
  const cvPreviewUrl = getPreviewUrl(site.cta.cvHref)
  const cvDownloadUrl = site.cta.cvDownloadHref || getDownloadUrl(site.cta.cvHref)

  useEffect(() => {
    if (!isCvPreviewOpen) return undefined

    document.body.classList.add('cv-preview-is-open')

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsCvPreviewOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('cv-preview-is-open')
    }
  }, [isCvPreviewOpen])

  return (
    <section className="hero-section">
      <div className="hero-intro">
        <div className="hero-portrait-card" aria-label="Portrait of Louis Cao">
          <img
            className="hero-portrait-image"
            // src="https://api.builder.io/api/v1/image/assets/TEMP/f18eab9760c5d1128b13142b7e30cabe1a6996a7?width=3456"
            src="https://cdn.builder.io/api/v1/image/assets%2F049e22941f084988b8dad46dae79b4c5%2F8eaf3333bbe84b68a3aa68faad9456c7"
            alt="Louis Cao"
          />
        </div>

        <div className="hero-copy">
          <p className="hero-eyebrow">Welcome</p>
          <h2>Hi, I&apos;m Louis Cao.</h2>
          <p>
            I&apos;m a Computer Science and Mathematics student at Notre Dame building research
            tools, LLM workflows, and product-minded software that turns rough ideas into usable
            systems.
          </p>
          <div className="hero-actions" aria-label="Featured links">
            <button type="button" onClick={() => setIsCvPreviewOpen(true)}>
              Resume
            </button>
            <a href="#/projects">Projects</a>
          </div>
        </div>
      </div>

      {isCvPreviewOpen ? (
        <div
          className="cv-preview-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Resume preview"
          onClick={() => setIsCvPreviewOpen(false)}
        >
          <div className="cv-preview-modal" onClick={(event) => event.stopPropagation()}>
            <div className="cv-preview-header">
              <div>
                <h3>{previewMode === 'cv' ? 'Resume Preview' : 'Experience Timeline'}</h3>
              </div>
              <div className="cv-preview-header-actions">
                <div className="cv-preview-mode-toggle" aria-label="Preview mode">
                  <button
                    type="button"
                    className={previewMode === 'cv' ? 'is-active' : ''}
                    onClick={() => setPreviewMode('cv')}
                  >
                    View Resume
                  </button>
                  <button
                    type="button"
                    className={previewMode === 'timeline' ? 'is-active' : ''}
                    onClick={() => setPreviewMode('timeline')}
                  >
                    View Timeline
                  </button>
                </div>
                <button type="button" onClick={() => setIsCvPreviewOpen(false)}>
                  Close
                </button>
              </div>
            </div>
            {previewMode === 'cv' ? (
              <iframe
                className="cv-preview-frame"
                src={cvPreviewUrl}
                title="Louis Cao Resume preview"
              />
            ) : (
              <div className="cv-preview-timeline">
                <ResumeMonthTimeline
                  experiences={site.resume.monthlyExperiences}
                  intro={site.resume.monthlyTimelineIntro}
                />
              </div>
            )}
            <div className="cv-preview-actions">
              <a href={cvDownloadUrl} target="_blank" rel="noreferrer" download="Louis-Cao-CV.pdf">
                Download CV
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default HeroSection
