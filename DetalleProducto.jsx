import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetalleProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/productos/${id}`)
      .then(response => response.json())
      .then(data => setProducto(data))
      .catch(err => console.error('Error al cargar el producto:', err));
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
    </div>
  );
}

export default DetalleProducto;
