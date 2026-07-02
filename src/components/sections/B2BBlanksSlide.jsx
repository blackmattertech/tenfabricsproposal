import RevealText from '../ui/RevealText'

export default function B2BBlanksSlide() {
  return (
    <section className="b2b-slide">
      <div className="b2b-slide-grid">
        <RevealText className="b2b-slide-copy">
          <h2>
            FROM BLANK CANVAS
            <br />
            <span>TO READY COLLECTIONS</span>
          </h2>
          <p>The platform supports two purchasing journeys:</p>

          <div className="b2b-journey">
            <h3>Custom Manufacturing</h3>
            <ul>
              <li>Upload designs</li>
              <li>Build products from scratch</li>
              <li>Develop new collections</li>
            </ul>
          </div>

          <div className="b2b-journey">
            <h3>Pre-Built Collections</h3>
            <ul>
              <li>Browse ready-made apparel</li>
              <li>Select colors and sizes</li>
              <li>Add custom branding</li>
              <li>Order in bulk</li>
            </ul>
          </div>

          <div className="b2b-note">
            <strong>One platform.</strong>
            <span>Two ways to manufacture.</span>
          </div>
        </RevealText>

        <div className="b2b-slide-visual">
          <img src="/b2b%20blanks.png" alt="B2B blanks slide visual" />
        </div>
      </div>

      <div className="b2b-benefits">
        <div>Ready-to-Order Wholesale Catalog</div>
        <div>MOQ and Bulk Pricing</div>
        <div>Custom Branding and Private Labeling</div>
        <div>Instant Sample Requests</div>
        <div>Faster Reorders</div>
      </div>
    </section>
  )
}
