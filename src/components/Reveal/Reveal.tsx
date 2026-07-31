import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'

import './Reveal.css'

type RevealDirection =
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'fade'

interface RevealProps {
  children: ReactNode
  className?: string
  direction?: RevealDirection
  delay?: number
  duration?: number
  distance?: number
  threshold?: number
  once?: boolean
}

function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 750,
  distance = 36,
  threshold = 0.18,
  once = true,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    let firstFrame = 0
    let secondFrame = 0

    const showElement = () => {
      firstFrame = window.requestAnimationFrame(() => {
        secondFrame = window.requestAnimationFrame(() => {
          setIsVisible(true)
        })
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          showElement()

          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -12% 0px',
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(firstFrame)
      window.cancelAnimationFrame(secondFrame)
    }
  }, [once, threshold])

  const animationVariables = {
    '--reveal-delay': `${delay}ms`,
    '--reveal-duration': `${duration}ms`,
    '--reveal-distance': `${distance}px`,
  } as CSSProperties

  const classes = [
    'reveal',
    `reveal--${direction}`,
    isVisible ? 'reveal--visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      ref={elementRef}
      className={classes}
      style={animationVariables}
    >
      {children}
    </div>
  )
}

export default Reveal