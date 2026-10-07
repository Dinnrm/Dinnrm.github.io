import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { projects } from '../data/content.js'

export const NAV_PAGES = ['home', 'education', 'awards', 'works', 'photos', 'contact']
export const ALL_PAGES = NAV_PAGES
export const CONTINUOUS_PAGES = NAV_PAGES
export const DESKTOP_QUERY = '(min-width: 1100px) and (hover: hover) and (pointer: fine)'

export function shouldUseIndividualPages(mediaMatches, maxTouchPoints) {
  return mediaMatches && !(maxTouchPoints > 0)
}

export function pageFromHash(hash) {
  const page = hash.replace(/^#\/?/, '')
  if (page === 'projects') return 'works'
  if (page.startsWith('works/')) return projects.some(project => `works/${project.id}` === page) ? page : 'works'
  return ALL_PAGES.includes(page) ? page : 'home'
}

export function shouldRestoreCollection(from, to, intent) {
  return from.startsWith('works/') && to === 'works' && (intent === 'return' || intent === 'history')
}

export function usePageNavigation() {
  const [route, setRoute] = useState(() => pageFromHash(window.location.hash))
  const [desktopMode, setDesktopMode] = useState(() => shouldUseIndividualPages(window.matchMedia(DESKTOP_QUERY).matches, navigator.maxTouchPoints))
  const [scrollActive, setScrollActive] = useState(route.split('/')[0])
  const [navigationVersion, setNavigationVersion] = useState(0)
  const projectId = route.startsWith('works/') ? route.slice(6) : null
  const active = projectId ? 'works' : desktopMode ? route : scrollActive
  const activeRef = useRef(active)
  const previousRoute = useRef(route)
  const collectionReturn = useRef(null)
  const navigationIntent = useRef('initial')
  activeRef.current = active

  useLayoutEffect(() => {
    const previous = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    return () => { window.history.scrollRestoration = previous }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY)
    const syncLayout = () => {
      const individual = shouldUseIndividualPages(media.matches, navigator.maxTouchPoints)
      if (individual) setRoute(current => current.startsWith('works/') ? current : activeRef.current)
      setDesktopMode(individual)
    }
    media.addEventListener('change', syncLayout)
    return () => media.removeEventListener('change', syncLayout)
  }, [])

  useEffect(() => {
    const sync = () => {
      if (window.location.hash !== '#main') {
        navigationIntent.current = 'history'
        setRoute(pageFromHash(window.location.hash))
      }
    }
    window.addEventListener('hashchange', sync)
    window.addEventListener('popstate', sync)
    return () => {
      window.removeEventListener('hashchange', sync)
      window.removeEventListener('popstate', sync)
    }
  }, [])

  useLayoutEffect(() => {
    const returning = shouldRestoreCollection(previousRoute.current, route, navigationIntent.current)
    previousRoute.current = route
    if (window.location.hash && window.location.hash !== '#main') {
      const canonical = `#/${route}`
      if (window.location.hash !== canonical) window.history.replaceState(null, '', canonical)
    }
    let settleFrame = 0
    const position = () => {
      const offset = (document.querySelector('.site-header')?.getBoundingClientRect().height || 0) + 14
      if (returning && collectionReturn.current) {
        const saved = collectionReturn.current
        const card = document.getElementById(`project-link-${saved.id}`)
        const top = saved.width === window.innerWidth || !card ? saved.y : window.scrollY + card.getBoundingClientRect().top - offset
        window.scrollTo(0, Math.max(0, top))
        return
      }
      if (projectId || desktopMode || route === 'home') {
        window.scrollTo(0, 0)
        return
      }
      const target = document.getElementById(route)
      if (!target) return
      const heading = target.querySelector('h1, h2') || target
      window.scrollTo(0, Math.max(0, window.scrollY + heading.getBoundingClientRect().top - offset))
    }
    const frame = requestAnimationFrame(() => {
      position()
      if (returning && collectionReturn.current) document.getElementById(`project-link-${collectionReturn.current.id}`)?.focus({ preventScroll: true })
      else if (projectId) document.getElementById('project-title')?.focus({ preventScroll: true })
      // Re-measure once after menu dismissal and any focus adjustment. No
      // timers or ongoing scroll loop compete with the user's next gesture.
      settleFrame = requestAnimationFrame(position)
    })
    return () => { cancelAnimationFrame(frame); cancelAnimationFrame(settleFrame) }

  }, [route, projectId, desktopMode, navigationVersion])

  useEffect(() => {
    if (desktopMode || projectId) return
    let frame = 0
    const update = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const bottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4
        const offset = (document.querySelector('.site-header')?.getBoundingClientRect().height || 0) + 15
        const current = [...CONTINUOUS_PAGES].reverse().find(id => {
          const section = document.getElementById(id)
          return (section?.querySelector('h1, h2') || section)?.getBoundingClientRect().top <= offset
        })
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
  }, [desktopMode, projectId])

  function navigate(page, event, options = {}) {
    const target = pageFromHash(`#/${page}`)
    if (target !== page) return
    if (event && (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button > 0)) return
    event?.preventDefault()
    navigationIntent.current = options.restoreCollection ? 'return' : 'section'
    if (page.startsWith('works/') && !projectId) {
      collectionReturn.current = { y: window.scrollY, width: window.innerWidth, id: page.slice(6) }
      // A card may be opened after scrolling the mobile collection without
      // using the menu. Browser Back should still return to that collection.
      window.history.replaceState(null, '', '#/works')
    }
    const hash = `#/${page}`
    if (window.location.hash !== hash) window.history.pushState(null, '', hash)
    setRoute(page)
    setNavigationVersion(version => version + 1)
    if (!desktopMode) setScrollActive(page.split('/')[0])
  }

  return { view: active, desktopMode, projectId, navigate }
}
