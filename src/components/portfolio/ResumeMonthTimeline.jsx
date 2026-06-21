import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  formatMonthLabel,
  formatMonthRangeShort,
  getCurrentMonthKey,
  experienceIncludesMonth,
  getExperiencesForMonth,
  getResumeMonthRange,
  layoutTimelineEvents,
  monthIndexFromRatio,
  ratioFromMonthIndex,
} from '../../utils/resumeTimeline'
import '../../styles/resume-month-timeline.css'

function ratioFromClientX(clientX, axisEl) {
  if (!axisEl) return 0
  const rect = axisEl.getBoundingClientRect()
  const style = getComputedStyle(axisEl)
  const padL = parseFloat(style.paddingLeft) || 0
  const padR = parseFloat(style.paddingRight) || 0
  const innerLeft = rect.left + padL
  const innerWidth = rect.width - padL - padR
  if (innerWidth <= 0) return 0
  return Math.max(0, Math.min(1, (clientX - innerLeft) / innerWidth))
}

export default function ResumeMonthTimeline({ experiences = [], intro }) {
  const months = useMemo(() => getResumeMonthRange(), [])
  const { events, laneCount } = useMemo(
    () => layoutTimelineEvents(experiences, months),
    [experiences, months]
  )

  const [selectedMonth, setSelectedMonth] = useState(() => getCurrentMonthKey())
  const [focusedEventId, setFocusedEventId] = useState(null)
  const [dragRatio, setDragRatio] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const axisRef = useRef(null)
  const isDraggingRef = useRef(false)

  useEffect(() => {
    if (!months.includes(selectedMonth)) {
      setSelectedMonth(months[months.length - 1] ?? getCurrentMonthKey())
    }
  }, [months, selectedMonth])

  const selectedIndex = Math.max(0, months.indexOf(selectedMonth))
  const scrubRatio =
    dragRatio != null ? dragRatio : ratioFromMonthIndex(selectedIndex, months.length)

  const monthExperiences = useMemo(
    () => getExperiencesForMonth(selectedMonth, experiences),
    [selectedMonth, experiences]
  )

  const focusedEvent =
    events.find((e) => e.id === focusedEventId) ??
    events.find((e) => monthExperiences.some((m) => m.id === e.id)) ??
    null

  const axisLabels = useMemo(() => {
    const toTick = (i) => ({
      key: months[i],
      label: formatMonthLabel(months[i]),
      ratio: months.length > 1 ? i / (months.length - 1) : 0,
    })
    if (months.length <= 6) return months.map((_, i) => toTick(i))
    const picks = [0, Math.floor(months.length / 2), months.length - 1]
    return [...new Set(picks)].map((i) => toTick(i))
  }, [months])

  const setMonthByIndex = useCallback(
    (index) => {
      const clamped = Math.max(0, Math.min(index, months.length - 1))
      setSelectedMonth(months[clamped])
    },
    [months]
  )

  const applyPointerToAxis = useCallback(
    (clientX) => {
      const ratio = ratioFromClientX(clientX, axisRef.current)
      setDragRatio(ratio)
      setMonthByIndex(monthIndexFromRatio(ratio, months.length))
    },
    [months.length, setMonthByIndex]
  )

  const onAxisPointerDown = (event) => {
    event.preventDefault()
    isDraggingRef.current = true
    setIsDragging(true)
    axisRef.current?.setPointerCapture(event.pointerId)
    applyPointerToAxis(event.clientX)
  }

  const onAxisPointerMove = (event) => {
    if (!isDraggingRef.current) return
    applyPointerToAxis(event.clientX)
  }

  const onAxisPointerUp = (event) => {
    isDraggingRef.current = false
    setIsDragging(false)
    setDragRatio(null)
    if (axisRef.current?.hasPointerCapture(event.pointerId)) {
      axisRef.current.releasePointerCapture(event.pointerId)
    }
  }

  const onThumbKeyDown = (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      event.preventDefault()
      setMonthByIndex(selectedIndex + 1)
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      event.preventDefault()
      setMonthByIndex(selectedIndex - 1)
    } else if (event.key === 'Home') {
      event.preventDefault()
      setMonthByIndex(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      setMonthByIndex(months.length - 1)
    }
  }

  return (
    <section className="resume-month-timeline" aria-label="Experience timeline">
      <h3 className="resume-month-timeline__heading">Experience timeline</h3>
      {intro ? <p className="resume-month-timeline__intro">{intro}</p> : null}

      <div className="resume-month-timeline__chart-wrap">
        <div
          className="resume-month-timeline__plot"
          style={{ '--scrub-ratio': scrubRatio }}
        >
          <div className="resume-month-timeline__scrub-line" aria-hidden="true" />
          <div
            className="resume-month-timeline__lanes"
            style={{ '--lane-count': Math.max(laneCount, 1) }}
          >
            <div className="resume-month-timeline__lanes-inner">
          {events.map((event) => {
            const inMonth = experienceIncludesMonth(event, selectedMonth)
            return (
              <button
                key={event.id ?? `${event.startMonth}-${event.title}`}
                type="button"
                className={[
                  'resume-month-timeline__event',
                  inMonth ? 'is-in-month' : '',
                  focusedEvent?.id === event.id ? 'is-focused' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                style={{
                  '--event-color': event.color,
                  '--lane': event.lane,
                  left: `${event.leftPercent}%`,
                  width: `${event.widthPercent}%`,
                }}
                onClick={() => setFocusedEventId(event.id)}
                aria-pressed={focusedEvent?.id === event.id}
                aria-label={`${event.title}, ${formatMonthRangeShort(event.startMonth, event.endMonth)}`}
              >
                <span className="resume-month-timeline__event-flag" aria-hidden="true">
                  {event.title}
                </span>
                <span className="resume-month-timeline__event-track" aria-hidden="true">
                  <span className="resume-month-timeline__event-bar" />
                  <span className="resume-month-timeline__event-dot resume-month-timeline__event-dot--start" />
                  <span className="resume-month-timeline__event-dot resume-month-timeline__event-dot--end" />
                </span>
              </button>
            )
          })}
            </div>
          </div>

        <div
          ref={axisRef}
          className={`resume-month-timeline__axis${isDragging ? ' is-dragging' : ''}`}
          onPointerDown={onAxisPointerDown}
          onPointerMove={onAxisPointerMove}
          onPointerUp={onAxisPointerUp}
          onPointerCancel={onAxisPointerUp}
        >
          {axisLabels.map((tick) => (
            <span
              key={tick.key}
              className="resume-month-timeline__axis-label"
              style={{ '--tick-ratio': tick.ratio }}
            >
              {tick.label}
            </span>
          ))}
          <span className="resume-month-timeline__axis-line" aria-hidden="true" />
          <button
            type="button"
            className="resume-month-timeline__axis-thumb"
            role="slider"
            aria-label="Drag to select month"
            aria-valuemin={0}
            aria-valuemax={months.length - 1}
            aria-valuenow={selectedIndex}
            aria-valuetext={formatMonthLabel(selectedMonth)}
            onKeyDown={onThumbKeyDown}
            onPointerDown={(event) => {
              event.stopPropagation()
              onAxisPointerDown(event)
            }}
          />
        </div>
        </div>
      </div>

      <div className="resume-month-timeline__month-panel" aria-live="polite">
        <p className="resume-month-timeline__month-panel-label">
          {formatMonthLabel(selectedMonth)}
        </p>

        {monthExperiences.length > 0 ? (
          <ul className="resume-month-timeline__month-list">
            {monthExperiences.map((entry) => (
              <li key={entry.id ?? `${entry.startMonth}-${entry.title}`}>
                <button
                  type="button"
                  className={`resume-month-timeline__month-item${
                    focusedEvent?.id === entry.id ? ' is-focused' : ''
                  }`}
                  onClick={() => setFocusedEventId(entry.id)}
                >
                  <span
                    className="resume-month-timeline__month-item-swatch"
                    style={{ background: entry.color }}
                    aria-hidden="true"
                  />
                  <span className="resume-month-timeline__month-item-text">
                    <span className="resume-month-timeline__month-item-title">{entry.title}</span>
                    {entry.org ? (
                      <span className="resume-month-timeline__month-item-org">{entry.org}</span>
                    ) : null}
                  </span>
                </button>
                {focusedEvent?.id === entry.id && entry.detail ? (
                  <p className="resume-month-timeline__month-item-detail">{entry.detail}</p>
                ) : null}
              </li>
            ))}
          </ul>
        ) : (
          <p className="resume-month-timeline__empty">Nothing logged for this month.</p>
        )}
      </div>
    </section>
  )
}
