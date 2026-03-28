import { Link } from 'react-router-dom'
import { T } from '../components/LangContext'
import { RevealOnScroll, Zigzag, SectionTitle, Btn } from '../components/UI'
import { WA_LINKS, waShow } from '../utils/whatsapp'
import headshot from '../assets/images/andres-headshot.png'
import composite from '../assets/images/andres-composite.png'
import heroImg from '../assets/images/hero-clown-makeup.png'
import titereHand1 from '../assets/images/titere-humano-hand-1.png'
import abogadoImg from '../assets/images/abogado-certificate.png'
import gorilaImg from '../assets/images/con-la-gorila.png'
import terrianImg from '../assets/images/terrian-companion.png'
import handPuppetConcept from '../assets/images/hand-puppet-concept.png'
import partyBalloonDog from '../assets/images/party-balloon-dog.png'
import balloonFlowers from '../assets/images/balloon-flowers-outdoor.png'
import duoParty from '../assets/images/duo-party.png'
import fullCostume from '../assets/images/full-costume-skyline.png'

const aboutCards = [
  { icon: '🖐️', titleEs: 'El Títere Humano', titleEn: 'The Human Puppet', descEs: '¡Le encanta que le digan "el títere de mano humano"! Andrés se sienta en su gigantesca mano y cobra vida como el muñeco más carismático del mundo. Ser payaso es su mayor pasión.', descEn: 'He loves being called "the human hand puppet"! Andrés sits on his giant hand and comes alive as the most charismatic puppet in the world. Being a clown is his greatest passion.', border: 'var(--yellow)' },
  { icon: '🦍', titleEs: 'Su Compañera Gorila', titleEn: 'His Gorilla Partner', descEs: 'Junto a su inseparable gorila hembra, crean sketches hilarantes que hacen reír a grandes y chicos por igual.', descEn: 'With his inseparable female gorilla, they create hilarious sketches that make young and old laugh alike.', border: 'var(--pink)' },
  { icon: '🏳️‍🌈', titleEs: 'Orgullo y Diversión', titleEn: 'Pride & Fun', descEs: 'Andrés es un payaso abiertamente gay y orgulloso. Demuestra que la alegría, el amor y la risa no tienen fronteras. ¡La diversidad hace al show más colorido!', descEn: 'Andrés is an openly gay and proud clown. He shows that joy, love, and laughter know no boundaries. Diversity makes the show more colorful!', border: 'rainbow' },
  { icon: '🧸', titleEs: 'Colección de Muñecos', titleEn: 'Toy Collection', descEs: 'Fanático de los muñecos masculinos de todas las etnias — action figures, marionetas y juguetes de todo el mundo forman parte de sus actos más queridos.', descEn: 'A fan of male toys from all ethnicities — action figures, puppets, and toys from around the world are part of his most beloved acts.', border: 'var(--orange)' },
  { icon: '🌍', titleEs: 'Fama Mundial', titleEn: 'World Fame', descEs: 'Reconocido internacionalmente por su estilo único y original. Sus shows han recorrido escenarios de todo el mundo.', descEn: 'Internationally recognized for his unique and original style. His shows have toured stages around the world.', border: 'var(--green)' },
  { icon: '😂', titleEs: 'Risas Garantizadas', titleEn: 'Laughs Guaranteed', descEs: 'Cada show es una montaña rusa de carcajadas. ¡Si no te ríes, te devolvemos tu sonrisa!', descEn: 'Every show is a rollercoaster of laughs. If you don\'t laugh, we\'ll give you back your smile!', border: 'var(--blue)' },
]

