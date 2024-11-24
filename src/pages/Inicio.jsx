import '../styles/styles.css'

function Inicio() {
  return (
    <div>
        <section className='sectionA'>
          <div className="titulo"><h1>¿Buscas profesionales?</h1></div>
          <div className='contenedorDoble'>
            <div className='item'>
              <p>
                Somos una empresa lider de productos informaticos para la industria. Proveemos soluciones y 
                damos soporte para que tu empresa pueda sistematizar procesos, prevenir riesgos o generar mecanismos 
                de seguridad a costos bajos.</p><br/>
              <p>
                Ofrecemos productos de excelente calidad y asistimos con implementaciones dentro del marco de ITIL.
              </p>
            </div>
            <div className="item"><img src="https://www.brysonhillsperu.com/wp-content/uploads/2023/10/empresas-industriales.jpg" alt="viva la pepa" /></div>
          </div>
        </section>
        <section className="sectionA">
          <div className="titulo"><h1>¿Porque es importante contar con nosotros?</h1></div>
          <div className="contenedorDoble">
            <div className="item"><iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video de presentación" width="600" height="315" allowFullScreen></iframe></div>
            <div className="item"><p>Insertar un texto</p></div>
          </div>
        </section>
        <section className="sectionA">
          <div className="titulo"><h1>Quienes nos avalan</h1></div>
          <div className="contenedorDoble">
            <div className="item"><p>Insertar un texto</p></div>
            <div className="item"><img src="https://www.dikaestudio.com/wp-content/uploads/2018/06/Logos-Famosos.-Curiosidades-1.jpg" alt="empresas-que-nos-respaldan" /></div>
          </div>
        </section>
        <section className="sectionA">
          <div className="titulo"><h1>¿Porque es importante contar con nosotros?</h1></div>
          <div className="contenedorDoble">
            <div className="item"><img src="https://www.valdelemos.it/wp-content/uploads/2022/02/gestion-procesos.jpg" alt="mejoras" /></div>
            <div className="item"><p>Insertar un texto</p></div>
          </div>
        </section>
        <section className="sectionA">
          <div className="titulo"><h1>Contacta con nosotros</h1></div>
          <div className="contenedorDoble">
            <div className="item"><p>Insertar un texto</p></div>
            <div className="item"><iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Paran%C3%A1%20552,%20C1017%20San%20Nicolas,%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires+(DelFondo.inc)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="600" height="400" title="Mapa de la empresa" allowFullScreen></iframe>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Inicio;