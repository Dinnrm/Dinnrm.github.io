import { useEffect } from 'react'

// Delegation covers images added in the future without extra listeners per image.
// Publicly rendered images can still be captured or extracted by the browser.
export function useImageProtection() {
  useEffect(() => {
    const protect = event => {
      if (event.target instanceof Element && event.target.closest('img, picture, [data-protected-image]')) {
        event.preventDefault()
        event.stopPropagation()
      }
    }
    document.addEventListener('click', protect, true)
    document.addEventListener('contextmenu', protect, true)
    document.addEventListener('dragstart', protect, true)
    return () => {
      document.removeEventListener('click', protect, true)
      document.removeEventListener('contextmenu', protect, true)
      document.removeEventListener('dragstart', protect, true)
    }
  }, [])
}
