/**
 * Accepts project links as objects or plain URL strings from siteContent.
 * @returns {{ label: string, href: string, icon?: string }[]}
 */
export function normalizeProjectLinks(links) {
  if (!Array.isArray(links)) return []

  return links
    .map((link) => {
      if (typeof link === 'string') {
        const href = ensureAbsoluteUrl(link.trim())
        if (!href) return null
        return { label: linkLabelFromUrl(href), href, icon: iconFromUrl(href) }
      }
      if (link && typeof link.href === 'string') {
        const href = ensureAbsoluteUrl(link.href.trim())
        if (!href) return null
        return {
          label: link.label?.trim() || linkLabelFromUrl(href),
          href,
          icon: link.icon || iconFromUrl(href),
        }
      }
      return null
    })
    .filter(Boolean)
}

function ensureAbsoluteUrl(url) {
  if (!url) return ''
  if (/^https?:\/\//i.test(url)) return url
  if (url.startsWith('//')) return `https:${url}`
  if (url.startsWith('/')) return url
  return `https://${url}`
}

function linkLabelFromUrl(href) {
  try {
    const host = new URL(href, 'https://example.com').hostname.replace(/^www\./, '')
    if (host.includes('github.com')) return 'GitHub'
    return host || 'Link'
  } catch {
    return 'Link'
  }
}

function iconFromUrl(href) {
  if (/github\.com/i.test(href)) return 'github'
  return 'external'
}
