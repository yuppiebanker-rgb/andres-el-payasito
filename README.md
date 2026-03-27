# 🤡 Andrés el Payasito — El Títere Humano

Official website for Andrés el Payasito, a world-renowned openly gay clown known as "El Paleta Payaso" and "The Human Hand Puppet."

## 🎪 Tech Stack
- **React 18** + **Vite 5**
- **React Router** for SPA navigation
- **Custom CSS** (no Tailwind — custom circus design system)
- **Vercel** deployment

## 📁 Project Structure
```
src/
├── assets/images/       # Photos & media
├── components/
│   ├── Layout.jsx       # Nav, Footer, WhatsApp float
│   ├── LangContext.jsx  # ES/EN language toggle
│   └── UI.jsx           # Reusable components
├── pages/
│   ├── Home.jsx         # ✅ Fully built
│   ├── SobreAndres.jsx  # ✅ Fully built
│   ├── LosActos.jsx     # 🔧 Stub — port from los-actos.html
│   ├── ElElenco.jsx     # 🔧 Stub — port from el-elenco.html
│   ├── Galeria.jsx      # 🔧 Stub — port from galeria.html
│   ├── Boletos.jsx      # 🔧 Stub — port from boletos.html
│   ├── EventosPrivados.jsx # 🔧 Stub — port from eventos-privados.html
│   ├── Tienda.jsx       # 🔧 Stub — port from tienda.html
│   └── Prensa.jsx       # 🔧 Stub — port from prensa.html
├── styles/global.css    # All styles
├── utils/whatsapp.js    # WhatsApp link builder (+52 81 1531 7934)
├── App.jsx              # Router config
└── main.jsx             # Entry point
```

## 🚀 Getting Started
```bash
npm install
npm run dev
```

## 🔧 Claude Code Instructions
The 6 stub pages need their full content ported from the HTML versions (included in `/reference-html/`). Each HTML file has complete bilingual content ready to be converted to React components using the `<T es="..." en="..." />` pattern and shared UI components.

**Priority order:**
1. LosActos.jsx (detailed act cards with alternating layout)
2. Boletos.jsx (show cards with WhatsApp booking)
3. ElElenco.jsx (cast bios)
4. Galeria.jsx (masonry gallery with filters)
5. Tienda.jsx (merch products)
6. EventosPrivados.jsx (packages + booking form)
7. Prensa.jsx (media kit + bios)

## 📱 WhatsApp Integration
All booking/purchase buttons link to: `+52 81 1531 7934`
Pre-filled messages are built via `src/utils/whatsapp.js`

## 🏳️‍🌈 Key Brand Elements
- Openly gay clown — pride is central to the brand
- "El Títere Humano" (Human Hand Puppet) — his signature act
- Male toy collection from all ethnicities
- Terrian act (dresses as a dog)
- La Gorila (female gorilla companion)
- El Capitán (crypto-loving white male partner)
- Circus maximalist design: Bungee Shade + Fredoka + Permanent Marker fonts
- Colors: Red, Yellow, Blue, Pink, with pride rainbow accents

## 📄 License
© 2026 Andrés el Payasito. All rights reserved.
