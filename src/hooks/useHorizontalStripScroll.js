import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { getStripScrollState, scrollStrip } from '../utils/horizontalStripScroll'

export default function useHorizontalStripScroll(itemCount = 0) {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [hasOverflow, setHasOverflow] = useState(false)

  const syncScrollState = useCallback(() => {
    const el = scrollRef.current
    const state = getStripScrollState(el)
    setCanScrollLeft(state.canScrollLeft)
    setCanScrollRight(state.canScrollRight)
    setHasOverflow(state.hasOverflow)
  }, [])

  useLayoutEffect(() => {
    syncScrollState()
  }, [itemCount, syncScrollState])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return undefined

    syncScrollState()
    el.addEventListener('scroll', syncScrollState, { passive: true })
    window.addEventListener('resize', syncScrollState, { passive: true })
    window.addEventListener('load', syncScrollState, { passive: true })

    const resizeObserver = new ResizeObserver(syncScrollState)
    resizeObserver.observe(el)
    const grid = el.firstElementChild
    if (grid) resizeObserver.observe(grid)

    return () => {
      el.removeEventListener('scroll', syncScrollState)
      window.removeEventListener('resize', syncScrollState)
      window.removeEventListener('load', syncScrollState)
      resizeObserver.disconnect()
    }
  }, [syncScrollState])

  const scrollPrev = useCallback(() => {
    scrollStrip(scrollRef.current, -1)
  }, [])

  const scrollNext = useCallback(() => {
    scrollStrip(scrollRef.current, 1)
  }, [])

  return {
    scrollRef,
    canScrollLeft,
    canScrollRight,
    hasOverflow,
    scrollPrev,
    scrollNext,
    syncScrollState,
  }
}
