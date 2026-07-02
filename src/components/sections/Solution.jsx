import { solution } from '../../content/copy'
import Wrap from '../layout/Wrap'
import Eyebrow from '../ui/Eyebrow'
import RevealText from '../ui/RevealText'
import SplitHeadline from '../ui/SplitHeadline'

export default function Solution() {
  return (
    <section className="solution" id={solution.id}>
      <Wrap>
        <div className="solution-grid">
          <RevealText>
            <Eyebrow>{solution.eyebrow}</Eyebrow>
            <SplitHeadline
              lines={[
                { line: `${solution.headlineLine1} ${solution.headlineAccent}`, accent: solution.headlineAccent },
                ...solution.headlineRest,
              ]}
              variant="dark"
              as="h2"
            />
          </RevealText>

          <div className="solution-copy">
            <RevealText>
              <p>{solution.body}</p>
            </RevealText>
            <RevealText stagger={0.06} className="mini-grid">
              {solution.miniGrid.map((cell) => (
                <div key={cell.tag} className="mini-cell">
                  <div className="tag">{cell.tag}</div>
                  <div className="desc">{cell.desc}</div>
                </div>
              ))}
            </RevealText>
          </div>
        </div>
      </Wrap>
    </section>
  )
}
