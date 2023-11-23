
import React from 'react'
import './fondoDinamico.css'
import CarouselTarjetasSerie from '../CarouselTarjetasSerie/CarouselTarjetasSerie'
import CarouselTarjetasPelicula from '../CarouselTarjetasPelicula/CarouselTarjetasPelicula'
import { peticionPeliculaspPopulares } from '@/src/app/peticionesFetch/page'

async function FondoDinamico () {
  let data = await peticionPeliculaspPopulares()

  return (
    <div className='fondoDinamico'>
    <div className='fondoDinamico__info'>
    <h1>La reina de los concursos (2023)</h1>
    <h4>Duracion: 1h 40m</h4>
    </div>
    <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699067867/App%20peliculas/compose_1_q5wh5y.jpg'></img>
    </div>
  )
}

export default FondoDinamico