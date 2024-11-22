import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [seleccionados, setSeleccionados] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/productos')
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error('Error al cargar productos:', err));
  }, []);

  const handleSeleccionarProducto = (producto, cantidad) => {
    const nuevoSeleccionado = { ...producto, cantidad: cantidad };
    setSeleccionados((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id ? nuevoSeleccionado : item
        );
      }
      return [...prev, nuevoSeleccionado];
    });
  };

  const handleCantidadChange = (id, cantidad) => {
    setSeleccionados((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cantidad: parseInt(cantidad) } : item
      )
    );
  };

  const calcularPrecioTotal = () => {
    const totalCalculado = seleccionados.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
    setTotal(totalCalculado);
  };

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <div className="row">
        {productos.map((producto) => (
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
            <div>
              <label>
                Cantidad:
                <input
                  type="number"
                  min="1"
                  defaultValue={1}
                  onChange={(e) =>
                    handleCantidadChange(producto.id, e.target.value)
                  }
                />
              </label>
              <button
                onClick={() =>
                  handleSeleccionarProducto(producto, producto.cantidad)
                }
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

      {/* Botón para calcular precio total */}
      <div className="mt-4">
        <button onClick={calcularPrecioTotal} className="btn btn-primary">
          Calcular Precio Total
        </button>
      </div>

      {/* Mostrar el precio total calculado */}
      <div className="mt-3">
        <h4>Precio Total: ${total}</h4>
      </div>
    </div>
  );
}

export default Catalogo;
