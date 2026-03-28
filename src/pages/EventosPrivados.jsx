import { useState } from 'react'
import { T } from '../components/LangContext'
import { PageHero, RevealOnScroll, Zigzag, SectionTitle, Btn } from '../components/UI'
import { WA_LINKS, waEvent, igDm } from '../utils/contact'

const packages = [
  {
    emoji: '🎈',
    titleEs: 'Paquete Fiesta', titleEn: 'Party Package',
    descEs: 'Cumpleaños y fiestas infantiles', descEn: 'Birthdays & kids\' parties',
    price: '$8,000',
    featured: false,
    items: [
      { es: '1 hora de show', en: '1 hour show' },
      { es: 'Acto del Títere Humano', en: 'Human Puppet Act' },
      { es: 'Acto Terrian (El Perro)', en: 'Terrian Act (The Dog)' },
      { es: 'Interacción con niños', en: 'Kids interaction' },
      { es: 'Fotos con Andrés', en: 'Photos with Andrés' },
    ],
    waMsg: '¡Hola! Me interesa el Paquete Fiesta para un evento privado 🎈',
  },
  {
    emoji: '🎪',
    titleEs: 'Paquete Espectáculo', titleEn: 'Spectacle Package',
    descEs: 'Bodas, quinceañeras, corporativos', descEn: 'Weddings, quinceañeras, corporate',
    price: '$18,000',
    featured: true,
    items: [
      { es: '2 horas de show completo', en: '2 hours full show' },
      { es: 'Todo el elenco (Andrés + Gorila + Capitán)', en: 'Full cast (Andrés + Gorilla + Captain)' },
      { es: 'Todos los actos incluidos', en: 'All acts included' },
      { es: 'Muñecos del Mundo', en: 'World Toys' },
      { es: 'Acto personalizado para el evento', en: 'Custom act for your event' },
      { es: 'Equipo de sonido incluido', en: 'Sound equipment included' },
      { es: 'Meet & Greet con fotos', en: 'Meet & Greet with photos' },
    ],
    waMsg: '¡Hola! Me interesa el Paquete Espectáculo para un evento privado 🎪',
  },
  {
    emoji: '🌟',
    titleEs: 'Paquete Premium', titleEn: 'Premium Package',
    descEs: 'Grandes eventos y festivales', descEn: 'Large events & festivals',
    price: '$35,000',
    featured: false,
    items: [
      { es: 'Show de 3 horas', en: '3 hour show' },
      { es: 'Todo del Paquete Espectáculo', en: 'Everything in Spectacle Package' },
      { es: 'Decoración temática del Payasito', en: 'Payasito themed decoration' },
      { es: 'Animación pre y post show', en: 'Pre & post show entertainment' },
      { es: 'Video del evento', en: 'Event video' },
      { es: 'Merchandising exclusivo', en: 'Exclusive merchandise' },
    ],
    waMsg: '¡Hola! Me interesa el Paquete Premium para un gran evento 🌟',
  },
]

const eventTypes = [
  { emoji: '🎂', titleEs: 'Cumpleaños', titleEn: 'Birthdays', descEs: 'Fiestas infantiles y de adultos con show personalizado según la edad del festejado.', descEn: 'Kids and adult parties with a personalized show based on the guest of honor\'s age.', color: 'var(--yellow)' },
  { emoji: '💒', titleEs: 'Bodas', titleEn: 'Weddings', descEs: 'Entretenimiento inolvidable para la recepción. ¡Hacemos reír a todos los invitados!', descEn: 'Unforgettable entertainment for the reception. We make all the guests laugh!', color: 'var(--pink)' },
  { emoji: '🏢', titleEs: 'Corporativos', titleEn: 'Corporate', descEs: 'Team building, fiestas de fin de año y eventos empresariales con humor para todos.', descEn: 'Team building, year-end parties, and corporate events with humor for everyone.', color: 'var(--green)' },
  { emoji: '🏫', titleEs: 'Escuelas', titleEn: 'Schools', descEs: 'Shows educativos sobre diversidad e inclusión a través del humor y los muñecos del mundo.', descEn: 'Educational shows about diversity and inclusion through humor and world toys.', color: 'var(--blue)' },
  { emoji: '🏳️‍🌈', titleEs: 'Eventos Pride', titleEn: 'Pride Events', descEs: 'Shows especiales para marchas, festivales y celebraciones del orgullo LGBTQ+.', descEn: 'Special shows for marches, festivals, and LGBTQ+ pride celebrations.', color: 'var(--orange)' },
  { emoji: '🎪', titleEs: 'Festivales', titleEn: 'Festivals', descEs: 'Participación en festivales culturales, ferias y eventos masivos en todo México.', descEn: 'Participation in cultural festivals, fairs, and massive events across Mexico.', color: 'var(--purple)' },
]

