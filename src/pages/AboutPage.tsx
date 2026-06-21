import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageBanner from '../components/PageBanner'
import './AboutPage.css'

const VALUES = [
  {
    title: 'Trust',
    body: 'Every order, every delivery, every interaction is built on honesty and accountability. Our clients depend on us — and we take that seriously.',
  },
  {
    title: 'Reliability',
    body: 'When you need it, we\'re there. Consistent schedules, dependable supply, and zero surprises on delivery day.',
  },
  {
    title: 'Exceptional Service',
    body: 'Real people who know your business, your preferences, and pick up the phone when you call.',
  },
]

const TEAM_PLACEHOLDERS = [
  { name: 'Team Member', role: 'Role Coming Soon' },
  { name: 'Team Member', role: 'Role Coming Soon' },
  { name: 'Team Member', role: 'Role Coming Soon' },
  { name: 'Team Member', role: 'Role Coming Soon' },
]

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us — Family-Owned Since 1996"
        description="Learn the story behind Ray's Produce Inc. — a family-owned food distributor in Salem, Oregon dedicated to quality, community, and lasting partnerships since 1996."
        canonical="/about"
      />

      <PageBanner
        title="About Ray's Produce"
        subtitle="Family-owned. Community-driven. Delivering since 1996."
      />

      {/* ── Our Story ── */}
      <section className="about-section">
        <div className="about-section-inner about-story">
          <div className="about-story-image" aria-label="Ray's Produce team or facility — photo coming soon">
            <span className="img-placeholder-text">Photo Coming Soon</span>
          </div>
          <div>
            <p className="about-overline">Our Story</p>
            <h2 className="about-heading">A Family Business Built on Trust</h2>
            <p className="about-body">
              Ray's Produce Inc. was founded in 1996 in Salem, Oregon as a family-owned
              produce store specializing in locally grown produce and seasonal items.
              What started as a community-focused retail store grew into one of the Pacific
              Northwest's trusted food distributors.
            </p>
            <p className="about-body">
              For nearly three decades, we've served restaurants, retailers, wholesalers,
              and processors across Oregon and Washington — building lasting partnerships
              along the way. Our roots in Salem have kept us grounded in what matters most:
              quality products, honest pricing, and relationships that stand the test of time.
            </p>
            <p className="about-body">
              Today, Ray's Produce Inc. operates daily delivery routes across 50+ cities,
              continuing the same family-owned tradition that started in 1996.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="about-section about-section--dark">
        <div className="about-section-inner mission-block">
          <p className="mission-label">Our Promise</p>
          <blockquote className="mission-quote">
            "Competitive prices and lasting partnerships — that's Ray's Produce promise.
            We prioritize forging enduring relationships built on trust, reliability,
            and exceptional customer service. Join us today and experience how we can
            help elevate your business to new heights."
          </blockquote>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="about-section">
        <div className="about-section-inner">
          <p className="about-overline">What We Stand For</p>
          <h2 className="about-heading">Our Core Values</h2>
          <div className="values-grid">
            {VALUES.map(v => (
              <div key={v.title} className="values-card">
                <h3 className="values-card-title">{v.title}</h3>
                <p className="values-card-body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Community & Culture ── */}
      <section className="about-section about-section--tinted">
        <div className="about-section-inner culture-block">
          <div className="culture-content">
            <p className="about-overline">Our Heritage</p>
            <h2 className="about-heading">Proudly Latino-Owned & Bilingual</h2>
            <p className="about-body">
              Ray's Produce Inc. was built on the values of hard work, family, and
              community — values deeply rooted in Latino culture. As a proudly
              Latino-owned business, we understand the importance of trust, personal
              relationships, and taking care of the people around you.
            </p>
            <p className="about-body">
              Our bilingual team speaks Spanish and English fluently, making it easier
              for Spanish-speaking customers, partners, and vendors to do business with
              us comfortably and confidently. No language barriers, no intermediaries —
              just direct, honest communication.
            </p>
            <p className="about-body">
              We are proud to serve Salem's vibrant Latino community and the broader
              Pacific Northwest, reflecting the diversity and strength of the region
              we call home.
            </p>
          </div>
          <div className="culture-callout">
            <p className="culture-callout-flag">🌎</p>
            <h3 className="culture-callout-title">Se Habla Español</h3>
            <p className="culture-callout-body">
              Nuestro equipo habla español con fluidez. Estamos aquí para servirle
              con la misma dedicación y calidad que nos caracteriza.
            </p>
            <p className="culture-callout-english">
              Our team is fully bilingual. Reach out in English or Spanish —
              whichever is most comfortable for you.
            </p>
            <a href="tel:+15036911460" className="culture-callout-phone">(503) 691-1460</a>
          </div>
        </div>
      </section>

      {/* ── Specialties ── */}
      <section className="about-section">
        <div className="about-section-inner about-specialties">
          <div>
            <p className="about-overline">What We Do Best</p>
            <h2 className="about-heading">Locally Grown. Freshly Delivered.</h2>
            <p className="about-body">
              We specialize in sourcing high-quality, locally grown produce and
              seasonal items — connecting Pacific Northwest farms with the businesses
              that serve their communities.
            </p>
            <ul className="specialties-list">
              <li>Locally grown fruits and vegetables</li>
              <li>Seasonal produce and specialty items</li>
              <li>Bakery and bread product distribution</li>
              <li>Daily fresh delivery routes</li>
              <li>Flexible order sizes for any business</li>
              <li>Personalized account management</li>
            </ul>
          </div>
          <div className="about-specialties-image" aria-label="Fresh produce — photo coming soon">
            <span className="img-placeholder-text">Photo Coming Soon</span>
          </div>
        </div>
      </section>

      {/* ── Community ── */}
      <section className="about-section">
        <div className="about-section-inner community-block">
          <p className="about-overline">Community Impact</p>
          <h2 className="about-heading">Rooted in the Pacific Northwest</h2>
          <p className="about-body" style={{ maxWidth: 640 }}>
            Ray's Produce isn't just a business — it's part of the community. By
            sourcing locally, employing local workers, and serving local businesses,
            we help keep the Pacific Northwest food economy strong.
          </p>
          <div className="community-grid">
            <div className="community-card">
              <h3>Local Job Creation</h3>
              <p>Employing drivers, warehouse staff, and customer service professionals across Salem and beyond.</p>
            </div>
            <div className="community-card">
              <h3>Supporting Local Farms</h3>
              <p>Partnering with Oregon and Washington growers to bring locally sourced products to market.</p>
            </div>
            <div className="community-card">
              <h3>Food Service Stability</h3>
              <p>Providing consistent, reliable supply to restaurants and retailers that feed our communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="about-section about-section--tinted">
        <div className="about-section-inner">
          <p className="about-overline">The People Behind Ray's</p>
          <h2 className="about-heading">Meet Our Team</h2>
          <p className="about-body" style={{ maxWidth: 520 }}>
            Team photos and bios coming soon. We're proud of the people who make
            Ray's Produce run every day.
          </p>
          <div className="team-grid">
            {TEAM_PLACEHOLDERS.map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-photo-placeholder" aria-label="Team member photo coming soon" />
                <p className="team-name">{member.name}</p>
                <p className="team-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="about-cta-inner">
          <h2>Partner With a Team That Cares About Your Business</h2>
          <p>Reach out today — we'll put together a custom quote for your operation.</p>
          <Link to="/contact" className="about-cta-btn">Get a Quote →</Link>
        </div>
      </section>
    </>
  )
}
