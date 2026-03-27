import { Link } from 'react-router-dom'
import { T } from '../components/LangContext'
import { PageHero, RevealOnScroll, Btn } from '../components/UI'
import { WA_LINKS } from '../utils/whatsapp'
import headshot from '../assets/images/andres-headshot.png'

const cast = [
  {
    img: headshot,
    name: 'Andrés el Payasito',
    roleEs: '🏳️‍🌈 Estrella Principal — El Títere Humano',
    roleEn: '🏳️‍🌈 Lead Star — The Human Puppet',
    bioEs: [
      'Andrés es el corazón y alma del show. Abiertamente gay y orgullosamente payaso, es conocido en todo el mundo como "El Paleta Payaso" y "El Títere Humano" — un nombre que lleva con orgullo total. Se sienta en su mano gigante de 15kg y cobra vida como el títere más carismático del universo.',
      'Fanático de los muñecos masculinos de todas las etnias, su colección de más de 200 action figures es legendaria. También se disfraza de perro en su famoso acto terrian. Ser payaso es su vida, su pasión y su mayor alegría.',
    ],
    bioEn: [
      'Andrés is the heart and soul of the show. Openly gay and proudly a clown, he\'s known worldwide as "El Paleta Payaso" and "The Human Hand Puppet" — a name he wears with total pride. He sits on his giant 15kg hand and comes alive as the most charismatic puppet in the universe.',
      'A fan of male action figures from all ethnicities, his collection of over 200 figures is legendary. He also dresses up as a dog in his famous terrian act. Being a clown is his life, his passion, and his greatest joy.',
    ],
    moves: [
      { emoji: '🖐️', es: 'Títere Humano', en: 'Human Puppet' },
      { emoji: '⚖️', es: 'El Abogado', en: 'The Lawyer' },
      { emoji: '🐕', es: 'Acto Terrian', en: 'Terrian Act' },
      { emoji: '🧸', es: 'Los Muñecos', en: 'The Toys' },
      { emoji: '🎤', es: 'Stand-Up', en: 'Stand-Up' },
    ],
    gradient: 'linear-gradient(135deg, var(--red), var(--pink))',
  },
  {
    emoji: '🦍',
    name: 'La Gorila',
    roleEs: '🍌 Co-Estrella — La Compañera Inseparable',
    roleEn: '🍌 Co-Star — The Inseparable Companion',
    bioEs: [
      'Salvaje, divertida y con más ritmo que nadie en el elenco. La gorila hembra es la compañera perfecta de Andrés. Juntos crean sketches hilarantes que van desde duelos de baile hasta persecuciones por el escenario.',
      'Nadie sabe quién está detrás del disfraz (¡y así nos gusta!). Lo que sí sabemos es que su baile de salsa es legendario y que puede hacer reír a cualquiera con solo un gesto.',
    ],
    bioEn: [
      'Wild, funny, and with more rhythm than anyone in the cast. The female gorilla is Andrés\'s perfect companion. Together they create hilarious sketches ranging from dance battles to chases across the stage.',
      'Nobody knows who\'s behind the costume (and that\'s how we like it!). What we do know is that her salsa dance is legendary and she can make anyone laugh with just a gesture.',
    ],
    moves: [
      { emoji: '💃', es: 'Duelo de Baile', en: 'Dance Battle' },
      { emoji: '🍌', es: 'Sketches con Andrés', en: 'Sketches with Andrés' },
      { emoji: '🎪', es: 'Gran Final', en: 'Grand Finale' },
    ],
    gradient: 'linear-gradient(135deg, var(--purple), var(--blue))',
  },
  {
    emoji: '🧑‍✈️',
    name: 'El Capitán',
    roleEs: '₿ Compañero — El Cripto-Aventurero',
    roleEn: '₿ Partner — The Crypto-Adventurer',
    bioEs: [
      'El Capitán es un hombre blanco amante del crypto que llegó al show para quedarse. Con su gorra de capitán y su celular siempre en mano (revisando charts de Bitcoin), es el complemento perfecto de Andrés. Su frase favorita: "¡TO THE MOON!" 🚀',
      'Sus sketches sobre intentar pagar con Bitcoin, explicar NFTs a niños, y sus predicciones de mercado que nunca aciertan son material de oro cómico.',
    ],
    bioEn: [
      'The Captain is a white man and crypto enthusiast who joined the show and never left. With his captain\'s hat and phone always in hand (checking Bitcoin charts), he\'s Andrés\'s perfect complement. His favorite phrase: "TO THE MOON!" 🚀',
      'His sketches about trying to pay with Bitcoin, explaining NFTs to kids, and his market predictions that never come true are pure comedy gold.',
    ],
    moves: [
      { emoji: '₿', es: 'Sketches Crypto', en: 'Crypto Sketches' },
      { emoji: '🚀', es: 'TO THE MOON!', en: 'TO THE MOON!' },
      { emoji: '🎪', es: 'Gran Final', en: 'Grand Finale' },
    ],
    gradient: 'linear-gradient(135deg, var(--blue), var(--green))',
  },
]

export default function ElElenco() {
  return (
    <>
      <PageHero color="purple">
        <h1><T es="El Elenco" en="The Cast" /></h1>
        <p><T es="Conoce a los personajes que hacen de cada show una experiencia mágica 🎭" en="Meet the characters that make every show a magical experience 🎭" /></p>
      </PageHero>

      <section className="content-section" style={{ maxWidth: 1000 }}>
        {cast.map((member, i) => (
          <RevealOnScroll key={i}>
            <div className="cast-hero-card">
              <div className="cast-photo" style={{ background: member.gradient }}>
                {member.img ? <img src={member.img} alt={member.name} /> : member.emoji}
              </div>
              <div className="cast-bio">
                <h2>{member.name}</h2>
                <span className="role-tag"><T es={member.roleEs} en={member.roleEn} /></span>
                {member.bioEs.map((p, j) => (
                  <p key={j}><T es={p} en={member.bioEn[j]} /></p>
                ))}
                <div className="signature-moves">
                  <h4><T es="Actos Firma:" en="Signature Acts:" /></h4>
                  {member.moves.map((m, j) => (
                    <span key={j} className="move-tag">{m.emoji} <T es={m.es} en={m.en} /></span>
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
            <T es="¡Ven a conocerlos en persona!" en="Come meet them in person!" />
          </h2>
          <Link to="/boletos" className="btn red">🎟️ <T es="Ver Shows" en="See Shows" /></Link>
        </div>
      </section>
    </>
  )
}
