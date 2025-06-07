import './AcercaDe.css'
import logoMascotas from '/public/logoMascotas1.jpg'

const AcercaDe = () => {
  return (
    <div className="acercade-container">
      <div className="acercade-texto">
        <h2>Acerca de Nosotros</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <img src={logoMascotas} alt="Logo Mascotas" className="acercade-imagen" />
    </div>
  )
}

export default AcercaDe