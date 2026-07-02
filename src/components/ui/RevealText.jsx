import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '../../hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export default function RevealText({
  children,
  className = '',
  delay = 0,
  stagger = 0,
  as: Tag = 'div',
  triggerOnMount = false,
}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (reduced) {
      gsap.set(el, { opacity: 1, y: 0 })
      if (stagger > 0) {
        gsap.set(el.children, { opacity: 1, y: 0 })
      }
      return
    }

    const targets = stagger > 0 ? el.children : el

    if (triggerOnMount) {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          delay,
          stagger: stagger || undefined,
        },
      )
      return
    }

    const tween = gsap.fromTo(
      targets,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        stagger: stagger || undefined,
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
  }, [reduced, delay, stagger, triggerOnMount])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
