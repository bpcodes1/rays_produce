import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageBanner from '../components/PageBanner'
import restogoLogo from '../restogo_logo.png'
import restogoTransparent from '../restogo_transparent.png'
import logoEastsideMeats from '../assets/brands/eastside_meats.png'
import logoDarigold from '../assets/brands/dairygold.webp'
import logoAlpine from '../assets/brands/alpine.avif'
import logoDairyFreshNW from '../assets/brands/dairy_fresh_northwest.webp'
import logoCocaCola from '../assets/brands/coca_cola.png'
import logoRiceland from '../assets/brands/riceland.svg'
import logoOleMexicanFoods from '../assets/brands/ole_mexican_foods.webp'
import logoEmbasa from '../assets/brands/embasa.png'
import logoProductosReal from '../assets/brands/productos_real.png'
import logoAguasFrescas from '../assets/brands/aguas_frescas_de_mexico.png'
import './ServicesPage.css'

const SERVICES = [
  {
    title: 'Fresh Produce',
    subtitle: 'Built for Restaurant Kitchens',
    body: 'We specialize in the fresh vegetables restaurants use every day—from tomatoes, onions, peppers, cilantro, avocados, and lettuce to specialty produce and seasonal items. With daily deliveries and reliable quality, we help keep your kitchen stocked and your customers satisfied.',
    tags: ['Tomatoes', 'Onions', 'Lettuce', 'Peppers & Chiles', 'Avocados', 'Cilantro & Herbs', 'Cucumbers', 'Potatoes', 'Carrots', 'Seasonal Produce'],
  },
  {
    title: 'Dairy, Meat & Refrigerated',
    body: 'Milk, cheese, eggs, meats, tortillas, deli products, and refrigerated essentials from leading brands.',
    tags: ['Cheese', 'Dairy', 'Meat', 'Refrigerated'],
  },
  {
    title: 'Frozen Foods',
    body: 'Vegetables, potatoes, desserts, proteins, seafood, and frozen restaurant favorites.',
    tags: ['Fries', 'Seafood', 'Proteins', 'Frozen Foods'],
  },
  {
    title: 'Dry Goods & Kitchen Essentials',
    body: 'Cooking oils, canned goods, spices, beans, rice, sauces, seasonings, and pantry staples.',
    tags: ['Rice', 'Beans', 'Spices', 'Sauces'],
  },
  {
    title: 'Restaurant Supplies',
    body: 'Everything your kitchen uses every day.',
    tags: ['Gloves', 'Chemicals', 'Foil', 'Janitorial'],
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

const BRANDS = [
  { name: 'Eastside Meats',        logo: logoEastsideMeats },
  { name: 'Darigold',              logo: logoDarigold },
  { name: 'IBP',                   logo: null },
  { name: 'Alpine',                logo: logoAlpine },
  { name: 'Dairy Fresh Northwest', logo: logoDairyFreshNW },
  { name: 'Coca-Cola',             logo: logoCocaCola },
  { name: 'Riceland',              logo: logoRiceland },
  { name: 'Olé Mexican Foods',     logo: logoOleMexicanFoods },
  { name: 'Embasa',                logo: logoEmbasa },
  { name: 'Viva',                  logo: null },
  { name: 'La Morenita',           logo: null },
  { name: 'Productos Real',        logo: logoProductosReal },
  { name: 'Aguas Frescas De Mexico', logo: logoAguasFrescas },
  { name: 'Primaterra',            logo: null },
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
          <h2 className="svc-heading">Everything Your Restaurant Needs. Delivered.</h2>
          <p className="svc-sub">
            One truck. One invoice. Thousands of products. From fresh produce and dairy to restaurant supplies and custom packaging, we deliver everything your business needs.
          </p>
          <div className="svc-grid">
            {SERVICES.map(s => (
              <div key={s.title} className="svc-card">
                <h3 className="svc-card-title">{s.title}</h3>
                {'subtitle' in s && s.subtitle && <p className="svc-card-subtitle">{s.subtitle}</p>}
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
            <p className="svc-overline">Also From Ray's Produce</p>
            <h2 className="svc-heading">Restaurant Supplies & Disposables</h2>
            <p className="svc-body">
              Complete your order with the restaurant essentials you use every day. From
              cups and containers to gloves, foil, bags, napkins, and cleaning supplies, we
              help keep your operation fully stocked with dependable products delivered
              alongside your food order.
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

      {/* ── Featured Brands ── */}
      <section className="services-section services-section--tinted">
        <div className="services-inner">
          <p className="svc-overline">Featured Brands</p>
          <h2 className="svc-heading">Trusted Brands. Quality Products.</h2>
          <p className="svc-sub">
            Ray's Produce proudly partners with many of the foodservice industry's leading
            manufacturers to provide dependable products, consistent quality, and competitive
            pricing for restaurants throughout Oregon and Washington.
          </p>
          <div className="brands-grid">
            {BRANDS.map(brand => (
              <div key={brand.name} className="brand-card">
                {brand.logo
                  ? <img src={brand.logo} alt={brand.name} className="brand-logo" />
                  : <span className="brand-name">{brand.name}</span>
                }
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
            <p className="svc-overline">Partnership</p>
            <h2 className="svc-heading">More Than Competitive Pricing</h2>
            <p className="svc-body">
              At Ray's Produce, we believe great service creates lasting partnerships.
              Our team works closely with every customer to provide dependable
              deliveries, quality products, and pricing that supports long-term success.
              Whether you operate a single restaurant or multiple locations, we'll help
              you find the right products at the right value.
            </p>
            <Link to="/contact" className="svc-cta-btn">Request a Custom Quote →</Link>
          </div>
          <div className="pricing-callout">
            <p className="pricing-callout-label">Our Commitment</p>
            <ul className="pricing-list">
              <li>Competitive Market Pricing</li>
              <li>No Hidden Fees</li>
              <li>Flexible Ordering</li>
              <li>Reliable Product Availability</li>
              <li>Dedicated Customer Support</li>
              <li>Long-Term Business Partnerships</li>
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
