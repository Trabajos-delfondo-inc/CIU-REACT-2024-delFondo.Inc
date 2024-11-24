import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css'
import catalogoStyle from '../styles/catalogo.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function CatalogoProductos() {
  const [productosDisponibles, setProductosDisponibles] = useState([]);
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/productos')
      .then((response) => response.json())
      .then((data) => setProductosDisponibles(data))
      .catch((err) => console.error('Error al cargar los productos:', err));
  }, []);
  
  /*DESCOMENTAR PARA LOGRAR EL EFECTO DE ACTUALIZACION DE PRECIO AL CAMBIAR LA CANTIDAD DE ITEMS
  useEffect(()=>{
    calcularPrecioTotal()
    console.log(productosSeleccionados)
  },[productosSeleccionados]);*/

  const agregarProducto = (producto, cantidad) => {
    const productoConCantidad = { ...producto, cantidad: parseInt(cantidad)};
    setProductosSeleccionados((productosPrevios) => {
      const productoExistente = productosPrevios.find((item) => item.id === producto.id);
      if (productoExistente) {
        return productosPrevios.map((item) =>
          item.id === producto.id ? productoConCantidad : item
        );
      }
      return [...productosPrevios, productoConCantidad];
    });
  };

  const actualizarCantidad = (idProducto, nuevaCantidad) => {
    const cantidadNumerica = parseInt(nuevaCantidad) || 0;
    setProductosSeleccionados((productosPrevios) =>
      productosPrevios.map((producto) =>
        producto.id === idProducto ? { ...producto, cantidad: cantidadNumerica } : producto
      )
    );
  };

  const calcularPrecioTotal = () => {
    const totalCalculado = productosSeleccionados.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
    setPrecioTotal(totalCalculado);
  };




  return (
    <div className='container my-4'>
      {/* Botón que calcula el precio total */}
      <div className="mt-4">
        <button onClick={calcularPrecioTotal} className="btn btn-primary">
          Calcular Precio Total
        </button>
      </div>

      {/* Acá se muestra el total calculado */}
      <div className="mt-3">
        <h4>Precio Total: ${precioTotal}</h4>
      </div>
      
      <h1>Catálogo de Productos</h1>
      <div className={catalogoStyle.catalogo}>
        {productosDisponibles.map((producto) => (
          <div key={producto.id} className="card">
            <img src={producto.pathImg} className={producto.nombre} alt={producto.nombre}/>
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">{producto.descripcion}</p>
              <p className="card-text"><small className="text-muted"><strong>Precio:</strong> ${producto.precio}</small></p>
            </div>          
          <div>
          <label>
            Cantidad:
              <input
                  id={`cantidad-${producto.id}`}
                  type="number"
                  min="0"
                  defaultValue={0}
                  onChange={ e =>  actualizarCantidad(producto.id, e.target.value) }
                />
          </label>
          <button
                onClick={() => {
                  const cantidad = document.querySelector(`#cantidad-${producto.id}`).value;
                  if (cantidad > 0) {
                    agregarProducto(producto, cantidad);
                  } 
                }}
          >
          Seleccionar
          </button>
          </div>
          <Link to={`/productos/${producto.id}`} className="btn btn-info mt-2">Ver más detalles</Link>
      </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogoProductos;