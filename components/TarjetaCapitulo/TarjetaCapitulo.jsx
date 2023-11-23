import React from 'react'
import './tarjetaCapitulo.css'
import TarjetaPelicula from '../TarjetaPelicula/TarjetaPelicula'

const TarjetaCapitulo = ({capitulo, index}) => {
  let indexId = index + 1
 let urlImagen = "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1690756763/website-page-not-found-error-404-robot-character-broken-chatbot-mascot-disabled-site-on-technical-work-web-design-template-cartoon-online-bot-crash-accident-robotic-assistance-failure-eps-vector_eepy6c.jpg"
  {
    capitulo && capitulo.still_path && (
      urlImagen = `https://image.tmdb.org/t/p/original/${capitulo.still_path}`
    )
  }
  return (
    <div className='tarjetaCapitulo'> 
     <img src={urlImagen}></img>
    <div className='tarjetaCapitulo__info'>
     <h1>{indexId}.{capitulo.name} ({capitulo.runtime}m)</h1>
     <span>{capitulo.overview}</span>
    </div>
      
    </div>
  )
}

export default TarjetaCapitulo