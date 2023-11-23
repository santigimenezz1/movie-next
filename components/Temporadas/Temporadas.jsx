'use client'
import React, { useEffect, useState } from "react"
import '../Temporadas/temporadas.css'
import { peticionCapituloTemporada } from "../PeticionesFetch/PeticionesFetch"
import NumeroTemporada from "./NumeroTemporada/NumeroTemporada"
import CarouselTarjetasCapitulos from "../CarouselTarjetasCapitulos/CarouselTarjetaCapitulos"
const Temporadas = ({ data }) => {
    let seasons = data.seasons
    let id = data.id
    let seasonsFiltrado = seasons.filter((season) => (season.name !== "Especiales"))
    let idTemporada1 = seasonsFiltrado[0].id
    const [capitulosTemporada, setCapitulosTemporada] = useState([])
    const [temporadaSelect, setTemporadaSelect] = useState(1)


    async function cambiarCapitulos (numeroTemporada, id ){
        let peticion = await peticionCapituloTemporada(numeroTemporada, id)
        let episodios = peticion.episodes
        setCapitulosTemporada(episodios)
      }
    useEffect(()=>{
       cambiarCapitulos(1, id)
    },[])


    return (
       
        <div className="temporadas">
            <div>
                <h1 className="titulo__temporadas">Episodios</h1>
            </div>
            <div className="temporadas__numeroTemporada">
                {
                    seasons.filter((season) => (season.name !== "Especiales")).map((season, index) => (    
                            <NumeroTemporada key={index} setTemporadaSelect={setTemporadaSelect} temporadaSelect={temporadaSelect} id={id} setCapitulosTemporada={setCapitulosTemporada} season={season} temporada={season.name} index={index} />
                    ))
                }
            </div>
            <div className="tempradas__tarjetasCapitulos">
                <CarouselTarjetasCapitulos capitulosTemporada={capitulosTemporada} />
            </div>

        </div>
    )
}
export default Temporadas