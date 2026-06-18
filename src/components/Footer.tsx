import { Link } from 'react-router-dom'
import logo from '../rays_produce_logo.png'
import restogoLogo from '../restogo_logo.png'
import restogoTransparent from '../restogo_transparent.png'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo-link">
            <img src={logo} alt="Ray's Produce" className="footer-logo-img" />
          </Link>
          <p className="footer-tagline">
            Family-owned produce distributor serving Oregon &amp; Washington since 1996.
          </p>
          <span className="footer-espanol">🌎 Latino-Owned · Se Habla Español</span>
          <address className="footer-address">
            4004 Fairview Industrial Dr SE<br />
            Salem, OR 97302<br />
            <a href="tel:+15036911460">(503) 691-1460</a>
          </address>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <div className="footer-col">
            <p className="footer-col-heading">Company</p>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <p className="footer-col-heading">Services</p>
            <Link to="/services">Fresh Produce</Link>
            <Link to="/services">Wholesale Supply</Link>
            <Link to="/services">Retail Distribution</Link>
            <Link to="/services">Food Processors</Link>
          </div>
          <div className="footer-col">
            <p className="footer-col-heading">Service Areas</p>
            <Link to="/contact">Oregon</Link>
            <Link to="/contact">Washington</Link>
            <Link to="/contact">View All Cities</Link>
          </div>
          <div className="footer-col">
            <p className="footer-col-heading">Also From Us</p>
            <a href="https://restogo.com" target="_blank" rel="noopener noreferrer" className="footer-restogo-link">
              <img src={restogoTransparent} alt="Restogo" className="footer-restogo-logo" />
            </a>
            <a href="https://restogo.com" target="_blank" rel="noopener noreferrer">Visit Restogo →</a>
          </div>
        </nav>
      </div>

      <div className="footer-bar">
        <p>&copy; {year} Ray's Produce Inc. All rights reserved. · Salem, Oregon</p>
        <p className="footer-bar-right">
          <a href="tel:+15036911460">(503) 691-1460</a>
        </p>
      </div>
    </footer>
  )
}
