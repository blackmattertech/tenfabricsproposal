import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { nav } from '../../content/copy'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const renderLink = (link) => {
    const isInternalRoute = link.href.startsWith('/') && !link.href.startsWith('//')

    if (isInternalRoute) {
      return (
        <Link key={link.href} to={link.href} onClick={closeMenu}>
          {link.label}
        </Link>
      )
    }

    return (
      <a key={link.href} href={link.href} onClick={closeMenu}>
        {link.label}
      </a>
    )
  }

  return (
    <header>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Link to="/" className="brand" aria-label={nav.brand}>
          <span className="brand-logos">
            <img src="/10fabric logo.png" alt="Ten Fabrics" className="brand-logo brand-logo-tenfabrics" />
            <span className="partner-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M12 5v14" />
                <path d="M5 12h14" />
              </svg>
            </span>
            <img src="/blackmatterlogo.png" alt="BlackMatter Technologies" className="brand-logo brand-logo-blackmatter" />
          </span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {nav.links.map(renderLink)}
        </div>

      </motion.nav>
    </header>
  )
}
