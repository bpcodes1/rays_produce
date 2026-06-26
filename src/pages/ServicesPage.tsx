import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageBanner from '../components/PageBanner'
import restogoLogo from '../restogo_logo.png'
import restogoTransparent from '../restogo_transparent.png'
import './ServicesPage.css'

const SERVICES = [
  {
    title: 'Fresh Produce Distribution',
    body: 'Seasonal and year-round fruits and vegetables sourced from quality growers across the Pacific Northwest and beyond. Delivered fresh, daily.',
    tags: ['Fruits', 'Vegetables', 'Seasonal Items', 'Locally Grown'],
  },
  {
    title: 'Bakery & Bread Products',
    body: 'Fresh bakery and bread products delivered on our daily routes. Keep your restaurant stocked with the freshest baked goods your customers expect.',
    tags: ['Bread', 'Rolls', 'Baked Goods', 'Daily Fresh'],
  },
  {
    title: 'Wholesale Supply',
    body: 'Large-volume orders for wholesale distributors and buyers. Competitive bulk pricing with reliable delivery schedules built around your operation.',
    tags: ['Bulk Orders', 'Volume Pricing', 'Flexible Scheduling'],
  },
  {
    title: 'Retail & Processor Supply',
    body: 'Tailored supply programs for grocery retailers and food processing operations. Consistent quality and volume you can plan your production around.',
    tags: ['Retail Ready', 'Processors', 'Consistent Supply'],
  },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Place Your Order',
    body: 'Contact our team with your needs. We\'ll set up your account, discuss your order cadence, and confirm delivery days for your area.',
  },
  {
    step: '02',
    title: 'We Pick & Pack',
    body: 'Your order is carefully picked, packed, and quality-checked at our Salem facility. We take freshness seriously at every step.',
  },
  {
    step: '03',
    title: 'Daily Delivery',
    body: 'We deliver to your door on our regular Pacific Northwest routes — Oregon and Washington, daily. Reliable, on time, every time.',
  },
]

const CUSTOMERS = [
  {
    title: 'Restaurants',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
      </svg>
    ),
    body: 'Independent restaurants, chains, cafes, and catering operations across Oregon and Washington.',
  },
  {
    title: 'Retailers',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.1 17 7 17h11v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H17c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 21.46 4H5.21l-.94-2H1z"/>
      </svg>
    ),
    body: 'Grocery stores, specialty food shops, and farmers markets looking for a consistent supply partner.',
  },
  {
    title: 'Wholesalers',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 7h-1V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zM7 5h10v2H7V5zm13 12H4V9h16v8zm-9-6H9v2h5v-2z"/>
      </svg>
    ),
    body: 'Regional distributors and wholesale buyers who need reliable bulk sourcing and fulfillment.',
  },
  {
    title: 'Processors',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
      </svg>
    ),
    body: 'Food manufacturing and processing facilities that require consistent raw ingredient delivery.',
  },
]

