import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import MenuBar from './components/Menubar'
import InicioVideo from './components/InicioVideo'
import AcercaDe from './components/AcercaDe'
import Contactos from './components/Contactos'
import Servicios from './components/Servicios'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <MenuBar />
        <Routes>
          <Route path="/" element={<InicioVideo />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contactos" element={<Contactos />} />
        </Routes>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  )
}

export default App