export default function EventosPrivados() {
  const [form, setForm] = useState({ name: '', phone: '', type: 'cumpleanos', date: '', guests: '', details: '' })

  const handleSubmit = () => {
    window.open(waEvent({
      name: form.name || 'No especificado',
      phone: form.phone || 'No especificado',
      type: form.type,
      date: form.date || 'No especificada',
      guests: form.guests || 'No especificado',
      details: form.details || 'Ninguno',
    }), '_blank')
  }

  return (
    <>
      <PageHero color="green">
        <h1><T es="Eventos Privados" en="Private Events" /></h1>
        <p><T es="Lleva la magia del Payasito a tu evento especial 🎪✨" en="Bring the Payasito magic to your special event 🎪✨" /></p>
      </PageHero>

      {/* PACKAGES */}
      <section className="content-section">
        <SectionTitle><T es="Paquetes" en="Packages" /></SectionTitle>
        <div className="package-grid">
          {packages.map((pkg, i) => (
            <RevealOnScroll key={i}>
              <div className={`package-card${pkg.featured ? ' featured' : ''}`}>
                <h3>{pkg.emoji} <T es={pkg.titleEs} en={pkg.titleEn} /></h3>
                <p style={{ color: '#777' }}><T es={pkg.descEs} en={pkg.descEn} /></p>
                <div className="price"><T es="Desde" en="From" /> {pkg.price} <small>MXN</small></div>
                <ul>
                  {pkg.items.map((item, j) => (
                    <li key={j}><T es={item.es} en={item.en} /></li>
                  ))}
                </ul>
                <Btn href={`https://wa.me/528115317934?text=${encodeURIComponent(pkg.waMsg)}`} color="red" target="_blank" style={{ width: '100%', textAlign: 'center' }}>
                  📱 <T es="Cotizar" en="Get Quote" />
                </Btn>
                <a href={igDm} target="_blank" rel="noopener noreferrer" className="btn pink" style={{ width: '100%', textAlign: 'center', marginTop: 10 }}>
                  📸 <T es="DM en Instagram" en="Instagram DM" />
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <Zigzag />

      {/* EVENT TYPES */}
      <section className="content-section dark-bg">
        <div className="inner">
          <RevealOnScroll>
            <SectionTitle light><T es="Tipos de Eventos" en="Event Types" /></SectionTitle>
          </RevealOnScroll>
          <div className="card-grid">
            {eventTypes.map((evt, i) => (
              <RevealOnScroll key={i}>
                <div className="card" style={{ background: 'var(--dark)', borderColor: evt.color, color: 'var(--cream)' }}>
                  <div className="card-body">
                    <h3 style={{ color: evt.color }}>{evt.emoji} <T es={evt.titleEs} en={evt.titleEn} /></h3>
                    <p style={{ color: 'var(--cream)', opacity: 0.8 }}><T es={evt.descEs} en={evt.descEn} /></p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="content-section" style={{ maxWidth: 700 }}>
        <RevealOnScroll>
          <SectionTitle><T es="Solicitar Cotización" en="Request a Quote" /></SectionTitle>
        </RevealOnScroll>
        <RevealOnScroll>
          <div style={{ background: 'white', border: '5px solid var(--dark)', borderRadius: 24, padding: 40, boxShadow: '8px 8px 0 var(--dark)' }}>
            <div className="form-row">
              <div className="form-group">
                <label><T es="Nombre" en="Name" /></label>
                <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="form-group">
                <label><T es="Teléfono / WhatsApp" en="Phone / WhatsApp" /></label>
                <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+52" />
              </div>
            </div>
            <div className="form-group">
              <label><T es="Tipo de Evento" en="Event Type" /></label>
              <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                <option value="cumpleanos">Cumpleaños / Birthday</option>
                <option value="boda">Boda / Wedding</option>
                <option value="corporativo">Corporativo / Corporate</option>
                <option value="escuela">Escuela / School</option>
                <option value="pride">Evento Pride / Pride Event</option>
                <option value="festival">Festival</option>
                <option value="otro">Otro / Other</option>
              </select>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label><T es="Fecha del Evento" en="Event Date" /></label>
                <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
              </div>
              <div className="form-group">
                <label><T es="Número de Invitados" en="Number of Guests" /></label>
                <input type="number" value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })} placeholder="50" />
              </div>
            </div>
            <div className="form-group">
              <label><T es="Detalles Adicionales" en="Additional Details" /></label>
              <textarea value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} />
            </div>
            <button className="btn green" style={{ width: '100%', textAlign: 'center', fontSize: '1.1rem' }} onClick={handleSubmit}>
              📱 <T es="Enviar por WhatsApp" en="Send via WhatsApp" />
            </button>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
