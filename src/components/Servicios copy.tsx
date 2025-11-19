import './Servicios.css'
import img1 from '/src/images/img1.jpg'
import img2 from '/src/images/img2.jpg'
import img3 from '/src/images/img3.jpg'
import img4 from '/src/images/img4.jpg'
import img5 from '/src/images/img5.jpg'
import img6 from '/src/images/img6.jpg'

const serviciosData = [
  {
    id: 1,
    imagen: img1,
    titulo: 'Cuidado Veterinario',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.'
  },
  {
    id: 2,
    imagen: img2,
    titulo: 'Peluquería Canina',
    descripcion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
  },
  {
    id: 3,
    imagen: img3,
    titulo: 'Vacunación',
    descripcion: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.'
  },
  {
    id: 4,
    imagen: img4,
    titulo: 'Nutrición Animal',
    descripcion: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
  },
  {
    id: 5,
    imagen: img5,
    titulo: 'Adiestramiento',
    descripcion: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
  },
  {
    id: 6,
    imagen: img6,
    titulo: 'Guardería',
    descripcion: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.'
  }
]

const Servicios = () => {
  return (
    <div className="servicios-container">
      <h2>Nuestros Servicios</h2>
      <div className="servicios-grid">
        {serviciosData.map(servicio => (
          <div key={servicio.id} className="servicio-card">
            <img 
              src={servicio.imagen} 
              alt={servicio.titulo} 
              className="servicio-imagen"
            />
            <div className="servicio-contenido">
              <h3 className="servicio-titulo">{servicio.titulo}</h3>
              <p className="servicio-descripcion">{servicio.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Servicios