const acts = [
  { emoji: '🖐️🤡', tagEs: '⭐ Acto Principal', tagEn: '⭐ Main Act', titleEs: 'El Títere Humano', titleEn: 'The Human Puppet', descEs: 'Andrés se convierte en un títere de mano sentado en su gigantesca mano. ¡Un espectáculo que desafía la realidad y explota las risas!', descEn: 'Andrés becomes a hand puppet sitting on his giant hand. A show that defies reality and explodes with laughs!', img: titereHand1, gradient: 'linear-gradient(135deg, var(--red), var(--pink))' },
  { emoji: '⚖️👔', tagEs: 'Comedia', tagEn: 'Comedy', titleEs: 'El Abogado Payaso', titleEn: 'The Clown Lawyer', descEs: 'Vestido de traje y corbata, Andrés defiende los casos más absurdos del mundo. ¡Objeción, su señoría... por exceso de diversión!', descEn: 'Dressed in a suit and tie, Andrés defends the most absurd cases in the world. Objection, your honor... for excessive fun!', img: abogadoImg, gradient: 'linear-gradient(135deg, var(--blue), var(--purple))' },
  { emoji: '🦍💃', tagEs: 'Clásico', tagEn: 'Classic', titleEs: 'Baile con la Gorila', titleEn: 'Dance with the Gorilla', descEs: 'La gorila y Andrés compiten en un duelo de baile épico. ¿Quién tiene los mejores pasos? ¡El público decide!', descEn: 'The gorilla and Andrés compete in an epic dance battle. Who has the best moves? The audience decides!', img: gorilaImg, gradient: 'linear-gradient(135deg, var(--green), var(--blue))' },
  { emoji: '🐕🦴', tagEs: '¡Guau Guau!', tagEn: 'Woof Woof!', titleEs: 'El Perro Payaso', titleEn: 'The Clown Dog', descEs: '¡Andrés se disfraza de perro y actúa como uno! Ladra, persigue su cola, pide croquetas y hace trucos. El acto terrian que enloquece al público.', descEn: 'Andrés dresses up as a dog and acts like one! He barks, chases his tail, begs for treats, and does tricks. The terrian act that drives the audience crazy.', img: terrianImg, gradient: 'linear-gradient(135deg, var(--orange), var(--yellow))' },
  { emoji: '🏴‍☠️📱', tagEs: 'Dúo Dinámico', tagEn: 'Dynamic Duo', titleEs: 'El Payasito y El Capitán', titleEn: 'The Clown & The Captain', descEs: 'Junto a "El Capitán", su compañero cripto-obsesionado, crean sketches sobre las aventuras del mundo moderno. ¡TO THE MOON! 🚀', descEn: 'With "The Captain," his crypto-obsessed partner, they create sketches about modern world adventures. TO THE MOON! 🚀', img: duoParty, gradient: 'linear-gradient(135deg, var(--purple), var(--pink))' },
  { emoji: '🧸🌎', tagEs: 'Favorito del Público', tagEn: 'Audience Favorite', titleEs: 'Los Muñecos del Mundo', titleEn: 'Toys of the World', descEs: 'Andrés saca su colección de muñecos masculinos de todas las etnias y nacionalidades. Cada juguete tiene su propia personalidad y voz. ¡Una celebración de la diversidad!', descEn: 'Andrés brings out his collection of male toys from all ethnicities and nationalities. Each toy has its own personality and voice. A celebration of diversity!', img: handPuppetConcept, gradient: 'linear-gradient(135deg, var(--red), var(--orange))' },
  { emoji: '🎤😂', tagEs: 'Interactivo', tagEn: 'Interactive', titleEs: 'Stand-Up Payaso', titleEn: 'Clown Stand-Up', descEs: 'Andrés interactúa con el público en su segmento de comedia en vivo. ¡Nadie se salva de sus bromas!', descEn: 'Andrés interacts with the audience in his live comedy segment. Nobody escapes his jokes!', img: partyBalloonDog, gradient: 'linear-gradient(135deg, var(--green), var(--purple))' },
  { emoji: '🎪✨', tagEs: 'Espectáculo', tagEn: 'Spectacle', titleEs: 'El Gran Final', titleEn: 'The Grand Finale', descEs: 'Un cierre espectacular con confetti, música y la participación de todo el elenco. ¡Una fiesta inolvidable!', descEn: 'A spectacular finale with confetti, music, and the full cast. An unforgettable party!', img: balloonFlowers, gradient: 'linear-gradient(135deg, var(--blue), var(--green))' },
]

const shows = [
  { month: 'ABR', day: '12', name: 'Gran Show de Pascua 🐣', venue: 'Auditorio Citibanamex, Monterrey', time: '20:00 hrs', descEs: 'Función Familiar', descEn: 'Family Show' },
  { month: 'ABR', day: '26', name: 'Risa Express Tour 🚂', venue: 'Teatro de la Ciudad, CDMX', time: '18:00 & 21:00 hrs', descEs: 'Dos Funciones', descEn: 'Two Shows' },
  { month: 'MAY', day: '10', name: 'Especial Día de las Madres 💐', venue: 'Arena Monterrey', time: '17:00 hrs', descEs: '¡Mamás entran GRATIS!', descEn: 'Moms get in FREE!' },
  { month: 'JUN', day: '01', name: 'Festival del Día del Niño 🎈', venue: 'Parque Fundidora, Monterrey', time: '12:00 hrs', descEs: 'Evento al Aire Libre', descEn: 'Outdoor Event' },
]

