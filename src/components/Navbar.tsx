import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import logo from '../rays_produce_logo.png'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Services',      to: '/services' },
  { label: 'Service Areas', to: '/service-areas' },
  { label: 'About',         to: '/about' },
  { label: 'Contact',       to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const isInnerPage = pathname !== '/'

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const classes = [
    'navbar',
    scrolled ? 'navbar--scrolled' : '',
    isInnerPage && !scrolled ? 'navbar--over-dark' : '',
    menuOpen ? 'navbar--menu-open' : '',
  ].filter(Boolean).join(' ')

  return (
    <header className={classes}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Ray's Produce" className="navbar-logo-img" />
        </Link>

        <nav className="navbar-nav" aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `navbar-link${isActive ? ' is-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <span className="navbar-espanol">Se Habla Español</span>
        <Link to="/contact#quote" className="navbar-cta">Get a Quote</Link>

        <button
          className="navbar-hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span className={`hamburger-bar${menuOpen ? ' open' : ''}`} />
          <span className={`hamburger-bar${menuOpen ? ' open' : ''}`} />
          <span className={`hamburger-bar${menuOpen ? ' open' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <nav className="navbar-mobile-menu" aria-label="Mobile navigation">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `mobile-nav-link${isActive ? ' is-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact#quote"
            className="mobile-nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  )
}
