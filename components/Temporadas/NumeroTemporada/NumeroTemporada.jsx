"use client"
import React, { useState } from "react"
import '../NumeroTemporada/numeroTemporada.css'
import { useScrollTrigger } from "@mui/material"
import { peticionCapituloTemporada } from "../../PeticionesFetch/PeticionesFetch"
const NumeroTemporada = ( {season, temporada, index, setCapitulosTemporada, id, temporadaSelect, setTemporadaSelect} )=>{
    let numero = index + 1
    async function cambiarCapitulos (numeroTemporada, id ){
      let peticion = await peticionCapituloTemporada(numeroTemporada, id)
      let capitulos = peticion.episodes 
      setCapitulosTemporada(capitulos)
    }

  
    return (
        <div onClick={()=>cambiarCapitulos(numero, id )} className="numeroTemporada">
            <h1 onClick={()=>setTemporadaSelect(numero)} className={temporadaSelect ===  numero ? "numeroTemporada__tituloOn": "numeroTemporada__titulo"}>{temporada}</h1>
        </div>
    )
}
export default NumeroTemporada