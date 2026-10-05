import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const NAV_PAGES = ['home', 'education', 'awards', 'works', 'photos', 'contact']
export const ALL_PAGES = NAV_PAGES
export const CONTINUOUS_PAGES = ['home', 'works', 'photos', 'education', 'awards', 'contact']
// A wide mouse/trackpad viewport uses pages. Touch-capable devices retain the
// scroll layout, even when an iPad is using a trackpad or desktop-site mode.
export const DESKTOP_QUERY = '(min-width: 1100px) and (hover: hover) and (pointer: fine)'

export function shouldUseIndividualPages(mediaMatches, maxTouchPoints) {
  return mediaMatches && !(maxTouchPoints > 0)
}

export function pageFromHash(hash) {
  const page = hash.replace(/^#\/?/, '')
  if (page === 'projects') return 'works'
  return ALL_PAGES.includes(page) ? page : 'home'
}

export function usePageNavigation() {
  const [route, setRoute] = useState(() => pageFromHash(window.location.hash))
  const [desktopMode, setDesktopMode] = useState(() => shouldUseIndividualPages(window.matchMedia(DESKTOP_QUERY).matches, navigator.maxTouchPoints))
  const [scrollActive, setScrollActive] = useState(route)
  const active = desktopMode ? route : scrollActive
  const activeRef = useRef(active)
  activeRef.current = active

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY)
    const syncLayout = () => {
      const individual = shouldUseIndividualPages(media.matches, navigator.maxTouchPoints)
      if (individual) setRoute(activeRef.current)
      setDesktopMode(individual)
    }
    media.addEventListener('change', syncLayout)
    return () => media.removeEventListener('change', syncLayout)
  }, [])

  useEffect(() => {
    const sync = () => {
      if (window.location.hash !== '#main') setRoute(pageFromHash(window.location.hash))
    }
    window.addEventListener('hashchange', sync)
    window.addEventListener('popstate', sync)
    return () => {
      window.removeEventListener('hashchange', sync)
      window.removeEventListener('popstate', sync)
    }
  }, [])

  useLayoutEffect(() => {
    if (window.location.hash && window.location.hash !== '#main') {
      const canonical = `#/${route}`
      if (window.location.hash !== canonical) window.history.replaceState(null, '', canonical)
    }
    if (desktopMode) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    else document.getElementById(route)?.scrollIntoView({ behavior: 'instant' })
  }, [route, desktopMode])

  useEffect(() => {
    if (desktopMode) return
    let frame = 0
    const update = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const bottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4
        const current = [...CONTINUOUS_PAGES].reverse().find(id => document.getElementById(id)?.getBoundingClientRect().top <= 160)
        setScrollActive(bottom ? 'contact' : current || 'home')
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [desktopMode])

  function navigate(page, event) {
    if (!ALL_PAGES.includes(page)) return
    if (event && (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button > 0)) return
    event?.preventDefault()
    const hash = `#/${page}`
    if (window.location.hash !== hash) window.history.pushState(null, '', hash)
    setRoute(page)
    if (!desktopMode) {
      setScrollActive(page)
      document.getElementById(page)?.scrollIntoView({ behavior: 'instant' })
    } else if (page === route) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  return { view: active, desktopMode, navigate }
}
