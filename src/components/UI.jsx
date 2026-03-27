import { useEffect, useRef } from 'react'

export function PageHero({ color = 'red', children }) {
  return <div className={`page-hero ${color}`}>{children}</div>
}

export function RevealOnScroll({ children, className = '' }) {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

export function Zigzag({ flip = false }) {
  return <div className="zigzag" style={flip ? { transform: 'scaleY(-1)' } : {}} />
}

export function SectionTitle({ light = false, children }) {
  return <h2 className={`section-title ${light ? 'light' : 'dark'}`}>{children}</h2>
}

export function Btn({ href, color = 'red', target, children, style, onClick }) {
  if (href) {
    return (
      <a href={href} target={target} rel={target ? 'noopener noreferrer' : undefined}
         className={`btn ${color}`} style={style}>
        {children}
      </a>
    )
  }
  return <button className={`btn ${color}`} style={style} onClick={onClick}>{children}</button>
}
