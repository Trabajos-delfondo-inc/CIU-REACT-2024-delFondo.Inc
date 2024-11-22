import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Inicio from '../Inicio.jsx';
import Catalogo from '../Catalogo.jsx';
import DetalleProducto from '../DetalleProducto.jsx';
// import FabricantesYComponentes from './FabricantesYComponentes.jsx';

function App() {
  return (
    <Router>
      <Header />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/productos/:id" element={<DetalleProducto />} />
          {/* <Route path="/fabricantes-y-componentes" element={<FabricantesYComponentes />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App