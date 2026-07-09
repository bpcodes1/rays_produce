import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  canonical: string
  ogImage?: string
}

const SITE_NAME = "Ray's Produce Inc."
const BASE_URL  = 'https://raysproduce.com'
const DEFAULT_OG = `${BASE_URL}/og-image.png`

export default function SEO({ title, description, canonical, ogImage = DEFAULT_OG }: SEOProps) {
  const fullUrl   = `${BASE_URL}${canonical}`
  const fullTitle = `${title} | ${SITE_NAME}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description"        content={description} />
      <link rel="canonical"           href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={fullUrl} />
      <meta property="og:image"       content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />
    </Helmet>
  )
}
