import { createContext, useContext, useState } from 'react'

const LangContext = createContext()

const translations = {
  nav: {
    inicio: { es: 'Inicio', en: 'Home' },
    sobre: { es: 'Sobre', en: 'About' },
    actos: { es: 'Actos', en: 'Acts' },
    elenco: { es: 'Elenco', en: 'Cast' },
    galeria: { es: 'Galería', en: 'Gallery' },
    boletos: { es: 'Boletos', en: 'Tickets' },
    eventos: { es: 'Eventos', en: 'Events' },
    tienda: { es: 'Tienda', en: 'Shop' },
    prensa: { es: 'Prensa', en: 'Press' },
  },
  common: {
    reservar: { es: 'Reservar', en: 'Book' },
    comprar: { es: 'Comprar', en: 'Buy' },
    cotizar: { es: 'Cotizar', en: 'Get Quote' },
    verShows: { es: 'Ver Próximos Shows', en: 'See Upcoming Shows' },
    whatsapp: { es: '¡Escríbenos!', en: 'Message us!' },
    desde: { es: 'Desde', en: 'From' },
  },
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState('es')
  const toggle = () => setLang(l => l === 'es' ? 'en' : 'es')
  const t = (key) => {
    const parts = key.split('.')
    let val = translations
    for (const p of parts) {
      val = val?.[p]
    }
    return val?.[lang] || key
  }

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}

export function T({ es, en }) {
  const { lang } = useLang()
  return lang === 'es' ? es : en
}
