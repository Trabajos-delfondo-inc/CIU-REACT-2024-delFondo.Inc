import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

  const agregarProducto = (producto, cantidad = 1) => {
    const productoConCantidad = { ...producto, cantidad: parseInt(cantidad) || 1 };
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
  console.log(productosDisponibles)

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <div className="row">
        {productosDisponibles.map((producto) => (
          <div
            key={producto.id}
            style={{
              border: '1px solid #ddd',
              padding: '16px',
              margin: '8px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p>
              <strong>Precio:</strong> ${producto.precio}
            </p>
            <img src={producto.pathImg} alt={producto.nombre} />
            <div>
              <label>
                Cantidad:
                <input
                  id={`cantidad-${producto.id}`}
                  type="number"
                  min="1"
                  defaultValue={1}
                  onChange={(e) => actualizarCantidad(producto.id, e.target.value)}
                />
              </label>
              <button
                onClick={() => {
                  const cantidad = document.querySelector(`#cantidad-${producto.id}`).value;
                  agregarProducto(producto, cantidad);
                }}
              >
                Seleccionar
              </button>
            </div>
            <Link to={`/productos/${producto.id}`} className="btn btn-info mt-2">
              Ver más detalles
            </Link>
          </div>
        ))}
      </div>

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
    </div>
  );
}

export default CatalogoProductos;