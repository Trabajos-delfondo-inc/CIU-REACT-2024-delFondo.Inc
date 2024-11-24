import SectionA from '../components/SectionA';
import SectionB from '../components/SectionB';
import SectionC from '../components/SectionC';
import Carousel from '../components/carousel';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Inicio() {
  const images = [
    { src: '/public/images/productos/altavoz-inteligente-edit.png', alt: 'Altavoz' },
    { src: '/public/images/productos/camara-seguridad.jpg', alt: 'Camara' },
    { src: '/public/images/productos/smartwatch.jpg', alt: 'Laptop' }
  ];
  return (
    <div>
        <SectionA 
          titulo={<h1>¿Buscas profesionales?</h1>}
          texto={<p> Somos una empresa lider de productos informaticos para la industria. Proveemos soluciones y damos soporte para que tu empresa pueda sistematizar procesos, prevenir riesgos o generar mecanismos de seguridad a costos bajos.<br/>Ofrecemos productos de excelente calidad y asistimos con implementaciones dentro del marco de ITIL.</p>}
          elemento={<img src="https://www.brysonhillsperu.com/wp-content/uploads/2023/10/empresas-industriales.jpg" alt="viva la pepa" />}
        />
        <SectionB 
          titulo={<h1>¿Porque es importante contar con nosotros?</h1>}
          elemento={<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video de presentación" width="600" height="315" allowFullScreen></iframe>}
          texto={<p>Insertar un texto</p>}
        />
        <SectionA 
          titulo={<h1>Quienes nos avalan</h1>}
          texto={<p>Insertar un texto</p>}
          elemento={<img src="https://www.dikaestudio.com/wp-content/uploads/2018/06/Logos-Famosos.-Curiosidades-1.jpg" alt="empresas-que-nos-respaldan" />}
        />
        <SectionB
          titulo={<h1>¿Que productos Ofrecemos?</h1>}
          elemento={<Carousel images={images} />}
          texto={<p>Hola</p>}
        />
        <SectionA 
          titulo={<h1>Contacta con nosotros</h1>}
          texto={
          <div>
            <form action="#">
                <div class="mb-3 mt-3">
                  <label for="email" class="form-label">Email:</label>
                  <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
                </div>
                <label for="comment">Comentarios:</label>
                <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
          </div>}
          elemento={<iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Paran%C3%A1%20552,%20C1017%20San%20Nicolas,%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires+(DelFondo.inc)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="600" height="400" title="Mapa de la empresa" allowFullScreen></iframe>}
        />
       
    </div>
  );
}

export default Inicio;