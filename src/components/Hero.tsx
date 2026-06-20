import { Link } from 'react-router-dom'
import heroImage from '../hero.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-gradient" />
      <div className="hero-content">
        <p className="hero-overline">Family Owned · Salem, Oregon · Est. 1996</p>
        <h1 className="hero-headline">Farm-Fresh Produce,<br />Delivered Daily</h1>
        <div className="hero-actions">
          <Link to="/contact#quote" className="hero-btn hero-btn-primary">Get a Quote →</Link>
          <Link to="/service-areas" className="hero-btn hero-btn-secondary">View Service Areas</Link>
        </div>
      </div>
    </section>
  )
}
