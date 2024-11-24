import { useEffect, useState } from 'react';
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
    <section className="container my-4">
      <div>
      <h1>Fabricantes y Componentes</h1>
      <h2>Fabricantes</h2>
      <ul>
        {fabricantes.map(fab => <li key={fab.id}>{fab.nombre}</li>)}
      </ul>
      <h2>Componentes</h2>
      <ul>
        {componentes.map(comp => <li key={comp.id}>{comp.nombre}</li>)}
      </ul>
    </div>
    </section>
  );
}

export default FabricantesYComponentes;
