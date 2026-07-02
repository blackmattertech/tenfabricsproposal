import { decisions } from '../../content/copy'
import Wrap from '../layout/Wrap'
import Eyebrow from '../ui/Eyebrow'
import SplitHeadline from '../ui/SplitHeadline'
import RevealText from '../ui/RevealText'

export default function Decisions() {
  return (
    <section className="panel" id={decisions.id}>
      <Wrap>
        <div className="section-head">
          <div>
            <Eyebrow>{decisions.eyebrow}</Eyebrow>
            <SplitHeadline lines={decisions.headline} />
          </div>
          <p>{decisions.intro}</p>
        </div>

        <RevealText stagger={0.08} className="decision-list">
          {decisions.items.map((item) => (
            <div key={item.n} className="decision-item">
              <span className="decision-num">{item.n}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </RevealText>
      </Wrap>
    </section>
  )
}
