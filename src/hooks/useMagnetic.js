import { useRef, useState, useEffect } from 'react'
import { useSpring } from 'framer-motion'
import { isTouchDevice } from '../utils/motion'

export function useMagnetic() {
  const ref = useRef(null)
  const arrowRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  const x = useSpring(0, { stiffness: 150, damping: 15 })
  const y = useSpring(0, { stiffness: 150, damping: 15 })
  const arrowX = useSpring(0, { stiffness: 150, damping: 15 })
  const arrowY = useSpring(0, { stiffness: 150, damping: 15 })

  useEffect(() => {
    setEnabled(!isTouchDevice())
  }, [])

  const onMouseMove = (e) => {
    if (!enabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    x.set(dx * 8)
    y.set(dy * 8)
    arrowX.set(dx * 10)
    arrowY.set(dy * 10)
  }

  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
    arrowX.set(0)
    arrowY.set(0)
  }

  return { ref, arrowRef, x, y, arrowX, arrowY, onMouseMove, onMouseLeave, enabled }
}
