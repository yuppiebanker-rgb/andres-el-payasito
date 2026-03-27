// SobreAndres.jsx - About page
import { T } from '../components/LangContext'
import { PageHero, RevealOnScroll, Zigzag, SectionTitle, Btn } from '../components/UI'
import { WA_LINKS } from '../utils/whatsapp'
import headshot from '../assets/images/andres-headshot.png'

export default function SobreAndres() {
  return (
    <>
      <PageHero color="red">
        <h1><T es="Sobre Andrés" en="About Andrés" /></h1>
        <p><T es="La historia del payaso títere de mano más famoso del mundo 🤡🖐️" en="The story of the world's most famous hand puppet clown 🤡🖐️" /></p>
      </PageHero>

      <section className="content-section">
        <div className="bio-layout">
          <div className="bio-photo">
            <div className="bio-avatar">
              <img src={headshot} alt="Andrés el Payasito" />
            </div>
            <span className="pride-badge">🏳️‍🌈 <T es="Orgullosamente Gay" en="Proudly Gay" /></span>
          </div>
          <div className="bio-text">
            <h2 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: '1.8rem', marginBottom: 15 }}>
              <T es='Andrés "El Payasito" — El Paleta Payaso — El Títere Humano' en='Andrés "El Payasito" — The Puppet Clown — The Human Hand Puppet' />
            </h2>
            <p><T es="Andrés el Payasito es un payaso de renombre mundial conocido por su acto único: ¡ser un títere de mano humano! Se sienta en una mano gigante y cobra vida como el muñeco más carismático que jamás hayas visto. Abiertamente gay y orgullosamente payaso, Andrés ha roto barreras y ha demostrado que el amor, la diversidad y las risas van de la mano." en="Andrés el Payasito is a world-renowned clown known for his unique act: being a human hand puppet! He sits on a giant hand and comes alive as the most charismatic puppet you've ever seen. Openly gay and proudly a clown, Andrés has broken barriers and shown that love, diversity, and laughter go hand in hand." /></p>
            <p><T es='Conocido cariñosamente como "El Paleta Payaso" y "El Títere Humano", Andrés ama ser llamado así — es su identidad, su pasión y su vida.' en='Affectionately known as "El Paleta Payaso" and "The Human Hand Puppet," Andrés loves being called these names — it\'s his identity, his passion, and his life.' /></p>
            <p><T es="Fanático de los muñecos masculinos de todas las etnias y nacionalidades, Andrés incorpora su increíble colección de action figures y juguetes en sus shows. También se disfraza de perro en su famoso acto terrian donde ladra, persigue su cola y hace trucos." en="A fan of male action figures and toys from all ethnicities and nationalities, Andrés incorporates his incredible collection into his shows. He also dresses up as a dog in his famous terrian act where he barks, chases his tail, and does tricks." /></p>
          </div>
        </div>
      </section>

      <Zigzag />

      <section className="content-section dark-bg">
        <div className="inner">
          <RevealOnScroll>
            <div className="stats-bar">
              {[
                { num: '500+', labelEs: 'Shows Realizados', labelEn: 'Shows Performed' },
                { num: '15+', labelEs: 'Países Visitados', labelEn: 'Countries Visited' },
                { num: '1M+', labelEs: 'Sonrisas Creadas', labelEn: 'Smiles Created' },
                { num: '200+', labelEs: 'Muñecos Coleccionados', labelEn: 'Toys Collected' },
              ].map((s, i) => (
                <div key={i} className="stat-item">
                  <div className="stat-number">{s.num}</div>
                  <div className="stat-label"><T es={s.labelEs} en={s.labelEn} /></div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Zigzag flip />

      <section className="content-section" style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Permanent Marker', cursive", fontSize: '2rem', marginBottom: 20 }}>
          <T es="¿Quieres ver a Andrés en acción?" en="Want to see Andrés in action?" />
        </h2>
        <Btn href="/boletos" color="red" style={{ marginRight: 15 }}>🎟️ <T es="Ver Boletos" en="See Tickets" /></Btn>
        <Btn href={WA_LINKS.general} color="green" target="_blank">📱 WhatsApp</Btn>
      </section>
    </>
  )
}
