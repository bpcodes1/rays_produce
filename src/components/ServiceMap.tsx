import { useState } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps'
import './ServiceMap.css'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

const VISIBLE_FIPS = new Set(['06', '16', '30', '32', '41', '53']) // CA, ID, MT, NV, OR, WA

interface CityService {
  label: string
  href: string
}

interface City {
  name: string
  state: string
  coords?: [number, number]  // only needed for cities shown as map markers
  hq?: boolean
  anchor?: 'start' | 'middle' | 'end'
  dx?: number
  dy?: number
  services?: CityService[]
}

interface AreaGroup {
  name: string
  hq?: boolean
  cities: City[]
}

const AREAS: AreaGroup[] = [
  {
    name: 'Salem / Mid-Valley',
    hq: true,
    cities: [
      {
        name: 'Salem',
        state: 'OR',
        coords: [-123.0351, 44.9429],
        hq: true,
        anchor: 'end',
        dx: -8,
        dy: -8,
      },
      { name: 'Keizer',       state: 'OR' },
      { name: 'Woodburn',     state: 'OR' },
      { name: 'Albany',       state: 'OR' },
      { name: 'Corvallis',    state: 'OR' },
      { name: 'Lebanon',      state: 'OR' },
      { name: 'Independence', state: 'OR' },
      { name: 'Monmouth',     state: 'OR' },
      { name: 'Stayton',      state: 'OR' },
      { name: 'Dallas',       state: 'OR' },
      { name: 'Brooks',       state: 'OR' },
    ],
  },
  {
    name: 'Portland Metro',
    cities: [
      {
        name: 'Portland',
        state: 'OR',
        coords: [-122.6765, 45.46],
        anchor: 'end',
        dx: -8,
        dy: 4,
        services: [
          { label: 'Fresh Delivery', href: '/portland/delivery' },
          { label: 'Wholesale', href: '/portland/wholesale' },
          { label: 'Catering Supply', href: '/portland/catering' },
        ],
      },
      {
        name: 'Gresham',
        state: 'OR',
        coords: [-122.4302, 45.4984],
        anchor: 'start',
        dx: 8,
        dy: 4,
      },
      { name: 'Beaverton',  state: 'OR' },
      { name: 'Hillsboro',  state: 'OR' },
      { name: 'Tigard',     state: 'OR' },
      { name: 'Aloha',      state: 'OR' },
      { name: 'Cornelius',  state: 'OR' },
      { name: 'Tualatin',   state: 'OR' },
      { name: 'Canby',      state: 'OR' },
      { name: 'McMinnville', state: 'OR' },
      { name: 'Hubbard',    state: 'OR' },
    ],
  },
  {
    name: 'South Willamette Valley',
    cities: [
      {
        name: 'Eugene',
        state: 'OR',
        coords: [-123.0868, 44.0521],
        anchor: 'end',
        dx: -8,
        dy: 4,
        services: [
          { label: 'Fresh Delivery', href: '/eugene/delivery' },
        ],
      },
      { name: 'Springfield',    state: 'OR' },
      { name: 'Junction City',  state: 'OR' },
      { name: 'Cottage Grove',  state: 'OR' },
      { name: 'Florence',       state: 'OR' },
      { name: 'Coos Bay',       state: 'OR' },
    ],
  },
  {
    name: 'Coast / Other Oregon',
    cities: [
      {
        name: 'Lincoln City',
        state: 'OR',
        coords: [-124.0074, 44.9582],
        anchor: 'end',
        dx: -8,
        dy: 4,
      },
      { name: 'Warrenton',    state: 'OR' },
      { name: 'Hood River',   state: 'OR' },
      { name: 'The Dalles',   state: 'OR' },
      { name: 'Boardman',     state: 'OR' },
      { name: 'Hermiston',    state: 'OR' },
      { name: 'Irrigon',      state: 'OR' },
      { name: 'Umatilla',     state: 'OR' },
      { name: 'Brownsville',  state: 'OR' },
    ],
  },
  {
    name: 'Central Oregon',
    cities: [
      {
        name: 'Bend',
        state: 'OR',
        coords: [-121.3153, 44.0582],
        anchor: 'start',
        dx: 8,
        dy: 4,
      },
      { name: 'Redmond',        state: 'OR' },
      { name: 'Madras',         state: 'OR' },
      { name: 'Prineville Area', state: 'OR' },
    ],
  },
  {
    name: 'Southern Oregon',
    cities: [
      {
        name: 'Medford',
        state: 'OR',
        coords: [-122.8756, 42.3265],
        anchor: 'start',
        dx: 8,
        dy: 4,
      },
      { name: 'Grants Pass',   state: 'OR' },
      { name: 'Roseburg',      state: 'OR' },
      { name: 'Ashland',       state: 'OR' },
      { name: 'Klamath Falls', state: 'OR' },
      { name: 'Merrill',       state: 'OR' },
    ],
  },
  {
    name: 'Southwest WA',
    cities: [
      {
        name: 'Vancouver',
        state: 'WA',
        coords: [-122.6615, 45.6387],
        anchor: 'start',
        dx: 8,
        dy: 4,
      },
      { name: 'Camas',        state: 'WA' },
      { name: 'Woodland',     state: 'WA' },
      { name: 'Battle Ground', state: 'WA' },
      { name: 'Long Beach',   state: 'WA' },
    ],
  },
  {
    name: 'Puget Sound',
    cities: [
      {
        name: 'Tacoma',
        state: 'WA',
        coords: [-122.4443, 47.2529],
        anchor: 'start',
        dx: 8,
        dy: 4,
      },
      {
        name: 'Seattle',
        state: 'WA',
        coords: [-122.3321, 47.6062],
        anchor: 'middle',
        dx: 0,
        dy: -10,
        services: [
          { label: 'Fresh Delivery', href: '/seattle/delivery' },
          { label: 'Wholesale', href: '/seattle/wholesale' },
        ],
      },
      { name: 'Renton',            state: 'WA' },
      { name: 'Des Moines',        state: 'WA' },
      { name: 'Issaquah',          state: 'WA' },
      { name: 'Olympia',           state: 'WA' },
      { name: 'Puyallup',          state: 'WA' },
      { name: 'Bonney Lake',       state: 'WA' },
      { name: 'Graham',            state: 'WA' },
      { name: 'Mountlake Terrace', state: 'WA' },
      { name: 'Marysville',        state: 'WA' },
      { name: 'Tukwila',           state: 'WA' },
      { name: 'Bellingham',        state: 'WA' },
    ],
  },
  {
    name: 'Eastern Washington',
    cities: [
      {
        name: 'Spokane',
        state: 'WA',
        coords: [-117.4260, 47.6588],
        anchor: 'start',
        dx: 8,
        dy: -8,
      },
      { name: 'Spokane Valley', state: 'WA' },
      {
        name: 'Yakima',
        state: 'WA',
        coords: [-120.5080, 46.6021],
        anchor: 'start',
        dx: 8,
        dy: 4,
      },
      { name: 'Wapato',      state: 'WA' },
      { name: 'Sunnyside',   state: 'WA' },
      { name: 'Grandview',   state: 'WA' },
      { name: 'Pasco',       state: 'WA' },
      { name: 'Kennewick',   state: 'WA' },
      { name: 'Richland',    state: 'WA' },
      { name: 'Prosser',     state: 'WA' },
      { name: 'Toppenish',   state: 'WA' },
      { name: 'Union Gap',   state: 'WA' },
      { name: 'Benton City', state: 'WA' },
      { name: 'Walla Walla', state: 'WA' },
    ],
  },
]

