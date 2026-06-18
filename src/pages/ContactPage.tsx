import { useState } from 'react'
import SEO from '../components/SEO'
import PageBanner from '../components/PageBanner'
import ServiceMap from '../components/ServiceMap'
import './ContactPage.css'

interface FormData {
  businessName: string
  contactName: string
  email: string
  phone: string
  city: string
  businessType: string
  volume: string
  heardAbout: string
  message: string
}

const INITIAL: FormData = {
  businessName: '',
  contactName: '',
  email: '',
  phone: '',
  city: '',
  businessType: '',
  volume: '',
  heardAbout: '',
  message: '',
}

const FAQS = [
  {
    q: 'What areas do you deliver to?',
    a: 'We serve 50+ cities across Oregon and Washington, including the Portland Metro, Salem, Eugene, Puget Sound, Eastern Washington, and more. Use the map below to find your city.',
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
    a: 'Fill out the quote request form on this page. Our team will reach out within 1 business day to discuss your needs and set up your account.',
  },
  {
    q: 'Do you work with small restaurants?',
    a: 'Yes. We work with businesses of all sizes — from single-location restaurants to regional chains and wholesale operations.',
  },
]

export default function ContactPage() {
  const [form, setForm]       = useState<FormData>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: wire up to backend / email service (e.g. Formspree, Netlify Forms)
    setSubmitted(true)
  }

  return (
    <>
      <SEO
        title="Get a Quote — Contact Ray's Produce"
        description="Ready to partner with Ray's Produce? Request a custom quote for your restaurant, retail, or wholesale operation. Serving Oregon and Washington with daily produce delivery."
        canonical="/contact"
      />

      <PageBanner
        title="Let's Work Together"
        subtitle="Fill out the form below and we'll get back to you within 1 business day."
        crumb="Contact"
      />

      {/* ── Form + Details ── */}
      <section className="contact-section" id="quote">
        <div className="contact-inner">

          {/* Form */}
          <div className="contact-form-col">
            <h2 className="contact-col-heading">Request a Quote</h2>
            {submitted ? (
              <div className="form-success">
                <p className="form-success-title">Thank you!</p>
                <p>We've received your request and will be in touch within 1 business day.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="businessName">Business Name <span aria-hidden="true">*</span></label>
                    <input id="businessName" name="businessName" type="text" required value={form.businessName} onChange={handleChange} placeholder="Your Restaurant or Business" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="contactName">Contact Name <span aria-hidden="true">*</span></label>
                    <input id="contactName" name="contactName" type="text" required value={form.contactName} onChange={handleChange} placeholder="First & Last Name" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email">Email Address <span aria-hidden="true">*</span></label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@business.com" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number <span aria-hidden="true">*</span></label>
                    <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="(503) 000-0000" />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="city">City / Location <span aria-hidden="true">*</span></label>
                  <input id="city" name="city" type="text" required value={form.city} onChange={handleChange} placeholder="Salem, OR" />
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="businessType">Type of Business <span aria-hidden="true">*</span></label>
                    <select id="businessType" name="businessType" required value={form.businessType} onChange={handleChange}>
                      <option value="">Select one…</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="retailer">Retailer / Grocery</option>
                      <option value="wholesaler">Wholesaler</option>
                      <option value="processor">Food Processor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="volume">Estimated Weekly Volume</label>
                    <select id="volume" name="volume" value={form.volume} onChange={handleChange}>
                      <option value="">Select range…</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-2000">$500 – $2,000</option>
                      <option value="2000-5000">$2,000 – $5,000</option>
                      <option value="5000-plus">$5,000+</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="heardAbout">How Did You Hear About Us?</label>
                  <input id="heardAbout" name="heardAbout" type="text" value={form.heardAbout} onChange={handleChange} placeholder="Google, referral, etc." />
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message / Special Requests</label>
                  <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Tell us about your business and what you're looking for…" />
                </div>
                <button type="submit" className="form-submit">Request a Quote →</button>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <aside className="contact-details-col">
            <h2 className="contact-col-heading">Contact Details</h2>
            <div className="contact-detail-card">
              <p className="detail-label">Phone</p>
              <a href="tel:+15036911460" className="detail-value">(503) 691-1460</a>

              <p className="detail-label">Address</p>
              <address className="detail-value detail-address">
                4004 Fairview Industrial Dr SE<br />
                Salem, OR 97302
              </address>

              <p className="detail-label">Business Hours</p>
              <div className="detail-value detail-hours">
                <p><strong>Wholesale Office</strong><br />Mon–Fri: 8:00 AM – 4:00 PM</p>
                <p><strong>Salem Public Store</strong><br />Tue–Sun: 8:00 AM – 8:00 PM</p>
              </div>

              <p className="detail-label">Email</p>
              <p className="detail-value detail-placeholder">Email coming soon</p>
            </div>

            <div className="contact-note">
              <p className="contact-note-label">★ Headquarters</p>
              <p>Salem, Oregon — family owned and operated since 1996.</p>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Service Area Map ── */}
      <div id="service-areas">
        <ServiceMap />
      </div>

      {/* ── FAQ ── */}
      <section className="contact-section contact-section--tinted">
        <div className="contact-faq-inner">
          <p className="faq-overline">Common Questions</p>
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' is-open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(prev => prev === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span className="faq-chevron" aria-hidden="true">{openFaq === i ? '▾' : '▸'}</span>
                </button>
                {openFaq === i && <p className="faq-answer">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
