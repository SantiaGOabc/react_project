import './MenuBar.css'
import { Link } from 'react-router-dom'

const MenuBar = () => {
  return (
    <nav className="menu-bar">
      <Link to="/" className="menu-item">Inicio</Link>
      <Link to="/acerca-de" className="menu-item">Acerca de</Link>
      <Link to="/servicios" className="menu-item">Servicios</Link>
      <Link to="/contactos" className="menu-item">Contactos</Link>
    </nav>
  )
}

export default MenuBar