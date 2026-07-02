import { capabilities } from '../../content/copy'
import Wrap from '../layout/Wrap'
import Eyebrow from '../ui/Eyebrow'
import SplitHeadline from '../ui/SplitHeadline'
import RevealText from '../ui/RevealText'

const icons = {
  mockup: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 2l1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8L12 2z" />
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 21V10l9-7 9 7v11" />
      <path d="M9 21v-7h6v7" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
  pipeline: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M3 10h18M8 15h4" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
    </svg>
  ),
  message: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  ),
  payment: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M2 10h20" />
    </svg>
  ),
}

export default function Capabilities() {
  return (
    <section className="panel" id={capabilities.id}>
      <Wrap>
        <div className="section-head">
          <div>
            <Eyebrow>{capabilities.eyebrow}</Eyebrow>
            <SplitHeadline lines={capabilities.headline} />
          </div>
          <p>{capabilities.intro}</p>
        </div>

        <RevealText stagger={0.06} className="grid-4">
          {capabilities.cards.map((card) => (
            <div key={card.n} className="cell">
              <div className="icon-box">{icons[card.icon]}</div>
              <div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
              <span className="count">{card.n.replace('/', ' / ')}</span>
            </div>
          ))}
        </RevealText>
      </Wrap>
    </section>
  )
}
