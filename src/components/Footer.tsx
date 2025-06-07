import { FaFacebook, FaInstagram } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer-title">Mundo Animal</h3>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <a href="/privacidad" className="privacy-policy">
        Políticas de Privacidad
      </a>
      <p className="copyright">
        Copyright © 2025
      </p>
    </footer>
  )
}

export default Footer