import { Link } from 'react-router-dom';

function Header(){
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top " style={{ minWidth: '320px' }} >
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">DelFondo.inc</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
      <Link className="nav-link" to="/">Inicio</Link>
      <Link className="nav-link" to="/catalogo">Catálogo</Link>
      <Link className="nav-link" to="/fabricantes-y-componentes">Fabricantes y Componentes</Link>
      </div>
    </div>
  </div>
</nav>
  )
}


export default Header;
