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
  { title: 'Restaurants',  icon: '🍽️', body: 'Independent restaurants, chains, cafes, and catering operations across Oregon and Washington.' },
  { title: 'Retailers',    icon: '🏬', body: 'Grocery stores, specialty food shops, and farmers markets looking for a consistent supply partner.' },
  { title: 'Wholesalers',  icon: '📦', body: 'Regional distributors and wholesale buyers who need reliable bulk sourcing and fulfillment.' },
  { title: 'Processors',   icon: '🏭', body: 'Food manufacturing and processing facilities that require consistent raw ingredient delivery.' },
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
                <span className="customer-icon" aria-hidden="true">{c.icon}</span>
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
