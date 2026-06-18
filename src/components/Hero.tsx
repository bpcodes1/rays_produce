import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-overline">Family Owned · Salem, Oregon</p>
          <h1 className="hero-headline">
            Farm-Fresh Produce,<br />
            Delivered Across<br />
            the Northwest
          </h1>
          <p className="hero-body">
            Serving restaurants, retailers, and food service providers
            throughout Oregon and Washington. Local relationships,
            reliable delivery.
          </p>
          <div className="hero-actions">
            <Link to="/contact#service-areas" className="hero-btn hero-btn-primary">
              View Service Areas
            </Link>
            <Link to="/contact#quote" className="hero-btn hero-btn-secondary">
              Get a Quote →
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <svg viewBox="0 0 400 400" className="hero-emblem" fill="none">
            <defs>
              <pattern id="emblem-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" stroke="#c0d0b8" strokeWidth="0.6" fill="none" />
              </pattern>
              <clipPath id="emblem-clip">
                <circle cx="200" cy="200" r="186" />
              </clipPath>
            </defs>

            {/* Grid background */}
            <circle cx="200" cy="200" r="186" fill="#e4ede0" />
            <rect x="14" y="14" width="372" height="372" fill="url(#emblem-grid)" clipPath="url(#emblem-clip)" />

            {/* Outer border */}
            <circle cx="200" cy="200" r="186" stroke="#c8d8bc" strokeWidth="1.5" />

            {/* Dashed inner ring */}
            <circle cx="200" cy="200" r="165" stroke="#c8d8bc" strokeWidth="0.8" strokeDasharray="3 6" />

            {/* Green service area ring */}
            <circle cx="200" cy="200" r="128" fill="#aecf98" stroke="#82b56a" strokeWidth="1" />

            {/* Dark center circle */}
            <circle cx="200" cy="200" r="70" fill="#2d5015" />

            {/* HQ star */}
            <text x="200" y="194" textAnchor="middle" fill="#e85d04" fontSize="34" fontFamily="sans-serif">★</text>
            <text x="200" y="218" textAnchor="middle" fill="#8bb866" fontSize="7.5" fontFamily="'Courier New', monospace" letterSpacing="0.18em">HEADQUARTERS</text>

            {/* Arc path definitions */}
            <path id="top-arc"    d="M 34,200 A 166,166 0 0,1 366,200" />
            <path id="bottom-arc" d="M 366,200 A 166,166 0 0,1 34,200" />

            {/* Arc text */}
            <text fill="#2d5015" fontSize="11" fontFamily="'Courier New', monospace" letterSpacing="0.14em">
              <textPath href="#top-arc" startOffset="50%" textAnchor="middle">
                RAY'S PRODUCE CO.
              </textPath>
            </text>
            <text fill="#2d5015" fontSize="10" fontFamily="'Courier New', monospace" letterSpacing="0.12em">
              <textPath href="#bottom-arc" startOffset="50%" textAnchor="middle">
                SALEM, OREGON
              </textPath>
            </text>

            {/* OR · WA label in the green ring */}
            <text x="200" y="152" textAnchor="middle" fill="#2d5015" fontSize="10" fontFamily="'Courier New', monospace" letterSpacing="0.22em" opacity="0.75">OR · WA</text>

            {/* Cardinal tick marks */}
            <line x1="200" y1="14"  x2="200" y2="30"  stroke="#82b56a" strokeWidth="1.5" />
            <line x1="200" y1="370" x2="200" y2="386" stroke="#82b56a" strokeWidth="1.5" />
            <line x1="14"  y1="200" x2="30"  y2="200" stroke="#82b56a" strokeWidth="1.5" />
            <line x1="370" y1="200" x2="386" y2="200" stroke="#82b56a" strokeWidth="1.5" />

            {/* Diagonal ticks */}
            <line x1="57"  y1="57"  x2="67"  y2="67"  stroke="#c8d8bc" strokeWidth="1" />
            <line x1="343" y1="57"  x2="333" y2="67"  stroke="#c8d8bc" strokeWidth="1" />
            <line x1="57"  y1="343" x2="67"  y2="333" stroke="#c8d8bc" strokeWidth="1" />
            <line x1="343" y1="343" x2="333" y2="333" stroke="#c8d8bc" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  )
}
