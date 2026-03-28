const WA_PHONE = '528115317934'
const IG_USER = 'andreszepedaz01'

// WhatsApp links
export const wa = (message) =>
  `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`

// Instagram DM link
export const igDm = `https://ig.me/m/${IG_USER}`
export const igProfile = `https://instagram.com/${IG_USER}`

export const WA_LINKS = {
  general: wa('¡Hola! Quiero info sobre Andrés el Payasito 🤡'),
  boletos: wa('¡Hola! Quiero reservar boletos para el show de Andrés el Payasito 🤡'),
  eventos: wa('¡Hola! Quiero cotizar un evento privado 🎪'),
  merch: wa('¡Hola! Quiero merch del Payasito 🛍️'),
  prensa: wa('¡Hola! Soy de prensa y me gustaría contactar a Andrés el Payasito 📰'),
}

export const waShow = (showName) =>
  wa(`¡Hola! Quiero boletos para ${showName} 🤡`)

export const waProduct = (productName) =>
  wa(`¡Hola! Quiero ${productName} 🛍️`)

export const waEvent = (formData) =>
  wa(`¡Hola! 🤡 Quiero cotizar un evento privado:\n\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nTipo: ${formData.type}\nFecha: ${formData.date}\nInvitados: ${formData.guests}\nDetalles: ${formData.details}`)