const CATEGORIES = [
  'Fresh Fruits', 'Fresh Vegetables', 'Seasonal Produce', 'Herbs & Garnish',
  'Root Vegetables', 'Leafy Greens', 'Bakery & Bread', 'Specialty Items',
]

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Our Services — Wholesale Produce & Food Distribution"
        description="Ray's Produce offers daily fresh produce distribution, wholesale supply, bakery products, and retail distribution across Oregon and Washington. Serving restaurants, retailers, wholesalers, and processors."
        canonical="/services"
      />

      <PageBanner
        title="Our Services"
        subtitle="High-quality food product distribution across the Pacific Northwest — daily."
      />

      {/* ── Services Overview ── */}
      <section className="services-section">
        <div className="services-inner">
          <p className="svc-overline">What We Offer</p>
          <h2 className="svc-heading">What We Distribute</h2>
          <p className="svc-sub">
            From fresh produce to bakery products — we handle food distribution
            so you can focus on running your business.
          </p>
          <div className="svc-grid">
            {SERVICES.map(s => (
              <div key={s.title} className="svc-card">
                <h3 className="svc-card-title">{s.title}</h3>
                <p className="svc-card-body">{s.body}</p>
                <div className="svc-tags">
                  {s.tags.map(t => <span key={t} className="svc-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Restogo Partner ── */}
      <section className="services-section services-section--tinted">
        <div className="services-inner restogo-partner">
          <div className="restogo-partner-text">
            <p className="svc-overline">Also From Us</p>
            <h2 className="svc-heading">Need Disposable Supplies?</h2>
            <p className="svc-body">
              Ray's Produce is affiliated with Restogo — a warehouse supplier specializing in
              custom disposable supplies for restaurants and food service operations. From branded
              cups and to-go containers to napkins and silverware, Restogo has everything your
              operation needs.
            </p>
            <a href="https://restogo.com" target="_blank" rel="noopener noreferrer" className="svc-cta-btn">
              Visit Restogo.com →
            </a>
          </div>
          <a href="https://restogo.com" target="_blank" rel="noopener noreferrer" className="restogo-partner-logo-link">
            <img src={restogoTransparent} alt="Restogo" className="restogo-partner-logo" />
          </a>
        </div>
      </section>

      {/* ── Product Categories ── */}
      <section className="services-section services-section--tinted">
        <div className="services-inner">
          <p className="svc-overline">Product Range</p>
          <h2 className="svc-heading">Our Product Categories</h2>
          <p className="svc-sub">
            Product photos and full catalog coming soon. Contact us for
            a complete list of available items.
          </p>
          <div className="category-grid">
            {CATEGORIES.map(cat => (
              <div key={cat} className="category-card">
                <div className="category-image" aria-label={`${cat} — photo coming soon`}>
                  <span className="img-placeholder-sm">Photo Coming Soon</span>
                </div>
                <p className="category-label">{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="services-section">
        <div className="services-inner">
          <p className="svc-overline">The Process</p>
          <h2 className="svc-heading">How Our Distribution Works</h2>
          <div className="how-grid">
            {HOW_IT_WORKS.map(step => (
              <div key={step.step} className="how-card">
                <p className="how-step">{step.step}</p>
                <h3 className="how-title">{step.title}</h3>
                <p className="how-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Serve ── */}
      <section className="services-section services-section--tinted">
        <div className="services-inner">
          <p className="svc-overline">Our Customers</p>
          <h2 className="svc-heading">Who We Work With</h2>
          <div className="customers-grid">
            {CUSTOMERS.map(c => (
              <div key={c.title} className="customer-card">
                <span className="customer-icon">{c.icon}</span>
                <h3 className="customer-title">{c.title}</h3>
                <p className="customer-body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="services-section">
        <div className="services-inner pricing-block">
          <div>
            <p className="svc-overline">Pricing</p>
            <h2 className="svc-heading">Competitive Pricing, Lasting Value</h2>
            <p className="svc-body">
              We offer competitive market pricing backed by long-term partnership rates
              for established accounts. We believe in transparent pricing and building
              relationships where both sides win.
            </p>
            <p className="svc-body">
              Every business is different. Contact us for a custom quote tailored to
              your order volume, delivery frequency, and product mix.
            </p>
            <Link to="/contact" className="svc-cta-btn">Request a Custom Quote →</Link>
          </div>
          <div className="pricing-callout">
            <p className="pricing-callout-label">Our Promise</p>
            <p className="pricing-callout-text">
              "Competitive prices and lasting partnerships — that's Ray's Produce promise."
            </p>
            <ul className="pricing-list">
              <li>No hidden fees</li>
              <li>Flexible order minimums</li>
              <li>Volume pricing available</li>
              <li>Long-term account rates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="svc-cta-banner">
        <div className="svc-cta-inner">
          <h2>Get a Custom Quote for Your Business</h2>
          <p>Tell us about your operation and we'll put together the right solution.</p>
          <Link to="/contact" className="svc-cta-banner-btn">Contact Us Today →</Link>
        </div>
      </section>
    </>
  )
}
