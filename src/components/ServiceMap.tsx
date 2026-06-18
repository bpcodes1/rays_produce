import { useState } from 'react'
import { Link } from 'react-router-dom'
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
  coords?: [number, number]
  hq?: boolean
  anchor?: 'start' | 'middle' | 'end'
  dx?: number
  dy?: number
  services?: CityService[]
  pinOnly?: boolean  // dot only, no label
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
      { name: 'Keizer',       state: 'OR', coords: [-123.0263, 44.9990], pinOnly: true },
      { name: 'Woodburn',     state: 'OR', coords: [-122.8540, 45.1543], pinOnly: true },
      { name: 'Albany',       state: 'OR', coords: [-123.1058, 44.6365], pinOnly: true },
      { name: 'Corvallis',    state: 'OR', coords: [-123.2620, 44.5646], pinOnly: true },
      { name: 'Lebanon',      state: 'OR', coords: [-122.9079, 44.5360], pinOnly: true },
      { name: 'Independence', state: 'OR', coords: [-123.1854, 44.8540], pinOnly: true },
      { name: 'Monmouth',     state: 'OR', coords: [-123.2318, 44.8493], pinOnly: true },
      { name: 'Stayton',      state: 'OR', coords: [-122.7940, 44.8015], pinOnly: true },
      { name: 'Dallas',       state: 'OR', coords: [-123.3165, 44.9193], pinOnly: true },
      { name: 'Brooks',       state: 'OR', coords: [-122.9654, 45.0726], pinOnly: true },
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
      { name: 'Beaverton',   state: 'OR', coords: [-122.8068, 45.4871], pinOnly: true },
      { name: 'Hillsboro',   state: 'OR', coords: [-122.9898, 45.5229], pinOnly: true },
      { name: 'Tigard',      state: 'OR', coords: [-122.7715, 45.4312], pinOnly: true },
      { name: 'Aloha',       state: 'OR', coords: [-122.8679, 45.4929], pinOnly: true },
      { name: 'Cornelius',   state: 'OR', coords: [-123.0579, 45.5218], pinOnly: true },
      { name: 'Tualatin',    state: 'OR', coords: [-122.7623, 45.3840], pinOnly: true },
      { name: 'Canby',       state: 'OR', coords: [-122.6929, 45.2629], pinOnly: true },
      { name: 'McMinnville', state: 'OR', coords: [-123.1985, 45.2101], pinOnly: true },
      { name: 'Hubbard',     state: 'OR', coords: [-122.7979, 45.1843], pinOnly: true },
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
      { name: 'Springfield',   state: 'OR', coords: [-122.9057, 44.0462], pinOnly: true },
      { name: 'Junction City', state: 'OR', coords: [-123.2096, 44.2165], pinOnly: true },
      { name: 'Cottage Grove', state: 'OR', coords: [-123.0593, 43.7993], pinOnly: true },
      { name: 'Florence',      state: 'OR', coords: [-124.1012, 43.9818], pinOnly: true },
      { name: 'Coos Bay',      state: 'OR', coords: [-124.2179, 43.3665], pinOnly: true },
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
      { name: 'Warrenton',   state: 'OR', coords: [-123.9251, 46.1651], pinOnly: true },
      { name: 'Hood River',  state: 'OR', coords: [-121.5218, 45.7071], pinOnly: true },
      { name: 'The Dalles',  state: 'OR', coords: [-121.1787, 45.5946], pinOnly: true },
      { name: 'Boardman',    state: 'OR', coords: [-119.6968, 45.8393], pinOnly: true },
      { name: 'Hermiston',   state: 'OR', coords: [-119.2887, 45.8407], pinOnly: true },
      { name: 'Irrigon',     state: 'OR', coords: [-119.4804, 45.8946], pinOnly: true },
      { name: 'Umatilla',    state: 'OR', coords: [-119.3465, 45.9160], pinOnly: true },
      { name: 'Brownsville', state: 'OR', coords: [-122.9879, 44.3960], pinOnly: true },
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
      { name: 'Redmond',         state: 'OR', coords: [-121.1490, 44.2726], pinOnly: true },
      { name: 'Madras',          state: 'OR', coords: [-121.1296, 44.6332], pinOnly: true },
      { name: 'Prineville Area', state: 'OR', coords: [-120.8340, 44.2996], pinOnly: true },
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
      { name: 'Grants Pass',   state: 'OR', coords: [-123.3284, 42.4393], pinOnly: true },
      { name: 'Roseburg',      state: 'OR', coords: [-123.3507, 43.2165], pinOnly: true },
      { name: 'Ashland',       state: 'OR', coords: [-122.7098, 42.1946], pinOnly: true },
      { name: 'Klamath Falls', state: 'OR', coords: [-121.7817, 42.2249], pinOnly: true },
      { name: 'Merrill',       state: 'OR', coords: [-121.5999, 42.0235], pinOnly: true },
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
      { name: 'Camas',        state: 'WA', coords: [-122.3990, 45.5871], pinOnly: true },
      { name: 'Woodland',     state: 'WA', coords: [-122.7437, 45.9054], pinOnly: true },
      { name: 'Battle Ground', state: 'WA', coords: [-122.5329, 45.7821], pinOnly: true },
      { name: 'Long Beach',   state: 'WA', coords: [-124.0529, 46.3540], pinOnly: true },
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
      { name: 'Renton',            state: 'WA', coords: [-122.2015, 47.4829], pinOnly: true },
      { name: 'Des Moines',        state: 'WA', coords: [-122.3246, 47.4015], pinOnly: true },
      { name: 'Issaquah',          state: 'WA', coords: [-122.0326, 47.5301], pinOnly: true },
      { name: 'Olympia',           state: 'WA', coords: [-122.9007, 47.0379], pinOnly: true },
      { name: 'Puyallup',          state: 'WA', coords: [-122.2929, 47.1854], pinOnly: true },
      { name: 'Bonney Lake',       state: 'WA', coords: [-122.1776, 47.1776], pinOnly: true },
      { name: 'Graham',            state: 'WA', coords: [-122.2929, 47.0499], pinOnly: true },
      { name: 'Mountlake Terrace', state: 'WA', coords: [-122.3132, 47.7882], pinOnly: true },
      { name: 'Marysville',        state: 'WA', coords: [-122.1771, 48.0515], pinOnly: true },
      { name: 'Tukwila',           state: 'WA', coords: [-122.2607, 47.4740], pinOnly: true },
      { name: 'Bellingham',        state: 'WA', coords: [-122.4787, 48.7596], pinOnly: true },
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
      { name: 'Spokane Valley', state: 'WA', coords: [-117.2398, 47.6732], pinOnly: true },
      {
        name: 'Yakima',
        state: 'WA',
        coords: [-120.5080, 46.6021],
        anchor: 'start',
        dx: 8,
        dy: 4,
      },
      { name: 'Wapato',      state: 'WA', coords: [-120.4204, 46.4482], pinOnly: true },
      { name: 'Sunnyside',   state: 'WA', coords: [-119.9079, 46.3240], pinOnly: true },
      { name: 'Grandview',   state: 'WA', coords: [-119.9043, 46.2565], pinOnly: true },
      { name: 'Pasco',       state: 'WA', coords: [-119.1005, 46.2393], pinOnly: true },
      { name: 'Kennewick',   state: 'WA', coords: [-119.1372, 46.2112], pinOnly: true },
      { name: 'Richland',    state: 'WA', coords: [-119.2843, 46.2860], pinOnly: true },
      { name: 'Prosser',     state: 'WA', coords: [-119.7668, 46.2057], pinOnly: true },
      { name: 'Toppenish',   state: 'WA', coords: [-120.3129, 46.3776], pinOnly: true },
      { name: 'Union Gap',   state: 'WA', coords: [-120.4865, 46.5529], pinOnly: true },
      { name: 'Benton City', state: 'WA', coords: [-119.4876, 46.2629], pinOnly: true },
      { name: 'Walla Walla', state: 'WA', coords: [-118.3435, 46.0651], pinOnly: true },
    ],
  },
]

