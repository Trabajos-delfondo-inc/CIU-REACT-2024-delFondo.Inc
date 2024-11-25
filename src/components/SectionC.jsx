import React from 'react';
import estilo from '../styles/section.module.css'

function SectionC({titulo,elemento,texto,componentes,fabricantes}){
    return(
        <section className={estilo.sectionC}>
          <div className={estilo.titulo}>{titulo}</div>
          <div className={estilo.contenedorDoble}>
            <div className={estilo.item}>{elemento}</div>
            <div className={estilo.item}>{texto}</div>
          </div>
          <hr className={estilo.separador} />
          <div className={estilo.contenedorDoble}>
            <div className={estilo.contenedorSimple}>{componentes}</div>
            <div className={estilo.contenedorSimple}>{fabricantes}</div>          </div>
        </section>
    )
}

export default SectionC;