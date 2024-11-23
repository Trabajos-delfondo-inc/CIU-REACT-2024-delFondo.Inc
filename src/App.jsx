import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Inicio from './pages/Inicio.jsx';
import Catalogo from './pages/Catalogo.jsx';
import DetalleProducto from './pages/DetalleProducto.jsx';
import FabricantesYComponentes from './pages/FabricantesYComponentes.jsx';



function App() {
  return (
    <Router>
      <Header />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/productos/:id" element={<DetalleProducto />} />
           <Route path="/fabricantes-y-componentes" element={<FabricantesYComponentes />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App