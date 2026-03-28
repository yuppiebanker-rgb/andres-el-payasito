import { useState, useEffect } from 'react'

import heroClown from '../assets/images/hero-clown-makeup.png'
import fullCostume from '../assets/images/full-costume-skyline.png'
import titereHand1 from '../assets/images/titere-humano-hand-1.png'
import titereHand2 from '../assets/images/titere-humano-hand-2.png'
import balloonDog from '../assets/images/party-balloon-dog.png'
import balloonFlowers from '../assets/images/balloon-flowers-outdoor.png'
import handPuppet from '../assets/images/hand-puppet-concept.png'
import bwPortrait from '../assets/images/bw-clown-portrait.png'
import paletaArt from '../assets/images/paleta-payaso-art.png'
import balloonArtNight from '../assets/images/balloon-art-night.png'
import conGorila from '../assets/images/con-la-gorila.png'
import abogado from '../assets/images/abogado-certificate.png'
import duoParty from '../assets/images/duo-party.png'
import backstageBalloons from '../assets/images/backstage-balloons.png'
import terrian from '../assets/images/terrian-companion.png'
import backstageRest from '../assets/images/backstage-restaurant.png'
import handPuppetToy from '../assets/images/hand-puppet-toy.png'

const heroImages = [
  // PORTRAIT PHOTOS (face at top) — need low % to show face
  { src: heroClown, alt: 'Maquillaje de Payaso', position: 'center 10%' },
  { src: fullCostume, alt: 'Traje Completo Monterrey', position: 'center 12%' },
  { src: bwPortrait, alt: 'Retrato Clásico B&N', position: 'center 10%' },
  { src: balloonArtNight, alt: 'Arte con Globos', position: 'center 15%' },
  { src: balloonFlowers, alt: 'Show al Aire Libre', position: 'center 12%' },
  { src: abogado, alt: 'El Abogado Payaso', position: 'center 10%' },
  { src: backstageRest, alt: 'Detrás de Cámaras', position: 'center 12%' },
  { src: terrian, alt: 'Acto Terrian', position: 'center 20%' },
  { src: backstageBalloons, alt: 'Después del Show', position: 'center 25%' },

  // LANDSCAPE/SQUARE PHOTOS (face is centered) — center works fine
  { src: titereHand1, alt: 'El Títere Humano', position: 'center 20%' },
  { src: titereHand2, alt: 'Mano Gigante', position: 'center 20%' },
  { src: balloonDog, alt: 'Fiesta con Globos', position: 'center 15%' },
  { src: conGorila, alt: 'Con la Gorila', position: 'center 25%' },
  { src: duoParty, alt: 'Con su Pareja', position: 'center 10%' },

  // SPECIAL FRAMING (art, puppet, etc.) — use center
  { src: handPuppet, alt: 'Títere de Mano', position: 'center 15%' },
  { src: paletaArt, alt: 'Paleta Payaso', position: 'center center' },
  { src: handPuppetToy, alt: 'El Muñeco Oficial', position: 'center 20%' },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % heroImages.length)
        setIsTransitioning(false)
      }, 400)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  const goTo = (index) => {
    if (index === current) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setIsTransitioning(false)
    }, 400)
  }

  const prev = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(c => (c - 1 + heroImages.length) % heroImages.length)
      setIsTransitioning(false)
    }, 400)
  }

  const next = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(c => (c + 1) % heroImages.length)
      setIsTransitioning(false)
    }, 400)
  }

  const img = heroImages[current]

  return (
    <div className="hero-carousel">
      <div className={`hero-carousel-circle ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        <img
          src={img.src}
          alt={img.alt}
          style={{ objectPosition: img.position }}
          className="hero-carousel-img"
        />
      </div>

      <button className="hero-carousel-arrow hero-carousel-prev" onClick={prev} aria-label="Previous">
        ‹
      </button>
      <button className="hero-carousel-arrow hero-carousel-next" onClick={next} aria-label="Next">
        ›
      </button>

      <div className="hero-carousel-dots">
        {heroImages.map((_, i) => (
          <button
            key={i}
            className={`hero-carousel-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>

      <div className="hero-carousel-counter">
        {current + 1} / {heroImages.length}
      </div>
    </div>
  )
}
