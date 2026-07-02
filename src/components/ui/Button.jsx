import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useMagnetic } from '../../hooks/useMagnetic'
import { ArrowIcon } from './icons'

const variantClass = {
  solid: 'btn-solid',
  'outline-light': 'btn-outline-light',
  'outline-dark': 'btn-outline-dark',
}

export default function Button({ children, variant = 'solid', href = '#', className = '' }) {
  const { ref, arrowRef, x, y, arrowX, arrowY, onMouseMove, onMouseLeave, enabled } = useMagnetic()
  const isInternalRoute = href.startsWith('/') && !href.startsWith('//')
  const classes = `btn ${variantClass[variant]} ${className}`

  const content = (
    <>
      {children}
      <motion.span ref={arrowRef} style={enabled ? { x: arrowX, y: arrowY } : undefined} className="inline-flex">
        <ArrowIcon />
      </motion.span>
    </>
  )

  if (isInternalRoute) {
    if (enabled) {
      return (
        <motion.div
          ref={ref}
          style={{ x, y, display: 'inline-flex' }}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          <Link to={href} className={classes}>
            {content}
          </Link>
        </motion.div>
      )
    }

    return (
      <Link ref={ref} to={href} className={classes}>
        {content}
      </Link>
    )
  }

  if (enabled) {
    return (
      <motion.a
        ref={ref}
        href={href}
        className={classes}
        style={{ x, y }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <a ref={ref} href={href} className={classes}>
      {content}
    </a>
  )
}