const cast = [
  { emoji: '🤡', img: fullCostume, nameEs: 'Andrés el Payasito', nameEn: 'Andrés el Payasito', roleEs: '🏳️‍🌈 Estrella Principal — El Títere Humano', roleEn: '🏳️‍🌈 Lead Star — The Human Puppet', descEs: '¡El payaso títere de mano más querido del mundo! Abiertamente gay y orgullosamente payaso. Maestro del humor, coleccionista de muñecos y la alegría en persona.', descEn: 'The world\'s most beloved hand puppet clown! Openly gay and proudly a clown. Master of humor, toy collector, and joy personified.', bg: 'var(--red)' },
  { emoji: '🦍', img: gorilaImg, nameEs: 'La Gorila', nameEn: 'The Gorilla', roleEs: '🍌 Co-Estrella — La Compañera Inseparable', roleEn: '🍌 Co-Star — The Inseparable Companion', descEs: 'Salvaje, divertida y con más ritmo que nadie. La gorila hembra que roba el show en cada función.', descEn: 'Wild, funny, and with more rhythm than anyone. The female gorilla who steals the show every performance.', bg: 'var(--purple)' },
  { emoji: '🧑‍✈️', img: duoParty, nameEs: 'El Capitán', nameEn: 'The Captain', roleEs: '₿ Compañero — El Cripto-Aventurero', roleEn: '₿ Partner — The Crypto-Adventurer', descEs: 'Siempre hablando de Bitcoin y blockchain, El Capitán trae el humor tech al escenario. ¡HODL the laughs!', descEn: 'Always talking Bitcoin and blockchain, The Captain brings tech humor to the stage. HODL the laughs!', bg: 'var(--blue)' },
]

