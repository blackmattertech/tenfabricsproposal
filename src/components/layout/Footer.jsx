import { footer } from '../../content/copy'
import Wrap from './Wrap'

export default function Footer() {
  return (
    <footer>
      <Wrap className="footer-row">
        {footer.lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </Wrap>
    </footer>
  )
}
