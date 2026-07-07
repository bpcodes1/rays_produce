import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import SchemaMarkup from '../components/SchemaMarkup'
import Hero from '../components/Hero'
import ServiceMap from '../components/ServiceMap'
import restogoLogo from '../restogo_logo.png'
import groupIcon from '../group_icon.png'
import warehouseIcon from '../warehouse_icon.png'
import truckIcon from '../truck_icon.png'
import locationIcon from '../location_icon.png'
import originalRays from '../original_rays.jpg'
import beginning from '../beginning.jpg'
import hero2 from '../hero2.jpg'
import raysNewberg from '../rays_newberg.jpg'
import './HomePage.css'

const VALUE_PROPS = [
  { icon: '🥦', title: 'High-Quality Products',    body: 'Premium food products sourced for freshness, consistency, and quality your customers will notice.' },
  { icon: '🌎', title: 'Latino-Owned & Bilingual', body: 'Proudly Latino-owned and operated. Our bilingual team serves Spanish-speaking customers and partners — se habla español.' },
  { icon: '💵', title: 'Competitive Pricing',      body: 'Fair market pricing with long-term partnership rates. We make it easier to run a profitable operation.' },
  { icon: '🚚', title: 'Daily Deliveries',         body: 'Reliable daily delivery routes across Oregon and Washington. On time, every time.' },
  { icon: '🤝', title: 'Lasting Partnerships',     body: 'We prioritize long-term relationships over one-off transactions. Your success is our success.' },
  { icon: '🌟', title: 'Excellent Customer Service', body: 'Real people who know your business, your preferences, and respond when you need them.' },
]

const WHO_WE_SERVE = [
  { title: 'Restaurants',  body: 'Full-service restaurant supply with flexible order sizes and daily delivery to your kitchen.' },
  { title: 'Retailers',    body: 'Consistent fresh produce for grocery stores and specialty retailers throughout the region.' },
  { title: 'Wholesalers',  body: 'Bulk supply partnerships for redistribution businesses across Oregon and Washington.' },
  { title: 'Processors',   body: 'Raw ingredient delivery programs tailored to food processing and manufacturing operations.' },
]


