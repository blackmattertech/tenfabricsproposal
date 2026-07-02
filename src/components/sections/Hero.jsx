import RevealText from '../ui/RevealText'

const FALLBACK_SLIDE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1400 900'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%231a1a1a'/%3E%3Cstop offset='100%25' stop-color='%23333333'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1400' height='900' fill='url(%23g)'/%3E%3Ctext x='80' y='460' fill='%23ff4a17' font-size='72' font-family='Arial, sans-serif' font-weight='700'%3ESLIDE 1 PREVIEW%3C/text%3E%3Ctext x='80' y='530' fill='%23f2f0e9' font-size='34' font-family='Arial, sans-serif'%3EAdd public/slide1.png to replace this fallback%3C/text%3E%3C/svg%3E"

export default function Hero() {
  return (
    <section className="hero hero-slide wrap">
      <RevealText triggerOnMount delay={0.3}>
        <article className="slide-card">
          <div className="slide-card-topbar">
            <span className="slide-dot" />
            <span>Global Manufacturing, Centralized Control.</span>
          </div>

          <div className="slide-card-grid">
            <div className="slide-copy">
              <h1>
                FROM MULTIPLE
                <br />
                FACTORIES
                <span className="slide-square" />
                <br />
                <span className="slide-accent">TO ONE</span>
                <br />
                <span className="slide-accent">GLOBAL</span>
                <br />
                <span className="slide-accent">COMMAND</span>
                <br />
                <span className="slide-accent">CENTER.</span>
              </h1>

              <p>
                From Athens to Bangladesh, Turkey, India, and China - every
                future manufacturing partner operates as one unified
                manufacturing ecosystem serving customers across Europe.
              </p>

            </div>

            <div className="slide-visual">
              <img
                src="/slide1.png"
                alt="Ten Systems command center visual"
                onError={(e) => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = FALLBACK_SLIDE
                }}
              />
              <img
                src="/10fabric logo.png"
                alt="Ten Fabrics logo"
                className="slide-brand-logo"
              />
              <div className="slide-callout">
                Scale manufacturing without scaling operational complexity.
              </div>
            </div>
          </div>
          <div className="slide-bottom-rail">
            <div>
              <strong>One Platform</strong>
              <span>One system for all.</span>
            </div>
            <div>
              <strong>One Process</strong>
              <span>Standardized. Controlled. Scalable.</span>
            </div>
            <div>
              <strong>One Source Of Truth</strong>
              <span>Real-time visibility. Total clarity.</span>
            </div>
            <div>
              <strong>One Goal</strong>
              <span>Deliver excellence. Every time.</span>
            </div>
          </div>
        </article>
      </RevealText>
    </section>
  )
}