// Only cities with coords get map markers
const MAP_CITIES = AREAS.flatMap(a => a.cities).filter(c => c.coords != null)

export default function ServiceMap() {
  const [expandedArea, setExpandedArea] = useState<string | null>(null)
  const [selectedCity, setSelectedCity] = useState<string | null>(null)

  const allCities = AREAS.flatMap(a => a.cities)
  const selected = allCities.find(c => c.name === selectedCity) ?? null

  function toggleArea(name: string) {
    setExpandedArea(prev => (prev === name ? null : name))
    setSelectedCity(null)
  }

  function handleCityClick(city: City) {
    if (city.services) {
      setSelectedCity(prev => (prev === city.name ? null : city.name))
    }
  }

  return (
    <section className="service-map-section">
      <div className="areas">
        {/* Left column: map */}
        <div className="map-card">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ center: [-120.5, 45.5], scale: 2800 }}
            width={600}
            height={480}
            style={{ width: '100%', height: '100%' }}
            aria-hidden="true"
          >
            <defs>
              <pattern id="map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#c0d0b8" strokeWidth="0.5" />
              </pattern>
            </defs>

            <rect x={0} y={0} width={600} height={480} fill="#e4ede0" />
            <rect x={0} y={0} width={600} height={480} fill="url(#map-grid)" />

            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies
                  .filter(geo => VISIBLE_FIPS.has(String(geo.id).padStart(2, '0')))
                  .map(geo => {
                    const fips = String(geo.id).padStart(2, '0')
                    const isFaded = fips === '16' || fips === '30'
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isFaded ? '#e4ede0' : '#aecf98'}
                        stroke={isFaded ? '#c8d4c4' : '#82b56a'}
                        strokeWidth={0.5}
                        style={{
                          default: { outline: 'none' },
                          hover: { outline: 'none' },
                          pressed: { outline: 'none' },
                        }}
                      />
                    )
                  })
              }
            </Geographies>

            {MAP_CITIES.map(city => (
              <Marker key={city.name} coordinates={city.coords!}>
                <circle
                  r={city.hq ? 6 : 3.5}
                  fill={city.hq ? '#e85d04' : '#1a3d0e'}
                  stroke="#ffffff"
                  strokeWidth={city.hq ? 2 : 1.5}
                />
                <text
                  textAnchor={city.anchor ?? 'start'}
                  dx={city.dx ?? 8}
                  dy={city.dy ?? 4}
                  fontSize={9}
                  fontFamily="'Courier New', monospace"
                  fill="#1a1a1a"
                  stroke="#e4ede0"
                  strokeWidth={2.5}
                  paintOrder="stroke"
                >
                  {city.name}
                </text>
              </Marker>
            ))}

            <text
              x={8}
              y={472}
              fontSize={8}
              fontFamily="'Courier New', monospace"
              fill="#2d5420"
              opacity={0.4}
              letterSpacing="0.1em"
            >
              RAY'S PRODUCE SERVICE AREA
            </text>
          </ComposableMap>
        </div>

        {/* Right column: area accordion + panel + foot */}
        <div className="areas-right">
          <div className="area-groups">
            {AREAS.map(area => {
              const isOpen = expandedArea === area.name
              return (
                <div key={area.name} className={`area-group${isOpen ? ' is-open' : ''}`}>
                  <button
                    className="area-group-header"
                    onClick={() => toggleArea(area.name)}
                    aria-expanded={isOpen}
                  >
                    <span className="area-group-name">
                      {area.hq && <span className="area-hq-star" aria-label="Headquarters">★</span>}
                      {area.name}
                    </span>
                    <span className="area-group-chevron" aria-hidden="true">
                      {isOpen ? '▾' : '▸'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="area-group-cities">
                      {area.cities.map(city => {
                        const isSelected = selectedCity === city.name
                        const cls = [
                          'area-city',
                          city.hq ? 'is-hq' : '',
                          isSelected ? 'is-selected' : '',
                        ]
                          .filter(Boolean)
                          .join(' ')

                        const inner = (
                          <>
                            <span className="city-name">{city.name}</span>
                            <span className="city-state">{city.state}</span>
                          </>
                        )

                        return city.services ? (
                          <button
                            key={city.name}
                            className={cls}
                            onClick={() => handleCityClick(city)}
                            aria-expanded={isSelected}
                          >
                            {inner}
                          </button>
                        ) : (
                          <a key={city.name} href="#quote" className={cls}>
                            {inner}
                          </a>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {selected?.services && (
            <div className="city-services-panel">
              <div className="city-services-header">
                <span className="panel-label">{selected.name.toUpperCase()} SERVICES</span>
                <button
                  className="panel-close"
                  onClick={() => setSelectedCity(null)}
                  aria-label="Close panel"
                >
                  ✕
                </button>
              </div>
              {selected.services.map(svc => (
                <a key={svc.href} href={svc.href} className="city-service-link">
                  <span>{svc.label}</span>
                  <span className="link-arrow">→</span>
                </a>
              ))}
            </div>
          )}

          <div className="area-foot">
            <p>
              Don't see your city? Fill out the form — we may still be able to serve your location.
            </p>
            <a href="#quote" className="cta-button">Get a Quote</a>
          </div>
        </div>
      </div>
    </section>
  )
}
