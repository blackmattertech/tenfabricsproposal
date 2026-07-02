import { impact } from '../../content/copy'
import Wrap from '../layout/Wrap'
import Eyebrow from '../ui/Eyebrow'
import SplitHeadline from '../ui/SplitHeadline'
import RevealText from '../ui/RevealText'
import CountUp from '../ui/CountUp'
import { CheckIcon } from '../ui/icons'

export default function Impact() {
  return (
    <section className="panel">
      <Wrap>
        <div className="section-head">
          <div>
            <Eyebrow>{impact.eyebrow}</Eyebrow>
            <SplitHeadline lines={impact.headline} />
          </div>
          <p>{impact.intro}</p>
        </div>

        <RevealText className="impact-row">
          {impact.targets.map((target, i) => (
            <div key={target.n} className="impact-cell">
              <span className="mono">Target / {target.n}</span>
              <div className="impact-num">
                {target.staticVal ? (
                  target.staticVal
                ) : (
                  <CountUp value={target.num} suffix={target.suffix} delay={i * 0.15} />
                )}
              </div>
              <p>{target.label}</p>
            </div>
          ))}
        </RevealText>

        <RevealText stagger={0.08} className="check-row">
          {impact.checks.map((check) => (
            <div key={check} className="check-card">
              <CheckIcon />
              <p>{check}</p>
            </div>
          ))}
        </RevealText>
      </Wrap>
    </section>
  )
}
