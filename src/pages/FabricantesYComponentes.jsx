import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import catalogoStyle from '../styles/catalogo.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function FabricantesYComponentes() {
  const [fabricantes, setFabricantes] = useState([]);
  const [componentes, setComponentes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/fabricantes')
      .then(response => response.json())
      .then(data => setFabricantes(data));

    fetch('http://localhost:5000/componentes')
      .then(response => response.json())
      .then(data => setComponentes(data));
  }, []);

  return (
    <div class="text-center">
      {/* Titulo */}
      <div className={catalogoStyle.titulo}>
        <h1>Fabricantes y Componentes</h1>
      </div>

      <h2>Fabricantes con los que trabajamos</h2>
      <div className={catalogoStyle.catalogo}>
          {fabricantes.map(fab => (
            <div key={fab.id} className="card">
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
      <div className={catalogoStyle.catalogo}>
          {componentes.map(comp => (
            <div key={comp.id} className="card">
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
