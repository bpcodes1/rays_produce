import { Link } from 'react-router-dom'
import heroImage from '../Rays-produce.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-gradient" />
      <div className="hero-content">
        <p className="hero-overline">Family Owned · Salem, Oregon · Est. 1996</p>
        <h1 className="hero-headline">Complete Foodservice Distribution</h1>
        <p className="hero-subheadline">For Restaurants Across the Northwest</p>
        <div className="hero-actions">
          <Link to="/contact#quote" className="hero-btn hero-btn-primary">Open an Account →</Link>
          <Link to="/contact" className="hero-btn hero-btn-secondary">Talk to a Sales Rep →</Link>
        </div>
      </div>
    </section>
  )
}
