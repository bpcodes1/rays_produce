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

const TIMELINE = [
  { year: '1990s', label: 'The Beginning', body: 'Ray Sosa starts selling strawberries out of the back of a truck, then works at a local farm produce store learning the business firsthand.' },
  { year: 'Newberg', label: 'First Produce Stand', body: 'Ray and his wife open a small neighborhood produce stand in Newberg, Oregon, serving the local Hispanic community and nearby restaurants.' },
  { year: '2006', label: 'First Warehouse', body: 'Ray\'s Produce moves into its first official warehouse in Tualatin, Oregon, marking the transition into a dedicated distribution operation.' },
  { year: '2013', label: 'Sherwood Expansion', body: 'The company expands into a 12,000 square foot warehouse in Sherwood, Oregon to keep up with growing customer demand.' },
  { year: '2016', label: 'Salem Facility', body: 'Ray\'s Produce purchases a 40,000 square foot warehouse in Salem, Oregon, establishing its home base in the heart of the Willamette Valley.' },
  { year: 'Today', label: '150,000 Sq Ft', body: 'Operating from a company-owned 150,000 square foot distribution center in Salem, Oregon — one of the region\'s largest independent foodservice facilities.' },
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
        subtitle="Built from hard work, family, and relationships since 1996."
      />

      {/* ── Our Story ── */}
      <section className="about-section">
        <div className="about-section-inner about-story">
          <div className="about-story-image" aria-label="Ray's Produce team or facility — photo coming soon">
            <span className="img-placeholder-text">Photo Coming Soon</span>
          </div>
          <div>
            <p className="about-overline">Our Story</p>
            <h2 className="about-heading">Built From Hard Work, Family, and Relationships</h2>
            <p className="about-body">
              Ray's Produce began in the mid-1990s with humble beginnings and a simple goal: work hard, provide
              dependable service, and build long-term relationships with customers.
            </p>
            <p className="about-body">
              Before the company officially existed, founder <strong>Ray Sosa</strong> started by selling strawberries
              out of the back of a truck throughout the local community. Shortly after, he worked at a local farm
              produce store stocking produce, where he learned the business firsthand and gained valuable knowledge
              about sourcing, quality, and customer demand.
            </p>
            <p className="about-body">
              Ray and his wife eventually opened a small neighborhood produce stand in Newberg, Oregon. At the time,
              the Hispanic food industry in the region was still small, and many Mexican restaurants struggled to find
              reliable access to produce and specialty ingredients needed to operate. Restaurant owners would frequently
              visit the produce stand asking for full cases of produce and hard-to-find products for their kitchens.
            </p>
            <p className="about-body">
              Recognizing the need, Ray began personally delivering products directly to local restaurants. What started
              as a few deliveries quickly became the foundation of what would eventually grow into the foodservice
              distribution business Ray's Produce is known for today.
            </p>
          </div>
        </div>
      </section>

      {/* ── Early Days ── */}
      <section className="about-section about-section--tinted">
        <div className="about-section-inner">
          <p className="about-overline">The Early Years</p>
          <h2 className="about-heading">Growing From a Garage to a Distribution Center</h2>
          <p className="about-body" style={{ maxWidth: 760 }}>
            The original produce stand remained open as the retail side of the company while delivery operations
            continued expanding. That original retail business still operates today and remains an important part
            of the company's history.
          </p>
          <p className="about-body" style={{ maxWidth: 760 }}>
            As demand grew, Ray and his wife purchased the neighboring house next to the produce stand. The property
            included a detached garage that became the company's very first office and warehouse. The front room served
            as office space while part of the garage was converted into a walk-in cooler and small loading operation.
            As business continued growing, operations expanded into the backyard under covered work areas to support
            additional inventory and deliveries.
          </p>
          <p className="about-body" style={{ maxWidth: 760 }}>
            In the early years, the business operated with only a handful of employees and family members helping
            with warehouse work, purchasing, deliveries, and customer service. Growth was not easy — limited
            resources, minimal staffing, and constant reinvestment into the business made every step forward
            difficult.
          </p>
          <p className="about-body" style={{ maxWidth: 760 }}>
            One major turning point came when a fire damaged the small walk-in cooler at the original operation.
            That challenge forced the company to think bigger and accelerated the decision to expand into a
            dedicated warehouse facility.
          </p>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="about-section">
        <div className="about-section-inner">
          <p className="about-overline">30 Years of Growth</p>
          <h2 className="about-heading">Our Expansion Timeline</h2>
          <div className="timeline">
            {TIMELINE.map((item) => (
              <div key={item.year} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3 className="timeline-label">{item.label}</h3>
                  <p className="timeline-body">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Today ── */}
      <section className="about-section about-section--dark">
        <div className="about-section-inner">
          <p className="about-overline" style={{ color: '#a8e070' }}>Where We Are Today</p>
          <h2 className="about-heading" style={{ color: '#ffffff' }}>One of the Northwest's Leading Independent Distributors</h2>
          <div className="today-grid">
            <div className="today-block">
              <p className="today-body">
                Today, Ray's Produce serves nearly <strong>2,000 customers throughout the Pacific Northwest</strong> and
                has grown into one of the region's leading independent foodservice distributors while continuing
                to maintain deep roots in the Hispanic food industry.
              </p>
              <p className="today-body">
                The company now employs <strong>over 100 team members</strong> across warehouse operations,
                transportation, purchasing, sales, office administration, and retail operations.
              </p>
            </div>
            <div className="today-block">
              <p className="today-body">
                In recent years, Ray's Produce launched its own <strong>tortilla program</strong> to support growing
                customer demand after local manufacturers struggled to maintain consistent supply availability.
              </p>
              <p className="today-body">
                The company also launched <strong>Restogo</strong>, a private-label packaging and direct import division
                focused on importing disposable products directly from overseas while creating custom branded
                packaging solutions for restaurants.
              </p>
            </div>
          </div>
          <p className="mission-quote" style={{ marginTop: 40 }}>
            "Work hard. Build relationships. Take care of customers. Continue growing."
          </p>
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
            <h2 className="about-heading">Proudly Family-Owned. Proudly Bilingual.</h2>
            <p className="about-body">
              For nearly 30 years, Ray's Produce has been built on hard work, family
              values, and lasting relationships. As a family-owned business, we're proud to
              serve restaurants and foodservice operators throughout Oregon and
              Washington with dependable service and personal attention.
            </p>
            <p className="about-body">
              Our bilingual team speaks both English and Spanish, making it easy for
              customers, vendors, and partners to communicate in the language they're
              most comfortable with. Whether you're placing an order, opening a new
              account, or growing your business, we're here to help.
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

      {/* ── Team ── */}
      <section className="about-section">
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
          <Link to="/contact" className="about-cta-btn">Talk to Sales →</Link>
        </div>
      </section>
    </>
  )
}
