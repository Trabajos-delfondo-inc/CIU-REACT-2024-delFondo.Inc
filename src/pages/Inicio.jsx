function Inicio() {
  return (
    <div>
      <h1>Bienvenido a DelFondo.inc</h1>
      <p>Conoce más sobre nuestra empresa y nuestros productos.</p>
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Video de presentación"
        width="600"
        height="315"
        allowFullScreen
      ></iframe>
      <p>Encuéntranos en nuestra ubicación:</p>
      <iframe
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Paran%C3%A1%20552,%20C1017%20San%20Nicolas,%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires+(DelFondo.inc)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="600"
        height="450"
        title="Mapa de la empresa"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Inicio;