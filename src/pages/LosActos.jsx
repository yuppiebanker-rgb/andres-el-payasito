import { Link } from 'react-router-dom'
import { T } from '../components/LangContext'
import { PageHero, RevealOnScroll, Zigzag, SectionTitle, Btn } from '../components/UI'
import { WA_LINKS } from '../utils/whatsapp'
import headshot from '../assets/images/andres-headshot.png'
import composite from '../assets/images/andres-composite.png'

const acts = [
  {
    emoji: '🖐️🤡', img: headshot,
    tagEs: '⭐ Acto Principal', tagEn: '⭐ Main Act',
    titleEs: 'El Títere Humano', titleEn: 'The Human Puppet',
    durationEs: '25 minutos', durationEn: '25 minutes',
    descEs: 'El acto insignia de Andrés. Se sienta en una mano gigante de 15kg y cobra vida como un títere humano. Con movimientos exagerados, voces graciosas y una conexión increíble con el público, este acto desafía la realidad. ¡Le encanta que le llamen "El Títere Humano" — es su mayor orgullo!',
    descEn: 'Andrés\'s signature act. He sits on a giant 15kg hand and comes alive as a human puppet. With exaggerated movements, funny voices, and an incredible connection with the audience, this act defies reality. He loves being called "The Human Puppet" — it\'s his greatest pride!',
    tags: [
      { emoji: '🖐️', es: 'Mano Gigante', en: 'Giant Hand' },
      { emoji: '😂', es: 'Improvisación', en: 'Improv' },
      { emoji: '👨‍👩‍👧‍👦', es: 'Familiar', en: 'Family' },
    ],
    gradient: 'linear-gradient(135deg, var(--red), var(--pink))',
  },
  {
    emoji: '⚖️👔',
    tagEs: 'Comedia', tagEn: 'Comedy',
    titleEs: 'El Abogado Payaso', titleEn: 'The Clown Lawyer',
    durationEs: '20 minutos', durationEn: '20 minutes',
    descEs: 'Vestido con traje, corbata y nariz roja, Andrés se transforma en el abogado más incompetente del mundo. Defiende casos absurdos como "El Caso del Pastel Desaparecido" y "La Demanda del Payaso Triste". Con un maletín lleno de confetti en vez de documentos, este acto es pura comedia de oro.',
    descEn: 'Dressed in a suit, tie, and red nose, Andrés transforms into the world\'s most incompetent lawyer. He defends absurd cases like "The Case of the Missing Cake" and "The Lawsuit of the Sad Clown." With a briefcase full of confetti instead of documents, this act is pure comedy gold.',
    tags: [
      { emoji: '👔', es: 'Disfraz', en: 'Costume' },
      { emoji: '📋', es: 'Sketches', en: 'Sketches' },
      { emoji: '🎭', es: 'Actuación', en: 'Acting' },
    ],
    gradient: 'linear-gradient(135deg, var(--blue), var(--purple))',
  },
  {
    emoji: '🦍💃',
    tagEs: 'Clásico', tagEn: 'Classic',
    titleEs: 'Baile con la Gorila', titleEn: 'Dance with the Gorilla',
    durationEs: '15 minutos', durationEn: '15 minutes',
    descEs: 'La gorila hembra y Andrés se enfrentan en un épico duelo de baile. Desde salsa hasta reggaetón, desde cumbia hasta breakdance. La gorila siempre gana... o eso cree ella. El público vota por el ganador con sus aplausos. ¡Pura energía!',
    descEn: 'The female gorilla and Andrés face off in an epic dance battle. From salsa to reggaeton, from cumbia to breakdance. The gorilla always wins... or so she thinks. The audience votes for the winner with their applause. Pure energy!',
    tags: [
      { emoji: '💃', es: 'Baile', en: 'Dance' },
      { emoji: '🦍', es: 'La Gorila', en: 'The Gorilla' },
      { emoji: '🗳️', es: 'Público Vota', en: 'Audience Votes' },
    ],
    gradient: 'linear-gradient(135deg, var(--green), var(--blue))',
  },
  {
    emoji: '🐕🦴',
    tagEs: '¡Guau!', tagEn: 'Woof!',
    titleEs: 'El Perro Payaso — Acto Terrian', titleEn: 'The Clown Dog — Terrian Act',
    durationEs: '15 minutos', durationEn: '15 minutes',
    descEs: '¡Andrés se disfraza de perro y se transforma completamente! Ladra, persigue su cola, pide croquetas al público, marca territorio (con confetti), juega con pelotas y hace trucos increíbles. Tiene tres disfraces diferentes: chihuahua, labrador y pastor alemán. ¡El acto terrian que enloquece a todos!',
    descEn: 'Andrés dresses up as a dog and completely transforms! He barks, chases his tail, begs the audience for treats, marks his territory (with confetti), plays with balls, and does incredible tricks. He has three different costumes: chihuahua, labrador, and German shepherd. The terrian act that drives everyone crazy!',
    tags: [
      { emoji: '🐕', es: 'Disfraz de Perro', en: 'Dog Costume' },
      { emoji: '🦴', es: 'Trucos', en: 'Tricks' },
      { emoji: '🎾', es: 'Interactivo', en: 'Interactive' },
    ],
    gradient: 'linear-gradient(135deg, var(--orange), var(--yellow))',
  },
  {
    emoji: '🏴‍☠️📱', img: composite,
    tagEs: 'Dúo Dinámico', tagEn: 'Dynamic Duo',
    titleEs: 'El Payasito y El Capitán', titleEn: 'The Clown & The Captain',
    durationEs: '20 minutos', durationEn: '20 minutes',
    descEs: 'El Capitán, un hombre blanco obsesionado con las criptomonedas, y Andrés crean sketches hilarantes sobre el mundo moderno. Desde intentar comprar tacos con Bitcoin hasta explicar NFTs a la gorila. "¡TO THE MOON!" es su grito de batalla. La química entre estos dos es explosiva.',
    descEn: 'The Captain, a white man obsessed with cryptocurrency, and Andrés create hilarious sketches about the modern world. From trying to buy tacos with Bitcoin to explaining NFTs to the gorilla. "TO THE MOON!" is their battle cry. The chemistry between these two is explosive.',
    tags: [
      { emoji: '₿', es: 'Crypto', en: 'Crypto' },
      { emoji: '🚀', es: 'Comedia Tech', en: 'Tech Comedy' },
      { emoji: '👫', es: 'Dúo', en: 'Duo' },
    ],
    gradient: 'linear-gradient(135deg, var(--purple), var(--pink))',
  },
  {
    emoji: '🧸🌎',
    tagEs: 'Favorito del Público', tagEn: 'Audience Favorite',
    titleEs: 'Los Muñecos del Mundo', titleEn: 'Toys of the World',
    durationEs: '20 minutos', durationEn: '20 minutes',
    descEs: 'Andrés saca su colección de muñecos masculinos de todas las etnias y nacionalidades. Cada figura cobra vida con su propia voz, acento y personalidad. Desde un samurái japonés hasta un vaquero texano, cada muñeco tiene su historia. Es una celebración de la diversidad que enseña y divierte al mismo tiempo.',
    descEn: 'Andrés brings out his collection of male action figures from all ethnicities and nationalities. Each figure comes alive with its own voice, accent, and personality. From a Japanese samurai to a Texan cowboy, each toy has its story. It\'s a celebration of diversity that teaches and entertains at the same time.',
    tags: [
      { emoji: '🌍', es: 'Diversidad', en: 'Diversity' },
      { emoji: '🧸', es: 'Colección', en: 'Collection' },
      { emoji: '🗣️', es: 'Voces', en: 'Voices' },
    ],
    gradient: 'linear-gradient(135deg, var(--red), var(--orange))',
  },
  {
    emoji: '🎤😂',
    tagEs: 'Interactivo', tagEn: 'Interactive',
    titleEs: 'Stand-Up Payaso', titleEn: 'Clown Stand-Up',
    durationEs: '15 minutos', durationEn: '15 minutes',
    descEs: 'Andrés toma el micrófono e interactúa directamente con el público. Nadie se salva de sus bromas. Con su ingenio rápido y su carisma arrollador, cada función es diferente. ¡Los mejores momentos nacen de la improvisación!',
    descEn: 'Andrés grabs the microphone and interacts directly with the audience. Nobody escapes his jokes. With his quick wit and overwhelming charisma, every show is different. The best moments are born from improvisation!',
    tags: [
      { emoji: '🎤', es: 'Micrófono', en: 'Microphone' },
      { emoji: '🎯', es: 'Improvisación', en: 'Improv' },
      { emoji: '👥', es: 'Participación', en: 'Participation' },
    ],
    gradient: 'linear-gradient(135deg, var(--green), var(--purple))',
  },
  {
    emoji: '🎪✨',
    tagEs: 'Espectáculo', tagEn: 'Spectacle',
    titleEs: 'El Gran Final', titleEn: 'The Grand Finale',
    durationEs: '15 minutos', durationEn: '15 minutes',
    descEs: 'Todo el elenco se reúne en el escenario para un cierre espectacular. Confetti, música, baile, y la participación de todo el público. Andrés vuelve a la mano gigante, La Gorila baila, El Capitán grita "HODL!", y los muñecos vuelan por el aire. ¡Una fiesta que nadie olvida!',
    descEn: 'The entire cast gathers on stage for a spectacular finale. Confetti, music, dance, and audience participation. Andrés returns to the giant hand, the Gorilla dances, the Captain shouts "HODL!", and toys fly through the air. A party nobody forgets!',
    tags: [
      { emoji: '🎊', es: 'Confetti', en: 'Confetti' },
      { emoji: '🎵', es: 'Música', en: 'Music' },
      { emoji: '👨‍👩‍👧‍👦', es: 'Todo el Elenco', en: 'Full Cast' },
    ],
    gradient: 'linear-gradient(135deg, var(--blue), var(--green))',
  },
]

