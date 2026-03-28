import { useState } from 'react'
import { T } from '../components/LangContext'
import { PageHero, RevealOnScroll, SectionTitle } from '../components/UI'
import heroClown from '../assets/images/hero-clown-makeup.png'
import fullCostume from '../assets/images/full-costume-skyline.png'
import titereHand1 from '../assets/images/titere-humano-hand-1.png'
import titereHand2 from '../assets/images/titere-humano-hand-2.png'
import gorilaImg from '../assets/images/con-la-gorila.png'
import abogadoImg from '../assets/images/abogado-certificate.png'
import terrianImg from '../assets/images/terrian-companion.png'
import partyBalloonDog from '../assets/images/party-balloon-dog.png'
import balloonFlowers from '../assets/images/balloon-flowers-outdoor.png'
import balloonArt from '../assets/images/balloon-art-night.png'
import backstageRestaurant from '../assets/images/backstage-restaurant.png'
import backstageBalloons from '../assets/images/backstage-balloons.png'
import handPuppetConcept from '../assets/images/hand-puppet-concept.png'
import handPuppetToy from '../assets/images/hand-puppet-toy.png'
import duoParty from '../assets/images/duo-party.png'
import bwPortrait from '../assets/images/bw-clown-portrait.png'
import paletaArt from '../assets/images/paleta-payaso-art.png'

const photos = [
  { src: heroClown, position: 'center 20%', captionEs: 'Maquillaje Clásico', captionEn: 'Classic Makeup', catEs: '🎭 Maquillaje', catEn: '🎭 Makeup', category: 'backstage' },
  { src: fullCostume, position: 'center 15%', captionEs: 'Monterrey de Noche', captionEn: 'Monterrey at Night', catEs: '🌃 Monterrey', catEn: '🌃 Monterrey', category: 'backstage' },
  { src: titereHand1, position: 'center center', captionEs: 'El Títere Humano en Acción', captionEn: 'The Human Puppet in Action', catEs: '🎪 En Escena', catEn: '🎪 On Stage', category: 'escena' },
  { src: titereHand2, position: 'center center', captionEs: 'Sentado en la Mano Gigante', captionEn: 'Sitting on the Giant Hand', catEs: '🖐️ En Escena', catEn: '🖐️ On Stage', category: 'escena' },
  { src: gorilaImg, position: 'center 20%', captionEs: 'Con la Gorila', captionEn: 'With the Gorilla', catEs: '🦍 El Elenco', catEn: '🦍 The Cast', category: 'elenco' },
  { src: abogadoImg, position: 'center 15%', captionEs: 'El Abogado Payaso', captionEn: 'The Clown Lawyer', catEs: '⚖️ En Escena', catEn: '⚖️ On Stage', category: 'escena' },
  { src: terrianImg, position: 'center 15%', captionEs: 'Acto Terrian', captionEn: 'Terrian Act', catEs: '🐕 En Escena', catEn: '🐕 On Stage', category: 'escena' },
  { src: partyBalloonDog, position: 'center 15%', captionEs: 'Fiesta con Globos', captionEn: 'Balloon Party', catEs: '🎈 En Escena', catEn: '🎈 On Stage', category: 'escena' },
  { src: balloonFlowers, position: 'center 15%', captionEs: 'Show al Aire Libre', captionEn: 'Outdoor Show', catEs: '🌸 En Escena', catEn: '🌸 On Stage', category: 'escena' },
  { src: balloonArt, position: 'center 15%', captionEs: 'Arte con Globos', captionEn: 'Balloon Art', catEs: '🎨 En Escena', catEn: '🎨 On Stage', category: 'escena' },
  { src: backstageRestaurant, position: 'center 15%', captionEs: 'Detrás de Cámaras', captionEn: 'Behind the Scenes', catEs: '📷 Backstage', catEn: '📷 Backstage', category: 'backstage' },
  { src: backstageBalloons, position: 'center 30%', captionEs: 'Después del Show', captionEn: 'After the Show', catEs: '🎊 Backstage', catEn: '🎊 Backstage', category: 'backstage' },
  { src: handPuppetConcept, position: 'center 10%', captionEs: 'El Concepto: Títere de Mano', captionEn: 'The Concept: Hand Puppet', catEs: '🧸 Los Muñecos', catEn: '🧸 The Toys', category: 'munecos' },
  { src: handPuppetToy, position: 'center 15%', captionEs: 'El Muñeco Oficial', captionEn: 'The Official Puppet', catEs: '🧸 Los Muñecos', catEn: '🧸 The Toys', category: 'munecos' },
  { src: duoParty, position: 'center 15%', captionEs: 'Con su Pareja', captionEn: 'With his Partner', catEs: '❤️ El Elenco', catEn: '❤️ The Cast', category: 'elenco' },
  { src: bwPortrait, position: 'center 10%', captionEs: 'Retrato Clásico', captionEn: 'Classic Portrait', catEs: '📷 Retrato', catEn: '📷 Portrait', category: 'elenco' },
  { src: paletaArt, position: 'center center', captionEs: 'Paleta Payaso — El Logo', captionEn: 'Paleta Payaso — The Logo', catEs: '🎨 Branding', catEn: '🎨 Branding', category: 'backstage' },
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
            <RevealOnScroll key={`${filter}-${i}`}>
              <div className="masonry-item">
                <img src={photo.src} alt={photo.captionEs} style={{ width: '100%', objectFit: 'cover', objectPosition: photo.position }} />
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
