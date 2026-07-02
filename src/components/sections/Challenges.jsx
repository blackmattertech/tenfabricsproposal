import { challenges } from '../../content/copy'
import Wrap from '../layout/Wrap'
import Eyebrow from '../ui/Eyebrow'
import SplitHeadline from '../ui/SplitHeadline'
import RevealText from '../ui/RevealText'

export default function Challenges() {
  return (
    <section className="panel" id={challenges.id}>
      <Wrap>
        <div className="section-head">
          <div>
            <Eyebrow>{challenges.eyebrow}</Eyebrow>
            <SplitHeadline lines={challenges.headline} />
          </div>
          <p>{challenges.intro}</p>
        </div>

        <RevealText stagger={0.06} className="grid-3">
          {challenges.cards.map((card) => (
            <div key={card.n} className="cell">
              <div className="cell-top">({card.n}) <span>—</span></div>
              <div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            </div>
          ))}
        </RevealText>
      </Wrap>
    </section>
  )
}