export default function HomePage() {
  return (
    <>
      <SEO
        title="Fresh Produce Distributor Salem, Oregon"
        description="Ray's Produce Inc. is a family-owned produce distributor serving restaurants, retailers, wholesalers, and processors across Oregon and Washington since 1996. Daily deliveries. Competitive pricing."
        canonical="/"
      />
      <SchemaMarkup />

      <Hero />

      {/* ── Stats Bar ── */}
      <section className="trust-bar" aria-label="Company highlights">
        <div className="trust-bar-inner">
          <div className="stat-item">
            <img src={groupIcon} alt="" className="stat-icon" aria-hidden="true" />
            <div className="stat-text">
              <span className="stat-number">2,000+</span>
              <span className="stat-label">Customers Served</span>
            </div>
          </div>
          <span className="stat-divider" aria-hidden="true" />
          <div className="stat-item">
            <img src={warehouseIcon} alt="" className="stat-icon" aria-hidden="true" />
            <div className="stat-text">
              <span className="stat-number">150,000</span>
              <span className="stat-label">Sq Ft Distribution Center</span>
            </div>
          </div>
          <span className="stat-divider" aria-hidden="true" />
          <div className="stat-item">
            <img src={groupIcon} alt="" className="stat-icon" aria-hidden="true" />
            <div className="stat-text">
              <span className="stat-number">100+</span>
              <span className="stat-label">Employees</span>
            </div>
          </div>
          <span className="stat-divider" aria-hidden="true" />
          <div className="stat-item">
            <img src={truckIcon} alt="" className="stat-icon" aria-hidden="true" />
            <div className="stat-text">
              <span className="stat-number">Daily</span>
              <span className="stat-label">Deliveries</span>
            </div>
          </div>
          <span className="stat-divider" aria-hidden="true" />
          <div className="stat-item">
            <img src={locationIcon} alt="" className="stat-icon" aria-hidden="true" />
            <div className="stat-text">
              <span className="stat-label">Serving Oregon,</span>
              <span className="stat-label">Washington & Idaho</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Ray's ── */}
      <section className="home-section" id="why-rays">
        <div className="home-section-inner">
          <p className="section-overline">Why Choose Us</p>
          <h2 className="section-title">The Ray's Produce Difference</h2>
          <p className="section-sub">
            Since 1996, we've built our reputation on quality products, honest pricing,
            and service you can count on.
          </p>
          <div className="value-grid">
            {VALUE_PROPS.map((v, i) => (
              <div key={v.title} className="value-card">
                <div className="value-header">
                  <span className="value-number">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="value-title">{v.title}</h3>
                </div>
                <p className="value-body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Serve ── */}
      <section className="home-section home-section--tinted" id="who-we-serve">
        <div className="home-section-inner">
          <p className="section-overline">Our Customers</p>
          <h2 className="section-title">Who We Work With</h2>
          <p className="section-sub">
            From single-location restaurants to regional wholesalers — we tailor our
            service to fit your operation.
          </p>
          <div className="serve-grid">
            <div className="serve-card serve-card--restogo">
              <a href="https://restogo.com" target="_blank" rel="noopener noreferrer">
                <img src={restogoLogo} alt="Restogo" className="serve-restogo-logo" />
              </a>
              <p className="serve-body">Custom cups, to-go containers, napkins, and silverware — branded for your business.</p>
              <a href="https://restogo.com" target="_blank" rel="noopener noreferrer" className="serve-link">
                Visit Restogo →
              </a>
            </div>
            {WHO_WE_SERVE.map(s => (
              <div key={s.title} className="serve-card">
                <h3 className="serve-title">{s.title}</h3>
                <p className="serve-body">{s.body}</p>
                <Link to="/contact" className="serve-link">Get a quote →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area Map ── */}
      <div id="service-areas">
        <ServiceMap simpleSidebar title="Areas We Serve" footerCta={{ label: 'View Complete City Map →', to: '/service-areas' }} />
      </div>

      {/* ── About Strip ── */}
      <section className="home-section home-section--tinted" id="about-strip">
        <div className="home-section-inner about-strip">
          <div className="about-strip-image">
            <img src={beginning} alt="The original Ray's Produce store" className="about-strip-photo" />
          </div>
          <div className="about-strip-content">
            <p className="section-overline">Our Story</p>
            <h2 className="section-title">Family Owned Since 1996</h2>
            <p className="about-body">
              Competitive prices and lasting partnerships — that's our promise. We prioritize
              forging enduring relationships built on trust, reliability, and exceptional
              customer service.
            </p>
            <Link to="/about" className="btn-outline">Learn Our Story →</Link>
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section className="home-section" id="locations">
        <div className="home-section-inner">
          <p className="section-overline">Find Us</p>
          <h2 className="section-title">Our Locations</h2>
          <div className="locations-grid">
            <div className="location-card">
              <div className="location-img">
                <img src={hero2} alt="Ray's Produce / Restogo HQ" className="location-img-photo" />
                <span className="location-city-tag">📍 Salem, OR</span>
              </div>
              <div className="location-info">
                <span className="location-badge">Headquarters</span>
                <h3 className="location-name">Ray's Produce / Restogo HQ</h3>
                <p className="location-type">Distribution &amp; Operations</p>
              </div>
            </div>
            <div className="location-card">
              <div className="location-img">
                <img src={originalRays} alt="Retail & Wholesale Market" className="location-img-photo" />
                <span className="location-city-tag">📍 Salem, OR</span>
              </div>
              <div className="location-info">
                <span className="location-badge">Market</span>
                <h3 className="location-name">Retail &amp; Wholesale Market</h3>
                <p className="location-type">Open to the Public</p>
              </div>
            </div>
            <div className="location-card">
              <div className="location-img">
                <img src={raysNewberg} alt="Ray's Produce Newberg" className="location-img-photo location-img-photo--top" />
                <span className="location-city-tag">📍 Newberg, OR</span>
              </div>
              <div className="location-info">
                <span className="location-badge">Location</span>
                <h3 className="location-name">Ray's Produce Newberg</h3>
                <p className="location-type">Retail &amp; Local Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="home-section" id="testimonials">
        <div className="home-section-inner">
          <p className="section-overline">What Our Clients Say</p>
          <h2 className="section-title">Trusted by Pacific Northwest Businesses</h2>
          <div className="testimonial-grid">
            {[1, 2, 3].map(n => (
              <div key={n} className="testimonial-card">
                <p className="testimonial-stars" aria-label="5 stars">★★★★★</p>
                <p className="testimonial-quote">
                  "Testimonial coming soon — client feedback will be added here."
                </p>
                <p className="testimonial-author">— Business Name, City, OR</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner" id="quote">
        <div className="cta-banner-inner">
          <h2 className="cta-banner-title">Ready to Elevate Your Business?</h2>
          <p className="cta-banner-sub">
            Competitive prices and lasting partnerships — that's the Ray's Produce promise.
          </p>
          <Link to="/contact" className="cta-banner-btn">Partner With Us →</Link>
        </div>
      </section>
    </>
  )
}
