import React from 'react'
import "../TarjetaFondoInteractivo/tarjetaFondoInteractivo.css"
import IconoPlay from './IconoPlay/IconoPlay'

const TarjetaFondoInteractivo = ( {setFondo, url, nombre} ) => {
    const cambiarFondo = (url)=>{
      setFondo(url)
    }
  return (
    <div className='container__fondoInteractivo'>
    <div onMouseEnter={()=>cambiarFondo(url)} className='tarjetaFondoInteractivo'>
        <div className='tarjetaFondoInteractivo__iconoPlay'>
        <IconoPlay />
        </div>
    <img className='tarjetaFondoInteractivo__img' src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1698621627/App%20peliculas/imagen_prueba_tarjeta_zms2c3.jpg'></img>
    </div>
    <h1 className='container__fondoInteractivo__titulo'>{nombre}</h1>
    </div>
  )
}

export default TarjetaFondoInteractivo