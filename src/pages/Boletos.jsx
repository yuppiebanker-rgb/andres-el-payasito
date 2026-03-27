import { Link } from 'react-router-dom'
import { T } from '../components/LangContext'
import { PageHero, RevealOnScroll, Btn } from '../components/UI'
import { WA_LINKS, waShow } from '../utils/whatsapp'

const shows = [
  {
    month: 'ABR', day: '12', year: '2026',
    name: 'Gran Show de Pascua 🐣',
    venueEs: 'Auditorio Citibanamex, Monterrey', venueEn: 'Auditorio Citibanamex, Monterrey',
    timeEs: '20:00 hrs — Función Familiar', timeEn: '20:00 hrs — Family Show',
    price: '$350',
    dateColor: undefined,
    features: [
      { emoji: '🖐️', es: 'Títere Humano', en: 'Human Puppet' },
      { emoji: '🦍', es: 'La Gorila', en: 'The Gorilla' },
      { emoji: '🐕', es: 'Acto Terrian', en: 'Terrian Act' },
      { emoji: '🧸', es: 'Muñecos', en: 'Toys' },
    ],
  },
  {
    month: 'ABR', day: '26', year: '2026',
    name: 'Risa Express Tour 🚂',
    venueEs: 'Teatro de la Ciudad, CDMX', venueEn: 'Teatro de la Ciudad, CDMX',
    timeEs: '18:00 & 21:00 hrs — Dos Funciones', timeEn: '18:00 & 21:00 hrs — Two Shows',
    price: '$400',
    dateColor: undefined,
    features: [
      { emoji: '🖐️', es: 'Títere Humano', en: 'Human Puppet' },
      { emoji: '⚖️', es: 'El Abogado', en: 'The Lawyer' },
      { emoji: '🧑‍✈️', es: 'El Capitán', en: 'The Captain' },
    ],
  },
  {
    month: 'MAY', day: '10', year: '2026',
    name: 'Especial Día de las Madres 💐',
    venueEs: 'Arena Monterrey', venueEn: 'Arena Monterrey',
    timeEs: '17:00 hrs — ¡Mamás entran GRATIS!', timeEn: '17:00 hrs — Moms get in FREE!',
    price: '$300',
    dateColor: 'var(--pink)',
    features: [
      { emoji: '💐', es: 'Especial Mamás', en: 'Moms Special' },
      { emoji: '🎪', es: 'Show Completo', en: 'Full Show' },
      { emoji: '🎁', es: 'Regalos', en: 'Gifts' },
    ],
  },
  {
    month: 'JUN', day: '01', year: '2026',
    name: 'Festival del Día del Niño 🎈',
    venueEs: 'Parque Fundidora, Monterrey', venueEn: 'Parque Fundidora, Monterrey',
    timeEs: '12:00 hrs — Evento al Aire Libre', timeEn: '12:00 hrs — Outdoor Event',
    price: '$250',
    dateColor: 'var(--blue)',
    features: [
      { emoji: '🎈', es: 'Al Aire Libre', en: 'Outdoor' },
      { emoji: '🧸', es: 'Muñecos del Mundo', en: 'World Toys' },
      { emoji: '🐕', es: 'Acto Terrian', en: 'Terrian Act' },
    ],
  },
  {
    month: 'JUN', day: '28', year: '2026',
    nameEs: 'Especial Orgullo 🏳️‍🌈', nameEn: 'Pride Special 🏳️‍🌈',
    venueEs: 'Auditorio Citibanamex, Monterrey', venueEn: 'Auditorio Citibanamex, Monterrey',
    timeEs: '20:00 hrs — Show Especial Pride', timeEn: '20:00 hrs — Special Pride Show',
    price: '$450',
    dateColor: 'linear-gradient(180deg,#E40303,#FF8C00,#FFED00,#008026,#24408E,#732982)',
    features: [
      { emoji: '🏳️‍🌈', es: 'Pride', en: 'Pride' },
      { emoji: '🎪', es: 'Show Completo', en: 'Full Show' },
      { emoji: '🎉', es: 'After Party', en: 'After Party' },
    ],
  },
]

export default function Boletos() {
  return (
    <>
      <PageHero color="red">
        <h1><T es="Boletos" en="Tickets" /></h1>
        <p><T es="¡Asegura tu lugar para reírte como nunca! Reserva por WhatsApp 📱" en="Secure your spot for the laughs of a lifetime! Book via WhatsApp 📱" /></p>
      </PageHero>

      <section className="content-section" style={{ maxWidth: 900 }}>
        <RevealOnScroll>
          <div style={{ background: 'var(--yellow)', border: '4px solid var(--dark)', borderRadius: 16, padding: '20px 30px', marginBottom: 40, textAlign: 'center' }}>
            <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>
              <T es="📱 Reserva tus boletos directamente por WhatsApp — ¡Respuesta inmediata!" en="📱 Book your tickets directly via WhatsApp — Instant response!" />
            </p>
          </div>
        </RevealOnScroll>

        {shows.map((show, i) => (
          <RevealOnScroll key={i}>
            <div className="show-card">
              <div className="date-block" style={show.dateColor?.startsWith('linear') ? { background: show.dateColor } : show.dateColor ? { background: show.dateColor } : {}}>
                <div className="month">{show.month}</div>
                <div className="day">{show.day}</div>
                <div className="year">{show.year}</div>
              </div>
              <div className="show-details">
                <h3>{show.name || <T es={show.nameEs} en={show.nameEn} />}</h3>
                <p className="venue">📍 <T es={show.venueEs} en={show.venueEn} /></p>
                <p className="time">🕗 <T es={show.timeEs} en={show.timeEn} /></p>
                <div className="features">
                  {show.features.map((f, j) => (
                    <span key={j} className="feature-tag">{f.emoji} <T es={f.es} en={f.en} /></span>
                  ))}
                </div>
              </div>
              <div className="ticket-area">
                <div className="price"><T es="Desde" en="From" /> {show.price}</div>
                <Btn href={waShow(show.name || show.nameEs)} color="red" target="_blank" style={{ fontSize: '0.9rem', padding: '10px 25px' }}>
                  🎟️ <T es="Reservar" en="Book" />
                </Btn>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </section>

      <section className="content-section dark-bg" style={{ textAlign: 'center', padding: '60px 40px' }}>
        <div className="inner">
          <h2 style={{ fontFamily: "'Permanent Marker',cursive", fontSize: '1.8rem', color: 'var(--yellow)', marginBottom: 10 }}>
            <T es="¿Quieres un show privado?" en="Want a private show?" />
          </h2>
          <p style={{ color: 'var(--cream)', opacity: 0.8, marginBottom: 20 }}>
            <T es="Bodas, cumpleaños, eventos corporativos y más" en="Weddings, birthdays, corporate events and more" />
          </p>
          <Link to="/eventos" className="btn yellow">🎪 <T es="Eventos Privados" en="Private Events" /></Link>
        </div>
      </section>
    </>
  )
}
