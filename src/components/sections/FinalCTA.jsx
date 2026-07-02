import { finalCta } from '../../content/copy'
import Wrap from '../layout/Wrap'
import Eyebrow from '../ui/Eyebrow'
import Button from '../ui/Button'
import SplitHeadline from '../ui/SplitHeadline'
import RevealText from '../ui/RevealText'

export default function FinalCTA() {
  return (
    <section className="final" id={finalCta.id}>
      <Wrap>
        <div className="final-grid">
          <RevealText>
            <Eyebrow>{finalCta.eyebrow}</Eyebrow>
            <SplitHeadline
              lines={[
                { line: `${finalCta.headlinePre[0]} ${finalCta.headlineAccent}`, accent: finalCta.headlineAccent },
                ...finalCta.headlinePost,
              ]}
              variant="dark"
              as="h2"
            />
          </RevealText>

          <div className="final-side">
            <RevealText>
              <p>{finalCta.body}</p>
            </RevealText>
            <div className="final-btns">
              <Button variant="solid" href="/commercial">
                Commercial
              </Button>
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  )
}
