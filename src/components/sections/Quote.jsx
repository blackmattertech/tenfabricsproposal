import { quote } from '../../content/copy'
import Wrap from '../layout/Wrap'
import Eyebrow from '../ui/Eyebrow'
import RevealText from '../ui/RevealText'

export default function Quote() {
  return (
    <section className="quote-section">
      <Wrap>
        <RevealText>
          <Eyebrow>{quote.eyebrow}</Eyebrow>
          <blockquote>
            &ldquo;{quote.quote.join(' ')}&rdquo;
          </blockquote>
        </RevealText>
      </Wrap>
    </section>
  )
}
