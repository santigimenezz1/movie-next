import Link from "next/link"
import { buscarPelicula } from "../PeticionesFetch/PeticionesFetch"

async function TarjetaBiografia ( {trabajo} ){
    let idTrabajo = await trabajo.id
    let type = await trabajo.media_type
    let peticionPelicula = await buscarPelicula(type, idTrabajo)


    
    let urlImagen = ""
    if (trabajo.poster_path) {
        urlImagen = `https://image.tmdb.org/t/p/original/${trabajo.poster_path}`;
      }else{
        urlImagen = "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699589079/Error_404_C-170471185-mmed_xh4q2e.jpg"
      }
    return (
        <Link style={{textDecoration:"none", color:"white"}} href={`/detalle/${peticionPelicula.id}`}>
        <div style={{display:"flex", cursor:"pointer", flexDirection:"column", width:"120px", height:"180px", justifyContent:"center", alignItems:"center", gap:"5px"}}>
            <img style={{width:"100%", height:"100%"}} src={urlImagen}></img>
            <h1 style={{fontSize:"12px",}}>{trabajo.original_title}</h1>
        </div>
        </Link>
    )
}

export default TarjetaBiografia