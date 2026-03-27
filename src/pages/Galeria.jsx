import { useState } from 'react'
import { T } from '../components/LangContext'
import { PageHero, RevealOnScroll, SectionTitle } from '../components/UI'
import headshot from '../assets/images/andres-headshot.png'
import composite from '../assets/images/andres-composite.png'

const photos = [
  { type: 'img', src: headshot, captionEs: 'Andrés — Retrato Oficial', captionEn: 'Andrés — Official Portrait', catEs: '📷 Sesión Fotográfica', catEn: '📷 Photo Session', category: 'elenco' },
  { type: 'img', src: composite, captionEs: 'Antes y Después — La Transformación', captionEn: 'Before and After — The Transformation', catEs: '🎭 Maquillaje', catEn: '🎭 Makeup', category: 'backstage' },
  { type: 'placeholder', emoji: '🖐️🤡', height: 280, gradient: 'linear-gradient(135deg,var(--red),var(--pink))', captionEs: 'El Títere Humano en Acción', captionEn: 'The Human Puppet in Action', catEs: '🎪 En Escena', catEn: '🎪 On Stage', category: 'escena' },
  { type: 'placeholder', emoji: '🦍💃', height: 220, gradient: 'linear-gradient(135deg,var(--purple),var(--blue))', captionEs: 'La Gorila Bailando Salsa', captionEn: 'The Gorilla Dancing Salsa', catEs: '💃 Duelo de Baile', catEn: '💃 Dance Battle', category: 'escena' },
  { type: 'placeholder', emoji: '🐕🦴', height: 300, gradient: 'linear-gradient(135deg,var(--green),var(--blue))', captionEs: 'Acto Terrian — El Perro Payaso', captionEn: 'Terrian Act — The Clown Dog', catEs: '🐕 En Escena', catEn: '🐕 On Stage', category: 'escena' },
  { type: 'placeholder', emoji: '⚖️👔', height: 200, gradient: 'linear-gradient(135deg,var(--yellow),var(--orange))', captionEs: 'El Abogado Más Loco', captionEn: 'The Craziest Lawyer', catEs: '⚖️ Comedia', catEn: '⚖️ Comedy', category: 'escena' },
  { type: 'placeholder', emoji: '🧑‍✈️₿', height: 260, gradient: 'linear-gradient(135deg,var(--blue),var(--purple))', captionEs: 'El Capitán — TO THE MOON!', captionEn: 'The Captain — TO THE MOON!', catEs: '🚀 Dúo Dinámico', catEn: '🚀 Dynamic Duo', category: 'escena' },
  { type: 'placeholder', emoji: '🧸🌎', height: 240, gradient: 'linear-gradient(135deg,var(--orange),var(--red))', captionEs: 'Colección de Muñecos del Mundo', captionEn: 'World Toy Collection', catEs: '🌍 Los Muñecos', catEn: '🌍 The Toys', category: 'munecos' },
  { type: 'placeholder', emoji: '🎪🎊', height: 200, gradient: 'linear-gradient(135deg,var(--pink),var(--purple))', captionEs: 'El Gran Final — Confetti', captionEn: 'Grand Finale — Confetti', catEs: '🎪 Espectáculo', catEn: '🎪 Spectacle', category: 'escena' },
  { type: 'placeholder', emoji: '🏳️‍🌈🤡', height: 280, gradient: 'linear-gradient(135deg,var(--red),var(--yellow))', captionEs: 'Orgullo y Diversión', captionEn: 'Pride and Fun', catEs: '🏳️‍🌈 Backstage', catEn: '🏳️‍🌈 Backstage', category: 'backstage' },
  { type: 'placeholder', emoji: '🎤😂', height: 220, gradient: 'linear-gradient(135deg,var(--green),var(--yellow))', captionEs: 'Stand-Up con el Público', captionEn: 'Stand-Up with the Audience', catEs: '🎤 Interactivo', catEn: '🎤 Interactive', category: 'escena' },
  { type: 'placeholder', emoji: '👨‍👩‍👧‍👦❤️', height: 250, gradient: 'linear-gradient(135deg,var(--dark),var(--purple))', captionEs: 'Con los Fans', captionEn: 'With the Fans', catEs: '❤️ Meet & Greet', catEn: '❤️ Meet & Greet', category: 'backstage' },
]

const filters = [
  { key: 'todos', es: 'Todos', en: 'All' },
  { key: 'escena', es: 'En Escena', en: 'On Stage' },
  { key: 'backstage', es: 'Backstage', en: 'Backstage' },
  { key: 'elenco', es: 'El Elenco', en: 'The Cast' },
  { key: 'munecos', es: 'Los Muñecos', en: 'The Toys' },
]

export default function Galeria() {
  const [filter, setFilter] = useState('todos')
  const filtered = filter === 'todos' ? photos : photos.filter(p => p.category === filter)

  return (
    <>
      <PageHero color="orange">
        <h1><T es="Galería" en="Gallery" /></h1>
        <p><T es="Los mejores momentos del show capturados en imágenes 📸" en="The best show moments captured in images 📸" /></p>
      </PageHero>

      <section className="content-section">
        <RevealOnScroll>
          <div className="filter-bar">
            {filters.map(f => (
              <button
                key={f.key}
                className={`filter-btn${filter === f.key ? ' active' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                <T es={f.es} en={f.en} />
              </button>
            ))}
          </div>
        </RevealOnScroll>

        <div className="masonry">
          {filtered.map((photo, i) => (
            <RevealOnScroll key={i}>
              <div className="masonry-item">
                {photo.type === 'img'
                  ? <img src={photo.src} alt={photo.captionEs} />
                  : <div className="photo-placeholder" style={{ height: photo.height, background: photo.gradient }}>{photo.emoji}</div>
                }
                <div className="caption">
                  <T es={photo.captionEs} en={photo.captionEn} />
                  <br /><small><T es={photo.catEs} en={photo.catEn} /></small>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="video-section" style={{ marginTop: 80 }}>
            <SectionTitle><T es="Videos" en="Videos" /></SectionTitle>
            <div className="video-placeholder">▶️</div>
            <p style={{ marginTop: 15, opacity: 0.7 }}>
              <T es="Próximamente: ¡Videos completos del show!" en="Coming soon: Full show videos!" />
            </p>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