const LABELED_CITIES  = AREAS.flatMap(a => a.cities).filter(c => c.coords != null && !c.pinOnly)
const PIN_ONLY_CITIES = AREAS.flatMap(a => a.cities).filter(c => c.coords != null && c.pinOnly === true)

interface ServiceMapProps {
  showAllPins?: boolean
  footerCta?: { label: string; to: string }
  simpleSidebar?: boolean
}

export default function ServiceMap({ showAllPins = false, footerCta, simpleSidebar = false }: ServiceMapProps) {
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

            {/* Unnamed pins — service areas page only */}
            {showAllPins && PIN_ONLY_CITIES.map(city => (
              <Marker key={`pin-${city.name}`} coordinates={city.coords!}>
                <circle
                  r={2.5}
                  fill="#3d6b1e"
                  stroke="#ffffff"
                  strokeWidth={1}
                />
              </Marker>
            ))}

            {/* Named labeled pins — always shown */}
            {LABELED_CITIES.map(city => (
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

        {/* Right column */}
        <div className="areas-right">

          {simpleSidebar ? (
            <div className="simple-area-list">
              <Link to="/service-areas" className="simple-area-item simple-area-item--hq">
                <span className="simple-area-name">
                  <span className="area-hq-star" aria-label="Headquarters">★</span>
                  Salem, OR
                </span>
                <span className="simple-area-arrow">→</span>
              </Link>
              <Link to="/service-areas" className="simple-area-item">
                <span className="simple-area-name">Oregon</span>
                <span className="simple-area-arrow">→</span>
              </Link>
              <Link to="/service-areas" className="simple-area-item">
                <span className="simple-area-name">Washington</span>
                <span className="simple-area-arrow">→</span>
              </Link>
            </div>
          ) : (
          <>
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
          </>
          )}

          <div className="area-foot">
            <p>
              Don't see your city? Fill out the form — we may still be able to serve your location.
            </p>
            {footerCta
              ? <Link to={footerCta.to} className="cta-button">{footerCta.label}</Link>
              : <a href="#quote" className="cta-button">Get a Quote</a>
            }
          </div>
        </div>
      </div>
    </section>
  )
}
