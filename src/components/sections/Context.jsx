import { context } from '../../content/copy'
import Eyebrow from '../ui/Eyebrow'
import CountUp from '../ui/CountUp'

function PeopleIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="12" cy="11" r="3.2" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="11" r="3.2" stroke="currentColor" strokeWidth="2" />
      <path d="M6.8 22c0-3 2.3-4.8 5.2-4.8s5.2 1.8 5.2 4.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14.8 22c0-2.7 2.1-4.3 4.8-4.3s4.8 1.6 4.8 4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function FactoryIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M6 24V12.5l6 3V12.5l6 3V10l6 3V24H6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 24v-3M14 24v-3M18 24v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.8 12h16.4M12 3.5c2.2 2.4 3.4 5.4 3.4 8.5S14.2 18.1 12 20.5M12 3.5C9.8 5.9 8.6 8.9 8.6 12s1.2 6.1 3.4 8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l7 3v6c0 4.4-2.8 7.6-7 9-4.2-1.4-7-4.6-7-9V6l7-3zM9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Context() {
  return (
    <section className="context">
      <div className="context-grid">
        <div className="context-left">
          <h2 className="context-left-title">
            ONE ECOSYSTEM.
            <br />
            <span>ZERO DISCONNECTIONS.</span>
          </h2>
          <p className="context-left-body">
            TEN FABRICS CONNECTS CUSTOMERS, OPERATIONS, AND GLOBAL FACTORIES THROUGH <span>ONE CONTROL POINT.</span>
          </p>

          <div className="context-map">
            <div className="node node-top">CUSTOMERS</div>
            <div className="node node-left">TURKEY FACTORY</div>
            <div className="node node-right">BANGLADESH FACTORY</div>
            <div className="node node-bottom">OTHER COUNTRIES</div>
            <div className="node node-center">
              <strong>TEN FABRICS</strong>
              <span>ADMIN &amp; OPERATIONS</span>
            </div>
          </div>
        </div>

        <div className="context-right">
          <Eyebrow>{context.eyebrow}</Eyebrow>
          <p className="context-right-copy">
            Ten Fabrics operates between two worlds - a manufacturer and a global sourcing partner.
            <br />
            <br />
            Some orders run in-house. Most are produced with trusted partners in Bangladesh, Turkey and beyond.
            <br />
            <br />
            Our role is simple: <span>we connect, coordinate and control everything</span> - so our customers never feel the complexity behind their product.
          </p>
        </div>
      </div>

      <div className="context-rails">
        <div className="context-model">
          <h4>• OUR MODEL •</h4>
          <div className="context-model-grid context-rail">
            <div className="context-rail-card">
              <span className="rail-icon"><PeopleIcon /></span>
              <div>
                <strong>CUSTOMERS</strong>
                <span>Place enquiries and sample requests</span>
              </div>
            </div>
            <span className="context-rail-arrow" aria-hidden="true">→</span>
            <div className="context-rail-card">
              <span className="rail-icon rail-icon-brand">
                <img src="/10fabric logo.png" alt="Ten Fabrics" />
              </span>
              <div>
                <strong>TEN FABRICS</strong>
                <span>Admin and operations control point</span>
              </div>
            </div>
            <span className="context-rail-arrow" aria-hidden="true">→</span>
            <div className="context-rail-card">
              <span className="rail-icon"><FactoryIcon /></span>
              <div>
                <strong>FACTORIES</strong>
                <span>Assign, manage and monitor production</span>
              </div>
            </div>
          </div>
        </div>

        <div className="context-advantage">
          <h4>• THE ADVANTAGE •</h4>
          <div className="context-stats context-rail">
            {context.stats.map((stat) => (
              <div key={stat.label} className="context-rail-card context-stat-card">
                <span className="rail-icon">
                  {stat.num === 3 ? <GlobeIcon /> : stat.num === 1 ? <TargetIcon /> : <ShieldIcon />}
                </span>
                <div>
                  <span className="stat-num">
                    <CountUp value={stat.num} />
                    {stat.num === 3 ? '+' : ''}
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="context-banner">
          <strong>One partner. One process. One promise.</strong>
          <span>Complete control. Complete confidence.</span>
        </div>
      </div>
    </section>
  )
}
