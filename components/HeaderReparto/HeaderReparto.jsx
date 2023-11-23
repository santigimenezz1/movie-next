import React from "react"
import '../HeaderReparto/headerReparto.css'
import Link from "next/link"
import BotonBack from "../BotonBack/BotonBack"
const HeaderReparto = ({idPelicula, idSerie ,pelicula} )=>{
    let urlImagen = ""
    if (pelicula.poster_path) {
        urlImagen = `https://image.tmdb.org/t/p/original/${pelicula.poster_path}`;
      }else{
        urlImagen = "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699562010/App%20peliculas/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093_r2tucp.png"
      }
   return (
    <div className="headerReparto">
        <img src={urlImagen}></img>
        <div className="headerReparto__info">
        <h1 className="headerReparto__info__titulo">{pelicula.title}</h1>    
       <BotonBack />
        </div>
    </div>
   ) 
}
export default HeaderReparto