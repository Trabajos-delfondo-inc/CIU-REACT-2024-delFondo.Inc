import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">DelFondo.inc</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalogo">Catálogo</Link>
            </li>
            {/*  <li className="nav-item">
                <Link className="nav-link" to="/productos/:id">Detalle Producto</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/fabricantes-y-componentes">Fabricantes y Componentes</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
