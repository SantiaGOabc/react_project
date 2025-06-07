import './Inicio.css'
import mascotasMain from '/public/mascotasMain.jpg'

const Inicio = () => {
  return (
    <div className="inicio-container" id="inicio">
      <img src={mascotasMain} alt="Mascotas Main" className="inicio-imagen" />
      <div className="inicio-texto">
        <h2>Bienvenidos a Mundo Animal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  )
}

export default Inicio