export default function LosActos() {
  return (
    <>
      <PageHero color="blue">
        <h1><T es="Los Actos" en="The Acts" /></h1>
        <p><T es="Descubre cada uno de los actos que hacen del show de Andrés una experiencia inolvidable 🎪" en="Discover each act that makes Andrés's show an unforgettable experience 🎪" /></p>
      </PageHero>

      <section className="content-section" style={{ maxWidth: 1000 }}>
        {acts.map((act, i) => (
          <RevealOnScroll key={i}>
            <div className="act-detail" style={i % 2 === 1 ? { direction: 'rtl' } : {}}>
              <div className="act-visual" style={{ background: act.gradient }}>
                {act.img
                  ? <img src={act.img} alt={act.titleEs} style={i % 2 === 1 ? { direction: 'ltr' } : {}} />
                  : <span style={i % 2 === 1 ? { direction: 'ltr' } : {}}>{act.emoji}</span>}
              </div>
              <div className="act-info" style={i % 2 === 1 ? { direction: 'ltr' } : {}}>
                <span className="card-tag"><T es={act.tagEs} en={act.tagEn} /></span>
                <h2><T es={act.titleEs} en={act.titleEn} /></h2>
                <p className="duration">⏱ <T es={act.durationEs} en={act.durationEn} /></p>
                <p><T es={act.descEs} en={act.descEn} /></p>
                <div className="highlights">
                  {act.tags.map((tag, j) => (
                    <span key={j} className="highlight-tag">{tag.emoji} <T es={tag.es} en={tag.en} /></span>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </section>

      <section className="content-section dark-bg" style={{ textAlign: 'center', padding: '60px 40px' }}>
        <div className="inner">
          <h2 style={{ fontFamily: "'Permanent Marker',cursive", fontSize: '2rem', marginBottom: 20, color: 'var(--yellow)' }}>
            <T es="¿Listo para reír hasta llorar?" en="Ready to laugh until you cry?" />
          </h2>
          <Link to="/boletos" className="btn red" style={{ marginRight: 15 }}>🎟️ <T es="Comprar Boletos" en="Buy Tickets" /></Link>
          <Btn href={WA_LINKS.boletos} color="green" target="_blank">📱 WhatsApp</Btn>
        </div>
      </section>
    </>
  )
}
