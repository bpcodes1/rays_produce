import './PageBanner.css'

interface PageBannerProps {
  title: string
  subtitle?: string
  crumb: string
}

export default function PageBanner({ title, subtitle, crumb }: PageBannerProps) {
  return (
    <div className="page-banner">
      <div className="page-banner-inner">
        <p className="page-breadcrumb">Home › {crumb}</p>
        <h1 className="page-banner-title">{title}</h1>
        {subtitle && <p className="page-banner-sub">{subtitle}</p>}
      </div>
    </div>
  )
}
