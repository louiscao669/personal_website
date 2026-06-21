export const STRIP_CARD_SELECTOR = '[data-strip-card]'

const EDGE_EPSILON = 8

export function getStripScrollState(container) {
  if (!container) {
    return { canScrollLeft: false, canScrollRight: false, hasOverflow: false }
  }
  const { scrollLeft, scrollWidth, clientWidth } = container
  const hasOverflow = scrollWidth > clientWidth + EDGE_EPSILON
  return {
    canScrollLeft: scrollLeft > EDGE_EPSILON,
    canScrollRight: scrollLeft + clientWidth < scrollWidth - EDGE_EPSILON,
    hasOverflow,
  }
}

export function scrollStrip(container, direction) {
  if (!container || !direction) return

  const cards = [...container.querySelectorAll(STRIP_CARD_SELECTOR)]
  if (!cards.length) {
    container.scrollBy({ left: direction * container.clientWidth * 0.85, behavior: 'smooth' })
    return
  }

  const containerRect = container.getBoundingClientRect()

  if (direction > 0) {
    const nextCard = cards.find((card) => card.getBoundingClientRect().left > containerRect.left + EDGE_EPSILON)
    if (!nextCard) return
    const delta = nextCard.getBoundingClientRect().left - containerRect.left
    container.scrollBy({ left: delta, behavior: 'smooth' })
    return
  }

  const prevCards = cards.filter(
    (card) => card.getBoundingClientRect().left < containerRect.left - EDGE_EPSILON,
  )
  const prevCard = prevCards[prevCards.length - 1]
  if (!prevCard) {
    container.scrollTo({ left: 0, behavior: 'smooth' })
    return
  }
  const delta = prevCard.getBoundingClientRect().left - containerRect.left
  container.scrollBy({ left: delta, behavior: 'smooth' })
}
