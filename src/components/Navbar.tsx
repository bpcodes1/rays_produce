import { NavLink, Link } from 'react-router-dom'
import logo from '../rays_produce_logo.png'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Services',      to: '/services' },
  { label: 'Service Areas', to: '/service-areas' },
  { label: 'About',         to: '/about' },
  { label: 'Contact',       to: '/contact' },
]

export default function Navbar() {
  return (
    <header className="navbar">
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
      </div>
    </header>
  )
}
