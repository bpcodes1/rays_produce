export default function SchemaMarkup() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://raysproduce.com/#business',
        'name': "Ray's Produce Inc.",
        'description':
          "Family-owned produce distributor serving restaurants, retailers, wholesalers, and processors across Oregon and Washington since 1996.",
        'foundingDate': '1996',
        'telephone': '+1-503-691-1460',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '4004 Fairview Industrial Dr SE',
          'addressLocality': 'Salem',
          'addressRegion': 'OR',
          'postalCode': '97302',
          'addressCountry': 'US',
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 44.8848,
          'longitude': -122.9845,
        },
        'areaServed': [
          { '@type': 'State', 'name': 'Oregon' },
          { '@type': 'State', 'name': 'Washington' },
        ],
        'url': 'https://raysproduce.com',
        'priceRange': '$$',
      },
      {
        '@type': 'Organization',
        '@id': 'https://raysproduce.com/#organization',
        'name': "Ray's Produce Inc.",
        'url': 'https://raysproduce.com',
        'foundingDate': '1996',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '4004 Fairview Industrial Dr SE',
          'addressLocality': 'Salem',
          'addressRegion': 'OR',
          'postalCode': '97302',
          'addressCountry': 'US',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
