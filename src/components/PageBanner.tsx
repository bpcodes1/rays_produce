import heroBg from '../hero3.jpg'
import './PageBanner.css'

interface PageBannerProps {
  title: string
  subtitle?: string
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <div className="page-banner" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="page-banner-overlay" />
      <div className="page-banner-inner">
        <h1 className="page-banner-title">{title}</h1>
        {subtitle && <p className="page-banner-sub">{subtitle}</p>}
      </div>
    </div>
  )
}
