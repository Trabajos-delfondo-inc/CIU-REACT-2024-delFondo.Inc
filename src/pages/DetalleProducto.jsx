import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SectionC from '../components/SectionC';
import { Link } from 'react-router-dom';
import Style from '../styles/section.module.css';

function DetalleProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [prodFab, setProdFab] = useState([]);
  const [prodCom, setProdCom] = useState([]);
  useEffect( () => {
    fetch(`http://localhost:5000/productos/${id}`)
      .then(response => response.json())
      .then(data => setProducto(data))
      .catch(err => console.error('Error al cargar el producto:', err));

     fetch(`http://localhost:5000/productos/${id}/fabricantes`)
      .then(response => response.json())
      .then(data => setProdFab(data));

     fetch(`http://localhost:5000/productos/${id}/componentes`)
      .then(response => response.json())
      .then(data => setProdCom(data));
  }, [id]);

  if (!producto) return <p>Cargando...</p>;
  return (
    <div>
      <SectionC 
      titulo={<h1>{producto.nombre}</h1>}
      elemento={
        <div>
          <img src={"/" + producto.pathImg}  alt={producto.nombre} className={Style.imagenGrande}/>
          <button  className=' btn btn-dark ms-1 mb-2'>Ver ficha tecnica</button>
        </div>
      }
      texto={
        <div>
          <div>
            <p>producto con numero de identificación {producto.id}</p>
            <p>{producto.descripcion}</p>
            <hr />
          </div>
          <div>
            <p>Precio: ${producto.precio}</p>
            <p>Precio Final En Cuotas: ${producto.precio * 1.6}</p> 
            <p>Pago En Efectivo: ${parseInt(producto.precio / 1.2)}</p>
            <hr />
          </div>
          <div >
            <img src= '/public/images/productos/visa-logo.png' className = {Style.icono}  alt="logo de visa" />
            <img src= '/public/images/productos/mastercard-logo.png' className={Style.icono} alt="logo de mastercard" />
            <img src= '/public/images/productos/amex-logo.png' className={Style.icono} alt="logo de american express" />
            <img src= '/public/images/productos/mp-logo.png' className={Style.icono} alt="logo de mercadopago" />
            <hr />
          </div>
          <div>
            <img src="/public\images\productos\envio-icono.svg" alt="" />
            <p>Envios en Capital Federal: 1 a 2 dias habiles</p>
            <p>Envios a Provincia (incluyendo Uruguay(Borrar despues)):2 a 4 dias habiles</p>
            <hr />
          </div>
        </div>
      }
      componentes={
        <div>
          <h2>Estos son los componentes</h2>
            <ul>
              {prodCom.Componentes && prodCom.Componentes.map(e => <ul><Link to={`/productos/${e.id}/componentes`} className="btn btn-light mt-2">{e.nombre}</Link></ul>)}
            </ul>
        </div>
      }
      fabricantes={
        <div>
          <h2>Estos son los fabricantes</h2>
            <ul>
              {prodFab.Fabricantes && prodFab.Fabricantes.map(e => <ul><Link to={`/productos/${e.id}/fabricantes`} className="btn btn-light mt-2">{e.nombre}</Link></ul>)}
            </ul>
        </div>
      }
      />
    </div>
  );
}

{/*  */}

export default DetalleProducto;
