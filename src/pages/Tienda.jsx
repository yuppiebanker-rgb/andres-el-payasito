import { T } from '../components/LangContext'
import { PageHero, RevealOnScroll, Btn } from '../components/UI'
import { waProduct, igDm } from '../utils/contact'
import handPuppetToy from '../assets/images/hand-puppet-toy.png'
import paletaArt from '../assets/images/paleta-payaso-art.png'

const products = [
  {
    emoji: '👕', gradient: 'linear-gradient(135deg,var(--red),var(--pink))',
    nameEs: 'Playera "El Títere Humano"', nameEn: '"The Human Puppet" T-Shirt',
    descEs: '100% algodón, diseño exclusivo', descEn: '100% cotton, exclusive design',
    price: '$350 MXN',
  },
  {
    emoji: '🧢', gradient: 'linear-gradient(135deg,var(--yellow),var(--orange))',
    nameEs: 'Gorra del Payasito', nameEn: 'Payasito Cap',
    descEs: 'Bordado con logo oficial', descEn: 'Embroidered with official logo',
    price: '$280 MXN',
  },
  {
    emoji: '🧸', gradient: 'linear-gradient(135deg,var(--purple),var(--blue))', img: handPuppetToy,
    nameEs: 'Mini Títere de Mano', nameEn: 'Mini Hand Puppet',
    descEs: 'Peluche coleccionable del Payasito', descEn: 'Collectible Payasito plush puppet',
    price: '$450 MXN',
  },
  {
    emoji: '🦍', gradient: 'linear-gradient(135deg,var(--green),var(--blue))',
    nameEs: 'Peluche La Gorila', nameEn: 'The Gorilla Plush',
    descEs: 'Peluche suave de La Gorila', descEn: 'Soft plush of The Gorilla',
    price: '$400 MXN',
  },
  {
    emoji: '🏳️‍🌈', gradient: 'linear-gradient(135deg,#E40303,#FF8C00,#FFED00,#008026,#24408E,#732982)',
    nameEs: 'Playera Pride del Payasito', nameEn: 'Payasito Pride T-Shirt',
    descEs: 'Edición especial orgullo', descEn: 'Special pride edition',
    price: '$380 MXN',
  },
  {
    emoji: '🐕', gradient: 'linear-gradient(135deg,var(--orange),var(--red))',
    nameEs: 'Disfraz Mini Perro Payaso', nameEn: 'Mini Clown Dog Costume',
    descEs: 'Para niños — Tallas 4-12', descEn: 'For kids — Sizes 4-12',
    price: '$550 MXN',
  },
  {
    emoji: '🤡', gradient: 'var(--dark)', color: 'var(--yellow)',
    nameEs: 'Nariz Roja Oficial', nameEn: 'Official Red Nose',
    descEs: 'La nariz que usa Andrés en escena', descEn: 'The nose Andrés wears on stage',
    price: '$80 MXN',
  },
  {
    emoji: '🧸🌎', gradient: 'linear-gradient(135deg,var(--blue),var(--green))',
    nameEs: 'Set Muñecos del Mundo', nameEn: 'World Toys Set',
    descEs: '5 muñecos de diferentes etnias', descEn: '5 figures from different ethnicities',
    price: '$650 MXN',
  },
]

export default function Tienda() {
  return (
    <>
      <PageHero color="yellow">
        <h1><T es="Tienda" en="Shop" /></h1>
        <p style={{ color: 'var(--dark)' }}>
          <T es="¡Llévate un pedacito del show a casa! Merch oficial del Payasito 🛍️" en="Take a piece of the show home! Official Payasito merch 🛍️" />
        </p>
      </PageHero>

      <section className="content-section">
        <RevealOnScroll>
          <div style={{ background: 'var(--red)', border: '4px solid var(--dark)', borderRadius: 16, padding: '20px 30px', marginBottom: 40, textAlign: 'center', color: 'white' }}>
            <p style={{ fontWeight: 700, fontSize: '1.1rem' }}>
              <T es="📱 Pide tu merch por WhatsApp — ¡Envíos a todo México!" en="📱 Order your merch via WhatsApp — Shipping all over Mexico!" />
            </p>
          </div>
        </RevealOnScroll>

        <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
          {products.map((product, i) => (
            <RevealOnScroll key={i}>
              <div className="product-card">
                <div className="product-image" style={{ background: product.gradient, color: product.color }}>
                  {product.img ? <img src={product.img} alt={product.nameEs} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : product.emoji}
                </div>
                <div className="product-body">
                  <h3><T es={product.nameEs} en={product.nameEn} /></h3>
                  <p style={{ fontSize: '0.85rem', color: '#777' }}><T es={product.descEs} en={product.descEn} /></p>
                  <div className="product-price">{product.price}</div>
                  <Btn href={waProduct(product.nameEs)} color="red" target="_blank" style={{ width: '100%', textAlign: 'center', fontSize: '0.85rem', padding: '10px 20px' }}>
                    📱 <T es="Comprar" en="Buy" />
                  </Btn>
                  <a href={igDm} target="_blank" rel="noopener noreferrer" className="btn pink" style={{ width: '100%', textAlign: 'center', marginTop: 8, fontSize: '0.85rem', padding: '8px 20px' }}>
                    📸 DM
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </>
  )
}
