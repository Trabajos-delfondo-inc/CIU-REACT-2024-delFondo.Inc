import React from 'react'
import estilo from '../styles/section.module.css'

export default function Error({titulo,elemento}) {
  return (
    <section className={estilo.sectionC}>
        <div className={estilo.titulo}><h1>{titulo}</h1></div>
        <div className={estilo.contenedorDoble}>
            <div className="w-30">{elemento}</div>
        </div>
    </section>
  )
}
