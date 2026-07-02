import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { dataIsolation } from '../../content/copy'
import Wrap from '../layout/Wrap'
import Eyebrow from '../ui/Eyebrow'
import SplitHeadline from '../ui/SplitHeadline'
import RevealText from '../ui/RevealText'
import { CheckIcon } from '../ui/icons'
import { useReducedMotion } from '../../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export default function DataIsolation() {
  const sectionRef = useRef(null)
  const panelRef = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const section = sectionRef.current
    const panel = panelRef.current
    if (!section || !panel) return

    const checks = panel.querySelectorAll('[data-relay-check]')

    if (reduced) {
      gsap.set(panel, { opacity: 1, y: 0 })
      gsap.set(checks, { opacity: 1, scale: 1 })
      return
    }

    gsap.set(checks, { opacity: 0, scale: 0.5 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 50%',
        once: true,
      },
    })

    tl.fromTo(panel, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' })
    checks.forEach((check, i) => {
      tl.to(check, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(1.5)' }, `+=${i === 0 ? 0.15 : 0.15}`)
    })

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [reduced])

  return (
    <section className="panel" ref={sectionRef}>
      <Wrap>
        <div className="section-head">
          <div>
            <Eyebrow>{dataIsolation.eyebrow}</Eyebrow>
            <SplitHeadline lines={dataIsolation.headline} />
          </div>
          <p>{dataIsolation.intro}</p>
        </div>

        <RevealText className="iso-grid">
          <div className="iso-copy">
            <ul className="checklist">
              {dataIsolation.checklist.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="iso-visual">
            <div className="paper-stack">
              <div className="paper" />
              <div className="paper" />
              <div className="paper">
                <div className="bar" />
                <div className="line" />
                <div className="line" style={{ width: '80%' }} />
                <div className="line" style={{ width: '55%' }} />
                <div className="line orange" />
              </div>
            </div>

            <div ref={panelRef} className="relay-panel">
              <div className="relay-head">
                <span className="dots">
                  <span />
                  <span />
                  <span />
                </span>
                {dataIsolation.relayPanel.title}
              </div>
              {dataIsolation.relayPanel.rows.map((row) => (
                <div key={row.n} className="relay-row">
                  <span>
                    <span className="num">{row.n}</span>
                    {row.label}
                  </span>
                  <span data-relay-check>
                    <CheckIcon />
                  </span>
                </div>
              ))}
            </div>

            <div className="iso-footer">
              {dataIsolation.footerLabels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>
        </RevealText>
      </Wrap>
    </section>
  )
}
