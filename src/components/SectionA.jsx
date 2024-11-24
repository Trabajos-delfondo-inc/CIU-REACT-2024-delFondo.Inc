import React from 'react';
import estilo from '../styles/section.module.css'

function SectionA({titulo,texto,elemento}){
    return(
        <section className={estilo.sectionA}>
          <div className={estilo.titulo}><h1>{titulo}</h1></div>
          <div className={estilo.contenedorDoble}>
            <div className={estilo.item}>{texto}</div>
            <div className={estilo.item}>{elemento}</div>
          </div>
        </section>
    )
}

export default SectionA;