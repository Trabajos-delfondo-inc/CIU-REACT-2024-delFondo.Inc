import React from 'react';
import estilo from '../styles/section.module.css'

function SectionC({titulo,elemento,texto}){
    return(
        <section className={estilo.sectionC}>
          <div className={estilo.titulo}><h1>{titulo}</h1></div>
          <div className={estilo.contenedorDoble}>
            <div className={estilo.item}>{elemento}</div>
            <div className={estilo.item}>{texto}</div>
          </div>
        </section>
    )
}

export default SectionC;