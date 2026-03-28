import { T } from '../components/LangContext'
import { PageHero, RevealOnScroll, Zigzag, SectionTitle, Btn } from '../components/UI'
import { WA_LINKS } from '../utils/whatsapp'
import bwPortrait from '../assets/images/bw-clown-portrait.png'
import paletaArt from '../assets/images/paleta-payaso-art.png'

const downloads = [
  { icon: '📸', titleEs: 'Fotos Oficiales', titleEn: 'Official Photos', descEs: 'Alta resolución, uso editorial', descEn: 'High res, editorial use', img: bwPortrait },
  { icon: '📝', titleEs: 'Biografía Oficial', titleEn: 'Official Bio', descEs: 'Corta y larga, ES/EN', descEn: 'Short & long, ES/EN' },
  { icon: '🎨', titleEs: 'Logotipos', titleEn: 'Logos', descEs: 'PNG, SVG, colores oficiales', descEn: 'PNG, SVG, official colors', img: paletaArt },
  { icon: '🎬', titleEs: 'Videos Promocionales', titleEn: 'Promo Videos', descEs: 'Clips del show, entrevistas', descEn: 'Show clips, interviews' },
]

const pressMentions = [
  {
    sourceEs: '📺 Televisión Nacional', sourceEn: '📺 National Television',
    titleEs: '"El payaso que rompió barreras"', titleEn: '"The clown who broke barriers"',
    descEs: 'Reportaje especial sobre cómo Andrés se convirtió en un ícono LGBTQ+ en el entretenimiento infantil mexicano.',
    descEn: 'Special report on how Andrés became an LGBTQ+ icon in Mexican children\'s entertainment.',
  },
  {
    sourceEs: '📰 Prensa Local — Monterrey', sourceEn: '📰 Local Press — Monterrey',
    titleEs: '"De Monterrey para el mundo"', titleEn: '"From Monterrey to the world"',
    descEs: 'Cómo el Payasito llevó su show único de mano gigante a escenarios de 15 países diferentes.',
    descEn: 'How the Payasito took his unique giant hand show to stages in 15 different countries.',
  },
  {
    sourceEs: '🎭 Revista de Entretenimiento', sourceEn: '🎭 Entertainment Magazine',
    titleEs: '"La diversidad es el mejor chiste"', titleEn: '"Diversity is the best joke"',
    descEs: 'Entrevista sobre cómo los muñecos del mundo enseñan a los niños sobre diferentes culturas a través de la risa.',
    descEn: 'Interview about how world toys teach children about different cultures through laughter.',
  },
]

const stats = [
  { number: '500+', labelEs: 'Shows', labelEn: 'Shows' },
  { number: '15+', labelEs: 'Países', labelEn: 'Countries' },
  { number: '1M+', labelEs: 'Fans', labelEn: 'Fans' },
  { number: '8', labelEs: 'Actos Únicos', labelEn: 'Unique Acts' },
  { number: '200+', labelEs: 'Muñecos', labelEn: 'Toys' },
]

