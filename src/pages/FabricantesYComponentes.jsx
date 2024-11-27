import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import catalogoStyle from '../styles/catalogo.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from '../components/Error';
import Style from '../styles/section.module.css';

function FabricantesYComponentes() {
  const [fabricantes, setFabricantes] = useState([]);
  const [componentes, setComponentes] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/fabricantes')
      .then(response => response.json())
      .then(data => setFabricantes(data))
      .catch(err => {
        console.error('Error al cargar el producto:', err)
        setError(true)
      });
    fetch('http://localhost:5000/componentes')
      .then(response => response.json())
      .then(data => setComponentes(data))
      .catch(err => {
        console.error('Error al cargar el producto:', err)
        setError(true)
      });
  }, []);

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
    <div class="text-center">
      {/* Titulo */}
      <div className={catalogoStyle.titulo}>
        <h1>Fabricantes y Componentes</h1>
      </div>

      <h2>Fabricantes con los que trabajamos</h2>
      <div class="d-flex flex-wrap justify-content-center w-80" style={{gap: '20px'}}>
          {fabricantes.map(fab => (
            <div key={fab.id} className="card" style={{width: '300px'}}>
              <img src={fab.pathImgPerfil} className={fab.nombre} alt={fab.nombre}/>
              <div className="card-body">
                <h5 className="card-title">{fab.nombre}</h5>
                <p className="card-text">{fab.direccion}</p>
                <p className="card-text">
                  <small className="text-muted"><strong>Contacto:</strong> ${fab.numeroContacto}</small>
                </p>
              </div>
            </div>
          ))}
      </div>

      <h2>Componentes disponibles</h2>
      <div class="d-flex flex-wrap justify-content-center w-80" style={{gap: '20px'}}>
          {componentes.map(comp => (
            <div key={comp.id} className="card" style={{width: '300px'}}>
              <div className="card-body">
                <h5 className="card-title">{comp.nombre}</h5>
                <p className="card-text">{comp.descripcion}</p>
              </div>
            </div>
          ))}
      </div>

    </div>
);
}

export default FabricantesYComponentes;
