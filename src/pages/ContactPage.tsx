import { useState } from 'react'
import SEO from '../components/SEO'
import PageBanner from '../components/PageBanner'
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


export default function ContactPage() {
  const [form, setForm]       = useState<FormData>(INITIAL)
  const [submitted, setSubmitted] = useState(false)

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
                <strong>Salem</strong><br />
                3011 Silverton Rd NE<br />
                Salem, OR 97301<br />
                <br />
                <strong>Newberg</strong><br />
                205 N Main St<br />
                Newberg, OR 97132
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

      {/* ── Social Media ── */}
      <section className="contact-section contact-section--tinted">
        <div className="social-inner">
          <p className="social-overline">Connect With Us</p>
          <h2 className="social-heading">Find Us Online</h2>
          <div className="social-links">

            <a href="https://instagram.com/PLACEHOLDER" target="_blank" rel="noopener noreferrer" className="social-card">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="social-name">Instagram</span>
            </a>

            <a href="https://facebook.com/PLACEHOLDER" target="_blank" rel="noopener noreferrer" className="social-card">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="social-name">Facebook</span>
            </a>

            <a href="https://tiktok.com/@PLACEHOLDER" target="_blank" rel="noopener noreferrer" className="social-card">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              <span className="social-name">TikTok</span>
            </a>

            <a href="mailto:PLACEHOLDER@email.com" className="social-card">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span className="social-name">Email</span>
            </a>

          </div>
        </div>
      </section>

    </>
  )
}