export default function Home() {
  return (
    <>
      {/* MARQUEE */}
      <div className="marquee-banner">
        <div className="marquee-track">
          ★ ¡EL SHOW MÁS DIVERTIDO DE MÉXICO! ★ RISAS GARANTIZADAS ★ ANDRÉS EL PAYASITO ★ EL TÍTERE HUMANO 🖐️ ★ ORGULLO Y DIVERSIÓN 🏳️‍🌈 ★ ¡RESERVA TU FUNCIÓN HOY! ★ ¡EL SHOW MÁS DIVERTIDO DE MÉXICO! ★ RISAS GARANTIZADAS ★ ANDRÉS EL PAYASITO ★ EL TÍTERE HUMANO 🖐️ ★ ORGULLO Y DIVERSIÓN 🏳️‍🌈 ★ ¡RESERVA TU FUNCIÓN HOY! ★
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-image-placeholder"><img src={heroImg} alt="Andrés el Payasito" /></div>
          <div className="hero-badge">🏳️‍🌈 <T es="Payaso de Clase Mundial" en="World Class Clown" /> 🏳️‍🌈</div>
          <h1>Andrés<br/>El Payasito</h1>
          <h2>— El Paleta Payaso — El Títere Humano —</h2>
          <p><T es="¡El payaso títere de mano más divertido del mundo! Orgullosamente gay, orgullosamente payaso. Risas, diversidad y momentos inolvidables para todos." en="The world's funniest hand puppet clown! Proudly gay, proudly a clown. Laughs, diversity, and unforgettable moments for everyone." /></p>
          <Link to="/boletos" className="btn red" style={{ marginRight: 15 }}>🎟️ <T es="Ver Próximos Shows" en="See Upcoming Shows" /></Link>
          <a href={WA_LINKS.boletos} target="_blank" rel="noopener noreferrer" className="btn green">📱 <T es="Reservar por WhatsApp" en="Book via WhatsApp" /></a>
        </div>
      </section>

      <Zigzag />

      {/* ABOUT */}
      <section className="about-section">
        <RevealOnScroll>
          <SectionTitle light><T es="¿Quién es El Payasito?" en="Who is El Payasito?" /></SectionTitle>
        </RevealOnScroll>
        <div className="about-grid">
          {aboutCards.map((card, i) => (
            <RevealOnScroll key={i}>
              <div className="about-card" style={{
                borderColor: card.border === 'rainbow' ? undefined : card.border,
                borderImage: card.border === 'rainbow' ? 'linear-gradient(135deg, #E40303, #FF8C00, #FFED00, #008026, #24408E, #732982) 1' : undefined
              }}>
                <span className="icon">{card.icon}</span>
                <h3><T es={card.titleEs} en={card.titleEn} /></h3>
                <p><T es={card.descEs} en={card.descEn} /></p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <Zigzag flip />

      {/* ACTS */}
      <section className="acts-section">
        <RevealOnScroll>
          <SectionTitle><T es="Los Actos" en="The Acts" /></SectionTitle>
        </RevealOnScroll>
        <div className="acts-grid">
          {acts.map((act, i) => (
            <RevealOnScroll key={i}>
              <div className="act-card">
                <div className="act-image" style={{ background: act.gradient }}>
                  {act.img ? <img src={act.img} alt={act.titleEs} /> : act.emoji}
                </div>
                <div className="act-body">
                  <span className="act-tag"><T es={act.tagEs} en={act.tagEn} /></span>
                  <h3><T es={act.titleEs} en={act.titleEn} /></h3>
                  <p><T es={act.descEs} en={act.descEn} /></p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <Zigzag />

      {/* CAST */}
      <section className="cast-section">
        <RevealOnScroll>
          <SectionTitle light><T es="El Elenco" en="The Cast" /></SectionTitle>
        </RevealOnScroll>
        <div className="cast-grid">
          {cast.map((member, i) => (
            <RevealOnScroll key={i}>
              <div className="cast-card">
                <div className="cast-avatar" style={{ background: member.bg }}>
                  {member.img ? <img src={member.img} alt={member.nameEs} /> : member.emoji}
                </div>
                <h3><T es={member.nameEs} en={member.nameEn} /></h3>
                <p className="role"><T es={member.roleEs} en={member.roleEn} /></p>
                <p><T es={member.descEs} en={member.descEn} /></p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <Zigzag flip />

      {/* SHOWS */}
      <section className="shows-section">
        <RevealOnScroll>
          <SectionTitle><T es="Próximos Shows" en="Upcoming Shows" /></SectionTitle>
        </RevealOnScroll>
        <div className="shows-list">
          {shows.map((show, i) => (
            <RevealOnScroll key={i}>
              <div className="show-item">
                <div className="show-date">
                  <div className="month">{show.month}</div>
                  <div className="day">{show.day}</div>
                </div>
                <div className="show-info">
                  <h3>{show.name}</h3>
                  <p className="venue">📍 {show.venue}</p>
                  <p>{show.time} — <T es={show.descEs} en={show.descEn} /></p>
                </div>
                <a href={waShow(show.name)} target="_blank" rel="noopener noreferrer" className="ticket-btn">
                  🎟️ <T es="Reservar" en="Book" />
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <RevealOnScroll>
          <SectionTitle><T es="Lo Que Dicen" en="What They Say" /></SectionTitle>
        </RevealOnScroll>
        <div className="testimonial-carousel">
          {[
            { textEs: '¡Mis hijos no pararon de reír en todo el show! El acto de la mano gigante es algo que NUNCA habíamos visto. ¡Regresaremos!', textEn: 'My kids didn\'t stop laughing the entire show! The giant hand act is something we had NEVER seen. We\'ll be back!', author: 'María González, Monterrey' },
            { textEs: 'El sketch del abogado con El Capitán hablando de crypto es GENIAL. Me dolía el estómago de tanto reír. ¡Pura comedia de primera!', textEn: 'The lawyer sketch with The Captain talking about crypto is GENIUS. My stomach hurt from laughing so much. Pure first-class comedy!', author: 'Roberto Treviño, CDMX' },
            { textEs: 'Andrés es un genio del entretenimiento. La gorila bailando salsa fue el momento más divertido que he vivido en un teatro.', textEn: 'Andrés is an entertainment genius. The gorilla dancing salsa was the funniest moment I\'ve ever experienced in a theater.', author: 'Ana Sofía Ruiz, Guadalajara' },
          ].map((t, i) => (
            <RevealOnScroll key={i}>
              <div className="testimonial">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <blockquote>"<T es={t.textEs} en={t.textEn} />"</blockquote>
                <p className="author">— {t.author}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  )
}
