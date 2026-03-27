import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LangProvider } from './components/LangContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import SobreAndres from './pages/SobreAndres'
import LosActos from './pages/LosActos'
import ElElenco from './pages/ElElenco'
import Galeria from './pages/Galeria'
import Boletos from './pages/Boletos'
import EventosPrivados from './pages/EventosPrivados'
import Tienda from './pages/Tienda'
import Prensa from './pages/Prensa'

export default function App() {
  return (
    <LangProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<SobreAndres />} />
            <Route path="/actos" element={<LosActos />} />
            <Route path="/elenco" element={<ElElenco />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/boletos" element={<Boletos />} />
            <Route path="/eventos" element={<EventosPrivados />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/prensa" element={<Prensa />} />
          </Route>
        </Routes>
      </Router>
    </LangProvider>
  )
}
