import { useEffect, useRef, useState } from 'react'

export function useCountUp(target, durationMs = 1400) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    done.current = false
    setValue(0)
    const el = ref.current
    if (!el) return

    const run = () => {
      if (done.current) return
      done.current = true
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min(1, (now - start) / durationMs)
        const eased = 1 - (1 - t) ** 3
        setValue(Math.round(target * eased))
        if (t < 1) requestAnimationFrame(tick)
        else setValue(target)
      }
      requestAnimationFrame(tick)
    }

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) run()
      },
      { threshold: 0.2 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, durationMs])

  return [value, ref]
}
