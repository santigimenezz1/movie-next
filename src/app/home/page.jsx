import TarjetasColeccion from "../../../components/TarjetasColeccion/TarjetasColeccion"
import { peticionPeliculasNuevas, peticionPeliculasSeViene, peticionPeliculasTendencia, peticionPeliculaspPopulares } from "../peticionesFetch/page"

export default async function Home() {
  
    let data = await peticionPeliculaspPopulares()
    let peliculasTendecia = await  peticionPeliculasTendencia()
    let peliculasSeViene = await peticionPeliculasSeViene ()
    let nuevasPeliculas = await peticionPeliculasNuevas ()
   
   
     return (
      <>
      <div className='container__general__app'>
      
      <CarouselTarjetasPelicula data={data} />
      <TarjetasColeccion />
      </div>
      <div className='container__general'>
      <CarouselTarjetaHome data={data} text={"Lo mas popular"} />
      <CarouselTarjetaHome data={peliculasSeViene} text={"Lo que se viene"} />
      <CarouselTarjetasSerie data={nuevasPeliculas} text={"Recientes"}  />
      <FondoInteractivo />
      <CarouselTarjetaHome data={data}  />
      <CarouselTarjetaHome data={nuevasPeliculas} />
      <CarouselTarjetasSerie data={peliculasTendecia} text={"Tendencia"} />
      </div>
      </>
     )
   }
   