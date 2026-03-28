import { Outlet, Link, useLocation } from 'react-router-dom'
import { useLang } from './LangContext'
import { WA_LINKS, igDm, igProfile } from '../utils/contact'
import { useEffect } from 'react'

const navItems = [
  { path: '/', key: 'inicio' },
  { path: '/sobre', key: 'sobre' },
  { path: '/actos', key: 'actos' },
  { path: '/elenco', key: 'elenco' },
  { path: '/galeria', key: 'galeria' },
  { path: '/boletos', key: 'boletos' },
  { path: '/eventos', key: 'eventos' },
  { path: '/tienda', key: 'tienda' },
  { path: '/prensa', key: 'prensa' },
]

export default function Layout() {
  const { t, toggle, lang } = useLang()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-logo">🤡 El Payasito</Link>
        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {t(`nav.${item.key}`)}
              </Link>
            </li>
          ))}
          <li>
            <button className="lang-toggle" onClick={toggle}>
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
          </li>
        </ul>
      </nav>
      <div className="pride-stripe" />

      <main>
        <Outlet />
      </main>

      {/* Floating Instagram DM */}
      <a href={igDm} target="_blank" rel="noopener noreferrer" className="instagram-float" aria-label="Instagram DM">
        📸
        <span className="tooltip">Instagram DM!</span>
      </a>

      {/* Floating WhatsApp */}
      <a href={WA_LINKS.general} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        💬
        <span className="tooltip">{t('common.whatsapp')}</span>
      </a>

      <footer>
        <div className="footer-links">
          {navItems.map(item => (
            <Link key={item.path} to={item.path}>{t(`nav.${item.key}`)}</Link>
          ))}
        </div>
        <div className="footer-social" style={{ display: 'flex', justifyContent: 'center', gap: 15, marginTop: 15 }}>
          <a href={igProfile} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', textDecoration: 'none' }} aria-label="Instagram">📸</a>
          <a href={WA_LINKS.general} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', textDecoration: 'none' }} aria-label="WhatsApp">💬</a>
        </div>
        <p className="copyright">
          © 2026 <span>Andrés el Payasito</span> — El Títere Humano 🤡 | 🏳️‍🌈
        </p>
      </footer>
    </>
  )
}
