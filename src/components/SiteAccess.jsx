import { lazy, Suspense, useRef, useState } from 'react'

const Portfolio = lazy(() => import('../App.jsx'))
const ACCESS_KEY = 'dinnrm-site-access-v1'
const PASSWORD_DIGEST = '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92'

function hasAccess() {
  try { return sessionStorage.getItem(ACCESS_KEY) === PASSWORD_DIGEST } catch { return false }
}

export default function SiteAccess() {
  const [unlocked, setUnlocked] = useState(hasAccess)
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const input = useRef(null)
  const en = document.documentElement.lang === 'en'

  async function submit(event) {
    event.preventDefault()
    if (busy) return
    setBusy(true)
    setError('')
    try {
      const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password))
      const digest = Array.from(new Uint8Array(bytes), byte => byte.toString(16).padStart(2, '0')).join('')
      if (digest !== PASSWORD_DIGEST) {
        setError(en ? 'Incorrect password. Please try again.' : '密码不正确，请重新输入。')
        input.current?.focus()
        input.current?.select()
        return
      }
      try { sessionStorage.setItem(ACCESS_KEY, PASSWORD_DIGEST) } catch {}
      setPassword('')
      setUnlocked(true)
    } catch {
      setError(en ? 'Unable to verify. Please refresh and try again.' : '暂时无法验证，请刷新后重试。')
    } finally {
      setBusy(false)
    }
  }

  if (unlocked) return <Suspense fallback={<main className="access-screen"><p role="status">{en ? 'Loading…' : '正在进入…'}</p></main>}><Portfolio /></Suspense>

  return <main className="access-screen">
    <section className="access-card" aria-labelledby="access-title">
      <p className="wordmark">Dinnrm<span className="brand-dot">.</span></p>
      <div className="access-intro"><p className="section-label">Portfolio access</p><h1 id="access-title">{en ? 'Welcome.' : '欢迎来访。'}</h1><p>{en ? 'Enter the password to explore my work.' : '请输入密码，查看我的作品与设计记录。'}</p></div>
      <form onSubmit={submit}>
        <label htmlFor="access-password">{en ? 'Access password' : '访问密码'}</label>
        <div className="access-input-row"><input ref={input} id="access-password" name="password" type={visible ? 'text' : 'password'} value={password} onChange={event => { setPassword(event.target.value); setError('') }} autoComplete="current-password" required aria-invalid={Boolean(error)} aria-describedby="access-error" /><button type="button" className="access-reveal" onClick={() => setVisible(value => !value)} aria-pressed={visible}>{en ? (visible ? 'Hide' : 'Show') : (visible ? '隐藏' : '显示')}</button></div>
        <p id="access-error" className="access-error" aria-live="polite">{error}</p>
        <button type="submit" className="access-submit" disabled={busy}>{busy ? (en ? 'Verifying…' : '正在验证…') : (en ? 'Enter portfolio' : '进入网站')}<span aria-hidden="true">↗</span></button>
      </form>
    </section>
  </main>
}
