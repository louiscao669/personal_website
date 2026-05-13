import React from 'react'
import { useCountUp } from './useCountUp'

function StatCell({ value, suffix, label }) {
  const [n, ref] = useCountUp(value)
  return (
    <div ref={ref}>
      <div className="stat-num">
        {n}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function StatsStrip({ stats }) {
  return (
    <section className="stats-strip" aria-label="Highlights">
      <div className="stats-inner">
        {stats.map((s) => (
          <StatCell key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
        ))}
      </div>
    </section>
  )
}
