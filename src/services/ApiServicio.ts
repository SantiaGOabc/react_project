interface Producto {
  id_producto: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  estado: string;
  precio: number;
}

export const obtenerProductos = async (): Promise<Producto[]> => {
  try {
    const response = await fetch('http://localhost:3000/api/productos');
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data: Producto[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching productos:', error);
    throw error;
  }
};