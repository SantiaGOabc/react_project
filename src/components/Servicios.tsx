import React, { useEffect, useState } from 'react';
import { obtenerProductos } from '../services/ApiServicio';
import './Servicios.css';

interface Producto {
  id_producto: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  estado: string;
  precio: number;
}

const Servicios: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const data = await obtenerProductos();
        setProductos(data);
      } catch (error) {
        console.error('Error cargando productos:', error);
      }
    };

    cargarProductos();
  }, []);

  return (
    <div className="servicios-container">
      <h1>Nuestros Servicios</h1>
      <div className="servicios-grid">
        {productos.map((producto) => (
          <div key={producto.id_producto} className="servicio-card">
            <img 
              src={producto.imagen + ".jpg"} 
              alt={producto.nombre} 
              className="servicio-imagen"
            />
            <div className="servicio-info">
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <div className="precio-estado">
                <span>Bs.{producto.precio}</span>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;