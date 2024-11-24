import React from 'react';
import estilo from '../styles/section.module.css'

function SectionC({titulo,elemento}){
    return(
        <section className={estilo.sectionB}>
          <div className={estilo.titulo}><h1>{titulo}</h1></div>
          <div className={estilo.contenedorSimple}>
            <div className={estilo.item}>{elemento}</div>
          </div>
        </section>
    )
}

export default SectionC;