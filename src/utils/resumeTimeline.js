/** Month keys are `YYYY-MM`. Timeline runs Aug 2024 through the current month. */

const TIMELINE_START = { year: 2024, month: 8 }

export const TIMELINE_EVENT_COLORS = [
  '#e07a3a',
  '#c93d4a',
  '#7b4bb8',
  '#2a9d8f',
  '#3d6fb4',
  '#d4a017',
]

export function formatMonthLabel(monthKey) {
  const [y, m] = monthKey.split('-').map(Number)
  const date = new Date(y, m - 1, 1)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

function isPresentEnd(endMonth) {
  return typeof endMonth === 'string' && endMonth.toLowerCase() === 'present'
}

export function formatMonthRangeShort(startMonth, endMonth) {
  const fmt = (key) => {
    const [y, m] = key.split('-').map(Number)
    return new Date(y, m - 1, 1).toLocaleDateString('en-US', {
      month: 'short',
      year: '2-digit',
    })
  }
  if (isPresentEnd(endMonth)) return `${fmt(startMonth)} – Present`
  const end = endMonth ?? startMonth
  if (startMonth === end) return fmt(startMonth)
  return `${fmt(startMonth)} – ${fmt(end)}`
}

export function getResumeMonthRange(endDate = new Date()) {
  const months = []
  let year = TIMELINE_START.year
  let month = TIMELINE_START.month
  const endYear = endDate.getFullYear()
  const endMonth = endDate.getMonth() + 1

  while (year < endYear || (year === endYear && month <= endMonth)) {
    months.push(`${year}-${String(month).padStart(2, '0')}`)
    month += 1
    if (month > 12) {
      month = 1
      year += 1
    }
  }

  return months
}

export function getCurrentMonthKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
}

export function monthToIndex(monthKey) {
  const [y, m] = monthKey.split('-').map(Number)
  return y * 12 + m
}

/** True when `monthKey` falls within [startMonth, endMonth] (inclusive). */
export function experienceIncludesMonth(entry, monthKey) {
  const start = entry.startMonth
  const end = isPresentEnd(entry.endMonth) ? getCurrentMonthKey() : entry.endMonth ?? entry.startMonth
  const probe = monthToIndex(monthKey)
  return probe >= monthToIndex(start) && probe <= monthToIndex(end)
}

export function getExperiencesForMonth(monthKey, experiences = []) {
  return experiences.filter((entry) => experienceIncludesMonth(entry, monthKey))
}

export function monthIndexFromRatio(ratio, monthCount) {
  if (monthCount < 1) return 0
  const clamped = Math.max(0, Math.min(1, ratio))
  return Math.round(clamped * Math.max(0, monthCount - 1))
}

export function ratioFromMonthIndex(index, monthCount) {
  if (monthCount <= 1) return 0
  const clamped = Math.max(0, Math.min(index, monthCount - 1))
  return clamped / (monthCount - 1)
}

function resolveMonthIndex(monthKey, months) {
  const idx = months.indexOf(monthKey)
  return idx >= 0 ? idx : -1
}

function intervalsOverlap(a, b) {
  return !(a.endIdx < b.startIdx || b.endIdx < a.startIdx)
}

/**
 * Place events on stacked lanes when date ranges overlap.
 * Returns positioned events + lane count for layout height.
 */
export function layoutTimelineEvents(experiences = [], months = []) {
  if (!months.length) return { events: [], laneCount: 0 }

  const monthCount = months.length
  const span = Math.max(1, monthCount - 1)

  const normalized = experiences
    .map((entry, i) => {
      const endKey = isPresentEnd(entry.endMonth)
        ? months[monthCount - 1]
        : entry.endMonth ?? entry.startMonth
      const visibleStart = monthToIndex(months[0])
      const visibleEnd = monthToIndex(months[monthCount - 1])
      const entryStart = monthToIndex(entry.startMonth)
      const entryEnd = monthToIndex(endKey)
      if (entryEnd < visibleStart || entryStart > visibleEnd) return null

      const startIdx = Math.max(0, resolveMonthIndex(entry.startMonth, months))
      const endIdx = resolveMonthIndex(endKey, months)
      const safeEnd =
        endIdx < 0 ? monthCount - 1 : Math.max(startIdx, Math.min(endIdx, monthCount - 1))
      const color =
        entry.color ?? TIMELINE_EVENT_COLORS[i % TIMELINE_EVENT_COLORS.length]

      const monthStepPercent = 100 / span
      let leftPercent
      let widthPercent

      if (safeEnd === startIdx) {
        widthPercent = monthStepPercent
        const tick = (startIdx / span) * 100
        leftPercent = Math.max(0, Math.min(tick - widthPercent / 2, 100 - widthPercent))
      } else {
        leftPercent = (startIdx / span) * 100
        widthPercent = ((safeEnd - startIdx) / span) * 100
      }

      widthPercent = Math.min(widthPercent, 100 - leftPercent)

      return {
        ...entry,
        color,
        startIdx,
        endIdx: safeEnd,
        leftPercent,
        widthPercent,
      }
    })
    .filter(Boolean)

  normalized.sort(
    (a, b) =>
      a.startIdx - b.startIdx ||
      b.endIdx - b.startIdx - (a.endIdx - a.startIdx) ||
      a.title.localeCompare(b.title)
  )

  const lanes = []

  for (const event of normalized) {
    let placed = false
    for (let lane = 0; lane < lanes.length; lane += 1) {
      const hasConflict = lanes[lane].some((other) => intervalsOverlap(event, other))
      if (!hasConflict) {
        lanes[lane].push(event)
        event.lane = lane
        placed = true
        break
      }
    }
    if (!placed) {
      event.lane = lanes.length
      lanes.push([event])
    }
  }

  return { events: normalized, laneCount: lanes.length }
}
