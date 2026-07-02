import { useEffect, useRef } from 'react'
import { animate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function CountUp({ value, suffix = '', className = '', delay = 0, onComplete }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    const el = ref.current
    if (!el) return

    if (reduced || value === null) {
      el.textContent = `${value ?? ''}${suffix}`
      onComplete?.()
      return
    }

    const controls = animate(0, value, {
      duration: 1.1,
      ease: 'easeOut',
      delay,
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`
      },
      onComplete,
    })

    return () => controls.stop()
  }, [inView, value, suffix, reduced, delay, onComplete])

  return (
    <span ref={(node) => { ref.current = node; inViewRef(node) }} className={className}>
      0{suffix}
    </span>
  )
}