export default function Prensa() {
  return (
    <>
      <PageHero color="dark">
        <h1><T es="Prensa & Media Kit" en="Press & Media Kit" /></h1>
        <p><T es="Recursos para medios de comunicación, periodistas y colaboradores 📰" en="Resources for media, journalists, and collaborators 📰" /></p>
      </PageHero>

      {/* MEDIA KIT */}
      <section className="content-section">
        <RevealOnScroll>
          <SectionTitle>Media Kit</SectionTitle>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="download-grid">
            {downloads.map((dl, i) => (
              <div key={i} className="download-card">
                {dl.img
                  ? <img src={dl.img} alt={dl.titleEs} style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 8, marginBottom: 10 }} />
                  : <div className="dl-icon">{dl.icon}</div>}
                <h4><T es={dl.titleEs} en={dl.titleEn} /></h4>
                <p><T es={dl.descEs} en={dl.descEn} /></p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <p style={{ textAlign: 'center', marginTop: 20, opacity: 0.7 }}>
            <T es="📱 Solicita el media kit completo por WhatsApp o email" en="📱 Request the full media kit via WhatsApp or email" />
          </p>
        </RevealOnScroll>
      </section>

      <Zigzag />

      {/* OFFICIAL BIOS */}
      <section className="content-section dark-bg">
        <div className="inner">
          <RevealOnScroll>
            <SectionTitle light><T es="Biografías Oficiales" en="Official Bios" /></SectionTitle>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="bio-box">
              <h3><T es="Biografía Corta (50 palabras)" en="Short Bio (50 words)" /></h3>
              <p><T
                es='Andrés el Payasito, conocido como "El Paleta Payaso" y "El Títere Humano", es un payaso de renombre mundial abiertamente gay. Su acto principal consiste en ser un títere de mano humano sentado en una mano gigante. Con su gorila compañera, su colección de muñecos masculinos de todas las etnias, y su acto terrian de perro, Andrés ha llevado risas a más de 15 países.'
                en='Andrés el Payasito, known as "El Paleta Payaso" and "The Human Hand Puppet," is a world-renowned openly gay clown. His main act involves being a human hand puppet sitting on a giant hand. With his gorilla companion, his collection of male action figures from all ethnicities, and his terrian dog act, Andrés has brought laughter to over 15 countries.'
              /></p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="bio-box">
              <h3><T es="Biografía Larga (150 palabras)" en="Long Bio (150 words)" /></h3>
              <p><T
                es='Andrés el Payasito es un artista escénico de renombre internacional, conocido cariñosamente como "El Paleta Payaso" y "El Títere Humano" — un título que lleva con orgullo absoluto. Abiertamente gay y orgullosamente payaso, Andrés ha revolucionado el entretenimiento en vivo con su acto icónico: sentarse en una mano gigante de 15kg y cobrar vida como un títere humano.'
                en='Andrés el Payasito is an internationally renowned performing artist, affectionately known as "El Paleta Payaso" and "The Human Hand Puppet" — a title he wears with absolute pride. Openly gay and proudly a clown, Andrés has revolutionized live entertainment with his iconic act: sitting on a giant 15kg hand and coming alive as a human puppet.'
              /></p>
              <p style={{ marginTop: 10 }}><T
                es='Su elenco incluye a La Gorila, su inseparable compañera de baile, y El Capitán, un entusiasta de las criptomonedas que aporta humor tech al show. Andrés es un apasionado coleccionista de muñecos masculinos de todas las etnias, incorporándolos en su acto "Los Muñecos del Mundo". También destaca su acto terrian donde se disfraza de perro, ladrando, persiguiendo su cola y haciendo trucos. Con más de 500 shows en 15+ países, Andrés demuestra que la risa no tiene fronteras, orientación ni límites.'
                en='His cast includes La Gorila, his inseparable dance partner, and El Capitán, a cryptocurrency enthusiast who brings tech humor to the show. Andrés is a passionate collector of male action figures from all ethnicities, incorporating them into his "Toys of the World" act. He also shines in his terrian act where he dresses up as a dog, barking, chasing his tail, and doing tricks. With over 500 shows in 15+ countries, Andrés proves that laughter knows no borders, orientation, or limits.'
              /></p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="content-section">
        <RevealOnScroll>
          <SectionTitle><T es="Datos Clave" en="Key Facts" /></SectionTitle>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="stats-bar" style={{ maxWidth: 900, margin: '0 auto' }}>
            {stats.map((s, i) => (
              <div key={i} className="stat-item">
                <div className="stat-number" style={{ color: 'var(--red)' }}>{s.number}</div>
                <div className="stat-label"><T es={s.labelEs} en={s.labelEn} /></div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <Zigzag />

      {/* PRESS MENTIONS */}
      <section className="content-section dark-bg">
        <div className="inner">
          <RevealOnScroll>
            <SectionTitle light><T es="En los Medios" en="In the Media" /></SectionTitle>
          </RevealOnScroll>
          <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {pressMentions.map((pm, i) => (
              <RevealOnScroll key={i}>
                <div className="press-card">
                  <div className="source"><T es={pm.sourceEs} en={pm.sourceEn} /></div>
                  <h3><T es={pm.titleEs} en={pm.titleEn} /></h3>
                  <p><T es={pm.descEs} en={pm.descEn} /></p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS CONTACT */}
      <section className="content-section" style={{ maxWidth: 700, textAlign: 'center' }}>
        <RevealOnScroll>
          <SectionTitle><T es="Contacto de Prensa" en="Press Contact" /></SectionTitle>
        </RevealOnScroll>
        <RevealOnScroll>
          <div style={{ background: 'white', border: '5px solid var(--dark)', borderRadius: 24, padding: 40, boxShadow: '8px 8px 0 var(--dark)' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: 20 }}>
              <T es="Para entrevistas, colaboraciones y solicitudes de medios:" en="For interviews, collaborations, and media requests:" />
            </p>
            <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--red)', marginBottom: 8 }}>
              📧 prensa@andreselpayasito.com
            </p>
            <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--green)', marginBottom: 25 }}>
              📱 +52 81 1531 7934
            </p>
            <Btn href={WA_LINKS.prensa} color="green" target="_blank">
              📱 <T es="Contactar por WhatsApp" en="Contact via WhatsApp" />
            </Btn>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
