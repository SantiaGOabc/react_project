import logoMascotas from '/public/logoMascotas1.jpg'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <img 
        src={logoMascotas} 
        alt="Logo Mascotas" 
        className="header-logo"
      />
      <h1 className="header-title">Mundo Animal</h1>
    </header>
  )
}

export default Header