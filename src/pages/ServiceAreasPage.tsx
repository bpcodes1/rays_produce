import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageBanner from '../components/PageBanner'
import ServiceMap from '../components/ServiceMap'
import './ServiceAreasPage.css'

const REGIONS = [
  {
    state: 'Oregon',
    areas: [
      { name: 'Portland Metro',          body: 'Portland, Beaverton, Hillsboro, Gresham, Lake Oswego, Tigard, and surrounding cities.' },
      { name: 'Salem / Willamette Valley', body: 'Salem, Keizer, Woodburn, Silverton, Albany, Corvallis, and the greater valley.' },
      { name: 'Eugene / Springfield',    body: 'Eugene, Springfield, Junction City, Cottage Grove, and nearby areas.' },
      { name: 'Southern Oregon',         body: 'Medford, Ashland, Grants Pass, and surrounding communities.' },
    ],
  },
  {
    state: 'Washington',
    areas: [
      { name: 'Puget Sound',         body: 'Seattle, Tacoma, Olympia, Bellevue, Renton, Kent, and the broader Puget Sound region.' },
      { name: 'Eastern Washington',  body: 'Spokane, Yakima, the Tri-Cities, and surrounding Eastern WA communities.' },
    ],
  },
]

const FAQS = [
  {
    q: 'What areas do you deliver to?',
    a: 'We serve 50+ cities across Oregon and Washington, including the Portland Metro, Salem, Eugene, Puget Sound, Eastern Washington, and more. Use the map above to find your city.',
  },
  {
    q: 'What is the minimum order?',
    a: 'Minimum order requirements vary depending on your location and product mix. Contact us for details specific to your area and business type.',
  },
  {
    q: 'How often do you deliver?',
    a: 'We run daily delivery routes across our service area. Depending on your location, delivery may be available multiple days per week.',
  },
  {
    q: 'How do I get started?',
    a: 'Fill out the quote request form on our Contact page. Our team will reach out within 1 business day to discuss your needs and set up your account.',
  },
  {
    q: 'Do you work with small restaurants?',
    a: 'Yes. We work with businesses of all sizes — from single-location restaurants to regional chains and wholesale operations.',
  },
]

export default function ServiceAreasPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <SEO
        title="Service Areas — Ray's Produce Oregon & Washington"
        description="Ray's Produce delivers fresh produce and food products to 50+ cities across Oregon and Washington — Portland Metro, Salem, Eugene, Puget Sound, Eastern Washington, and more."
        canonical="/service-areas"
      />

      <PageBanner
        title="Where We Deliver"
        subtitle="Daily routes across 50+ cities in Oregon and Washington."
      />

      {/* ── Map ── */}
      <ServiceMap showAllPins />

      {/* ── Regional Breakdown ── */}
      <section className="sa-section sa-section--tinted">
        <div className="sa-inner">
          <p className="sa-overline">Coverage</p>
          <h2 className="sa-heading">Regions We Serve</h2>
          <p className="sa-sub">
            From the Oregon Coast to Eastern Washington — we run daily routes
            throughout the Pacific Northwest. Don't see your city? Contact us.
          </p>
          <div className="sa-regions">
            {REGIONS.map(r => (
              <div key={r.state} className="sa-state-block">
                <p className="sa-state-label">{r.state}</p>
                <div className="sa-area-grid">
                  {r.areas.map(a => (
                    <div key={a.name} className="sa-area-card">
                      <h3 className="sa-area-name">{a.name}</h3>
                      <p className="sa-area-body">{a.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="sa-section">
        <div className="sa-faq-inner">
          <p className="sa-overline">Common Questions</p>
          <h2 className="sa-heading">Frequently Asked Questions</h2>
          <div className="sa-faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`sa-faq-item${openFaq === i ? ' is-open' : ''}`}>
                <button
                  className="sa-faq-question"
                  onClick={() => setOpenFaq(prev => prev === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span className="sa-faq-chevron" aria-hidden="true">{openFaq === i ? '▾' : '▸'}</span>
                </button>
                <div className="sa-faq-answer-wrapper">
                  <p className="sa-faq-answer">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="sa-cta">
        <div className="sa-cta-inner">
          <h2>Ready to Start Delivery to Your Business?</h2>
          <p>Tell us where you are and what you need — we'll take it from there.</p>
          <Link to="/contact" className="sa-cta-btn">Get a Quote →</Link>
        </div>
      </section>
    </>
  )
}
