import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { flow } from '../../content/copy'
import Wrap from '../layout/Wrap'
import Eyebrow from '../ui/Eyebrow'
import SplitHeadline from '../ui/SplitHeadline'
import { useReducedMotion } from '../../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export default function Flow() {
  const rowRef = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const row = rowRef.current
    if (!row || reduced) return

    const steps = row.querySelectorAll('.step')
    const tween = gsap.fromTo(
      steps,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: row,
          start: 'top 85%',
          once: true,
        },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [reduced])

  return (
    <section className="panel" id={flow.id}>
      <Wrap>
        <div className="section-head">
          <div>
            <Eyebrow>{flow.eyebrow}</Eyebrow>
            <SplitHeadline lines={flow.headline} />
          </div>
          <p>{flow.intro}</p>
        </div>

        <div ref={rowRef} className="steps-row">
          {flow.steps.map((step) => (
            <div key={step.n} className="step">
              <div className="step-top">
                <span className="mono">STEP {step.n}</span>
                <span className="step-arrow">›</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
