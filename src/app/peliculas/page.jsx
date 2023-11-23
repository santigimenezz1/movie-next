import React from 'react'
import Link from 'next/link'
import '../series/series.css'
import { peticionPeliculasSeViene, peticionPeliculasTendencia, peticionPeliculaspPopulares } from '../../../components/PeticionesFetch/PeticionesFetch'
import TarjetaSerie from '../../../components/TarjetaSerie/TarjetaSerie'

async function Peliculas () {
  const peliculasPopulares = await peticionPeliculaspPopulares ()
  const peliculasTendencia = await peticionPeliculasTendencia ()
  const peliculasSeViene = await peticionPeliculasSeViene()
  return (
    <div className='series'>
      <h1>Pelciulas</h1>
      <h2 className='series__titulo__categoria'>Populares</h2 >
      <div className='series__tarjetas'>
         {
          peliculasPopulares.results.slice(0,12).map((serie)=>(
            <Link key={serie.id} href={`/detalle/${serie.id}`}>
            <TarjetaSerie movie={serie} />
            </Link>          
            ))
         }
         <div className='series__container'>
         <h2 className='series__titulo__categoria'>Tendencia</h2>
         <div className='container__tarjetas__flex'>
        {
          peliculasTendencia.results.map((serie)=>(
            <Link key={serie.id} href={`/detalle/${serie.id}`}>
            <TarjetaSerie movie={serie} />
            </Link>           ))
         }
         </div>
         </div>
         <div className='series__container'>
          <h2 className='series__titulo__categoria'>Lo que se viene</h2>
          <div className='container__tarjetas__flex'>
          {
      peliculasSeViene.results.map((serie)=>(
        <Link key={serie.id} href={`/detalle/${serie.id}`}>
        <TarjetaSerie movie={serie} />
        </Link>           ))
         }
          </div>
         </div>
      </div>
    </div>
  )
}
export default Peliculas
