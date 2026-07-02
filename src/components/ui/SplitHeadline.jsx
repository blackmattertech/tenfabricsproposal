import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '../../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export default function SplitHeadline({
  lines,
  className = '',
  as: Tag = 'h2',
  variant = 'light',
  softLineIndex = -1,
  onMount = false,
  mountDelay = 0,
  showAccentSquare = false,
}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const innerSpans = el.querySelectorAll('[data-line-inner]')

    if (reduced) {
      gsap.set(innerSpans, { y: '0%' })
      return
    }

    const isMobile = window.innerWidth < 720
    const lineStagger = isMobile ? 0.05 : 0.08

    const config = {
      y: '0%',
      duration: 0.8,
      ease: 'power3.out',
      stagger: lineStagger,
      delay: onMount ? mountDelay : 0,
    }

    if (onMount) {
      gsap.fromTo(innerSpans, { y: '110%' }, config)
      return
    }

    const tween = gsap.fromTo(
      innerSpans,
      { y: '110%' },
      {
        ...config,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [reduced, onMount, mountDelay, lines])

  const renderLine = (line, i) => {
    if (typeof line === 'object' && line.line) {
      const accent = line.accent
      if (accent) {
        const parts = line.line.split(accent)
        return (
          <span key={i} className="line-wrap">
            <span data-line-inner className={`line-inner ${i === softLineIndex ? 'soft' : ''}`}>
              {parts[0]}
              <span className="accent">{accent}</span>
              {parts[1] || ''}
            </span>
          </span>
        )
      }
    }

    const text = typeof line === 'string' ? line : line.line
    const isFirstWithSquare = showAccentSquare && i === 0

    return (
      <span key={i} className="line-wrap">
        <span data-line-inner className={`line-inner ${i === softLineIndex ? 'soft' : ''}`}>
          {text}
          {isFirstWithSquare && <span className="accent-sq" aria-hidden="true" />}
        </span>
      </span>
    )
  }

  return (
    <Tag ref={ref} className={`split-headline ${className}`}>
      {lines.map(renderLine)}
    </Tag>
  )
}
