
import React from "react"
import TarjetaSerie from "../TarjetaSerie/TarjetaSerie"
import '../../src/app/series/series.css'
import Link from "next/link"
 async function MapeoSectionSeries({funcion, seriesPopulares, seriesTendencia, seriesEnElAire}){
    return (
      <div className='series'>
        <h1>Series</h1>
        <h2 className='series__titulo__categoria'>Populares</h2 >
        <div className='series__tarjetas'>
          {
            seriesPopulares.results.slice(0, 12).map((serie) => (
              <Link key={serie.id} href={`/detalleSerie/${serie.id}`}>
                <TarjetaSerie movie={serie} />
              </Link>))
          }
          <div className='series__container'>
            <h2 className='series__titulo__categoria'>Tendencia</h2>
            <div className='container__tarjetas__flex'>
              {
                seriesTendencia.results.map((serie) => (
                  <Link key={serie.id} href={`/detalleSerie/${serie.id}`}>
                    <TarjetaSerie movie={serie} />
                  </Link>))
              }
            </div>
          </div>
          <div className='series__container'>
            <h2 className='series__titulo__categoria'>En el aire</h2>
            <div className='container__tarjetas__flex'>
              {
                seriesEnElAire.results.map((serie) => (
                  <Link key={serie.id} href={`/detalleSerie/${serie.id}`}>
                    <TarjetaSerie movie={serie} />
                  </Link>))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default MapeoSectionSeries
  