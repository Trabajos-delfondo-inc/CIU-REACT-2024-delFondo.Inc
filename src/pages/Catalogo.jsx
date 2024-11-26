import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import catalogoStyle from '../styles/catalogo.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from '../styles/section.module.css';
import Error from '../components/Error'

function CatalogoProductos() {
  const [productosDisponibles, setProductosDisponibles] = useState([]);
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    fetch('http://localhost:5000/productos')
      .then((response) => {
        if (!response.ok) 
          throw new Error('Producto no encontrado');
        return response.json();
      })
      .then((data) => setProductosDisponibles(data))
      .catch((err) => {
        console.error('Error al cargar los productos:', err)
        setError(true)
      });
  }, []);
  console.log(error)
  
  useEffect(()=>{
    calcularPrecioTotal()
    console.log(productosSeleccionados)
  },[productosSeleccionados]);

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
  
  if(error) {
    return (
      <div>
        <Error 
          titulo={<h1>Recurso No Encontrado</h1>}
          elemento={<img src="/images/error.png" alt="Saludos"  className={Style.imagenGrande}/>}
        />
      </div>
    )  
  }
  
  return (
    <div>
      {/* Titulo */}
      <div className={catalogoStyle.titulo}>
        <h1>Catálogo de Productos</h1>
      </div>

      <div className={catalogoStyle.catalogo}>
        {productosDisponibles.map((producto) => (
          <div key={producto.id} className="card">
            <img src={producto.pathImg} className={producto.nombre} alt={producto.nombre}/>
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">{producto.descripcion}</p>
              <p className="card-text">
                <small className="text-muted"><strong>Precio:</strong> ${producto.precio}</small>
              </p>
            </div> 
            <div>
              {/* Cantidad */}
              <div class="d-flex justify-content-center align-items-center">
                <label class="text-center w-50 ms-1 mb-2">
                  Cantidad:
                </label>
                <input class="form-control w-50 ms-1 mb-2"
                      id={`cantidad-${producto.id}`}
                      type="number"
                      min="0"
                      defaultValue={0}
                      onChange={ e =>  actualizarCantidad(producto.id, e.target.value) }
                  />
              </div>
              {/* Ver mas detalle y Seleccionar */}
              <div class="d-flex justify-content-center align-items-center">
                <Link to={`/productos/${producto.id}`} className="btn btn-info w-50 ms-1 mb-2">Ver más detalles</Link>
                <button className="btn btn-dark w-50 ms-1 mb-2"
                  onClick={() => {
                    const cantidad = document.querySelector(`#cantidad-${producto.id}`).value;
                    if (cantidad > 0) {
                      agregarProducto(producto, cantidad);
                    } 
                  }}>
                  Seleccionar
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Carrito */}
      <div className="d-flex justify-content-end align-items sticky-bottom">
          <button  className=' btn btn-dark ms-1 mb-2' disabled>Precio Total: ${precioTotal}</button>
          <button onClick={calcularPrecioTotal} className="btn btn-primary ms-1 mb-2">
            Ir al carrito
          </button>
      </div>

    </div>
);
}

export default CatalogoProductos;