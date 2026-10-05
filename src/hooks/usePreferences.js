import { useEffect, useRef, useState } from 'react'

export function usePreferences() {
  const [theme, updateTheme] = useState(() => document.documentElement.dataset.theme || 'light')
  const [lang, updateLang] = useState(() => document.documentElement.lang === 'en' ? 'en' : 'zh')
  const manualTheme = useRef(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('dinnrm-theme')
      if (saved === 'light' || saved === 'dark') manualTheme.current = saved
    } catch { /* Keep explicit preferences in memory when storage is unavailable. */ }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#1c1e1b' : '#f6f5f1'
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN'
    document.title = lang === 'en' ? 'Dinnrm — Ding Ruomu · Visual Designer' : 'Dinnrm — 丁若木 · 个人设计作品集'
    document.querySelector('meta[name="description"]').content = lang === 'en'
      ? 'Ding Ruomu’s portfolio: visual communication, brand identity, poster design, book design and photography.'
      : '丁若木的个人设计作品集，涵盖视觉传达、品牌设计、海报设计、书籍装帧与摄影。'
  }, [lang])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const followSystem = () => {
      if (!manualTheme.current) updateTheme(media.matches ? 'dark' : 'light')
    }
    const sync = (event) => {
      if (event.key === 'dinnrm-theme' || event.key === null) {
        manualTheme.current = event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : null
        updateTheme(manualTheme.current || (media.matches ? 'dark' : 'light'))
      }
      if (event.key === 'dinnrm-lang' || event.key === null) updateLang(event.newValue === 'en' ? 'en' : 'zh')
    }
    media.addEventListener('change', followSystem)
    window.addEventListener('storage', sync)
    return () => {
      media.removeEventListener('change', followSystem)
      window.removeEventListener('storage', sync)
    }
  }, [])

  return {
    theme, lang,
    setTheme(value) {
      manualTheme.current = value
      updateTheme(value)
      try { localStorage.setItem('dinnrm-theme', value) } catch { /* Keep the in-memory choice. */ }
    },
    setLang(value) {
      // Keep the current section in view when translated text changes its height.
      const current = [...document.querySelectorAll('main > section')].reverse().find((section) => section.getBoundingClientRect().top <= 140)
      const top = current?.getBoundingClientRect().top
      updateLang(value)
      try { localStorage.setItem('dinnrm-lang', value) } catch { /* Keep the in-memory choice. */ }
      if (current) requestAnimationFrame(() => {
        window.scrollBy({ top: current.getBoundingClientRect().top - top, behavior: 'instant' })
      })
    },
  }
}
