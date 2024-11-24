import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SectionC from '../components/SectionC';

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
      <SectionC 
      titulo={<h1>{producto.nombre}</h1>}
      elemento={<img src={"/" + producto.pathImg}  alt={producto.nombre}/>}
      texto={<p>{producto.descripcion}</p>}
      
      />
      <div><p>Precio: ${producto.precio}</p></div>
    </div>
  );
}

export default DetalleProducto;
