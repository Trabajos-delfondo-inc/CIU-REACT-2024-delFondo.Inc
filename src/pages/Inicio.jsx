import SectionA from '../components/SectionA';
import SectionB from '../components/SectionB';
import Carousel from '../components/carousel';
import Style from '../styles/section.module.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Inicio() {
  const images = [
    { src: '/public/images/productos/altavoz-inteligente-edit.png', alt: 'Altavoz' ,video: "https://www.youtube.com/watch?v=pSYlRn6EXUM", title:'https://www.youtube.com/watch?v=pSYlRn6EXUM'},
    { src: '/public/images/productos/camara-seguridad-edit.png', alt: 'Camara De Seguridad',video: "https://www.youtube.com/watch?v=h3Bo0wtVWdg", title:'https://www.youtube.com/watch?v=h3Bo0wtVWdg'},
    { src: '/public/images/productos/camara-accion-edit.png', alt: 'Camara De Accion' ,video: "https://www.youtube.com/watch?v=cQWzcWg76-c",title:'https://www.youtube.com/watch?v=cQWzcWg76-c'},
    { src: '/public/images/productos/cargador-inalambrico-edit.png', alt: 'Cargador Inalambrico' ,video:"https://www.youtube.com/watch?v=PiNHPiPtEwI",title:'https://www.youtube.com/watch?v=cQWzcWg76-c'},
    { src: '/public/images/productos/control-acceso-edit.png', alt: 'Control De Acceso' ,video:"https://www.youtube.com/watch?v=KMsr3opKOtM",title:'https://www.youtube.com/watch?v=KMsr3opKOtM'},
    { src: '/public/images/productos/controlador-iluminacion-edit.png', alt: 'Control De Iluminacion' ,video: "https://www.youtube.com/watch?v=Z5LzDhCS674",title:'https://www.youtube.com/watch?v=Z5LzDhCS674'},
    { src: '/public/images/productos/controlador-riego-edit.png', alt: 'Controlador De Riego' ,video: "https://www.youtube.com/watch?v=cp3rojEbl-Y",title:'https://www.youtube.com/watch?v=cp3rojEbl-Y'},
    { src: '/public/images/productos/sensor-ambiental-edit.png', alt: 'Sensor Ambiental' ,video: "https://www.youtube.com/watch?v=z2iJKJmT82w",title:'https://www.youtube.com/watch?v=z2iJKJmT82w'},
    { src: '/public/images/productos/smartwatch-edit.png', alt: 'Smartwatch' ,video: "https://www.youtube.com/watch?v=M-AsftRa78U",title:'https://www.youtube.com/watch?v=M-AsftRa78U'},
    { src: '/public/images/productos/termostato-edit.png', alt: 'Termostato' ,video: "https://www.youtube.com/watch?v=Gv0Fqgj_VGo",title:'https://www.youtube.com/watch?v=Gv0Fqgj_VGo'},
  ];
  return (
    <div>
        <SectionA 
          titulo={<h1>DelFondo.inc - Soluciones tecnológicas</h1>}
          texto={<p> <h2>¿Quiénes somos?</h2><br />
             Somos una empresa líder de productos informáticos para la industria. Proveemos soluciones y damos soporte para que tu empresa pueda sistematizar procesos, prevenir riesgos o generar mecanismos de seguridad a costos bajos.<br/>Ofrecemos productos de excelente calidad y asistimos con implementaciones dentro del marco de ITIL.</p>}
          elemento={<img src="https://www.brysonhillsperu.com/wp-content/uploads/2023/10/empresas-industriales.jpg" alt="viva la pepa"  className={Style.imagenGrande}/>}
        />
        <SectionB 
          titulo={<h1>¿Por qué es importante contar con nosotros?</h1>}
          elemento={<iframe width="560" height="315" src="https://www.youtube.com/embed/FPhg_ZjrPtU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
          texto={<p>
            <ul><h3>Productos de alta calidad:</h3>Solo trabajamos con productos de la más alta calidad, garantizando eficiencia y durabilidad.</ul> 
            <ul><h3>Soporte especializado:</h3> Te acompañamos en todo momento, asegurando una implementación exitosa conforme a las mejores prácticas de ITIL.</ul>
            <ul><h3>Soluciones a medida: </h3> Nos adaptamos a las necesidades específicas de tu negocio, brindando herramientas personalizadas para mejorar cada uno de tus procesos.</ul> 
            </p>}
        />
        <SectionA 
          titulo={<h1>Quienes nos avalan</h1>}
          texto={<p>En <span>DelFondo.Inc</span>, nuestra experiencia y compromiso con la excelencia son respaldados por la confianza de nuestros clientes, quienes confían en nuestros productos y servicios para transformar sus procesos y garantizar la seguridad de sus sistemas. <br />
           A lo largo de los años, hemos trabajado con empresas de diversas industrias, proporcionando soluciones que no solo cumplen, sino que superan las expectativas de nuestros clientes. <br />

           Todos ellos encuentran en <span>DelFondo.Inc</span> un socio tecnológico confiable.</p>}
          elemento={<img src="https://www.dikaestudio.com/wp-content/uploads/2018/06/Logos-Famosos.-Curiosidades-1.jpg" alt="empresas-que-nos-respaldan"  className={Style.imagenGrande}/>}
        />
        <SectionB
          titulo={<h1>¿Qué productos ofrecemos?</h1>}
          elemento={<Carousel images={images} />}
          texto={<div>
            <p>Estos son algunos de nuestra amplia gama de productos, que le permiten a tu empresa evolucionar hacia un entorno más automatizado y seguro, facilitando la gestión y reduciendo costos operativos.</p>
            <p class="border border-light rounded p-2">Haz click en las imagenes para ver pruebas de los productos en video.</p>
            </div>}
        />
        <SectionA 
          titulo={<h1>Contactá con nosotros</h1>}
          texto={
            <div>
              <div>
                <hr />
                <p>Direccion: Paraná 552, C1017 San Nicolas, Cdad. Autónoma de Buenos Aires</p>
                <hr />
                <p> 
                  Telefono:<img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/564/small/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png" alt="" className={Style.icono}/> +54 9 11-2367-0839 
                </p>
                <hr />
                <p>Horarios de atencion:</p>
                <p>Lunes a Viernes | 08:00hs - 20:00hs |</p>
                <p>Sabados | 13:00hs - 18:00hs |</p>
                <hr />
              </div>
              <div>
                <form action="#">
                    <div class="text-start mb-3 mt-3">
                      <label for="email" class="form-label">Email:</label>
                      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
                      <br />
                      <label for="comment" class="form-label">Dejanos tu mensaje:</label>
                      <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
              </div>
            </div>
          }
          elemento={<iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Paran%C3%A1%20552,%20C1017%20San%20Nicolas,%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires+(DelFondo.inc)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" className={Style.mapa} width="600" height="635" title="Mapa de la empresa" allowFullScreen></iframe>}
        />
    </div>
  );
}

export default Inicio;