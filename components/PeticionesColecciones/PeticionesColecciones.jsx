import Link from "next/link"

const { default: CarouselTarjetasSerie } = require("../CarouselTarjetasSerie/CarouselTarjetasSerie")
const { default: TarjetaSerie } = require("../TarjetaSerie/TarjetaSerie")

const PeticionesColecciones = ({ name, disney, coleccionCars, coleccionMonster, coleccionToyStorie, national, starWars, coleccionVengadores, coleccionHulk, coleccionIronMan, coleccionSpiderman, coleccionCapitan, coleccionGuardianes }) => {
   let te = disney.results



  console.log({te})
  return (
        <div class="colecciones">
      <div className={name === "marvel" ? "colecciones__background" : `colecciones__background${`${name}`}`}></div>
            <div className="colecciones__tarjetas">
                {
                    name === "marvel" &&
                    <>
                        <CarouselTarjetasSerie data={coleccionSpiderman} />
                        <CarouselTarjetasSerie data={coleccionGuardianes} />
                        <CarouselTarjetasSerie data={coleccionCapitan} />
                        <CarouselTarjetasSerie data={coleccionIronMan} />
                        <CarouselTarjetasSerie data={coleccionHulk} />
                        <CarouselTarjetasSerie data={coleccionVengadores} />
                    </>
                }
                {
                    name === "pixar" &&
                    <>
                        <CarouselTarjetasSerie data={coleccionToyStorie} />
                        <CarouselTarjetasSerie data={coleccionMonster} />
                        <CarouselTarjetasSerie data={coleccionCars} />

                    </>
                }
              <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
  {name === "starWars" &&
    starWars.results.map((pelicula) => {
      if (pelicula.media_type === "movie") {
        return (
          <Link key={pelicula.id} href={`/detalle/${pelicula.id}`}>
            <TarjetaSerie name={name} movie={pelicula} />
          </Link>
        );
      } else {
        return (
          <Link key={pelicula.id} href={`/detalleSerie/${pelicula.id}`}>
            <TarjetaSerie name={name} movie={pelicula} />
          </Link>
        );
      }
    })}
</div>


               <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
  {name === "national" &&
    national.results.filter((pelicula)=>pelicula.poster_path).map((pelicula) => {
      if (pelicula.media_type === "movie") {
        return (
          <Link key={pelicula.id} href={`/detalle/${pelicula.id}`}>
            <TarjetaSerie name={name} movie={pelicula} />
          </Link>
        );
      } else {
        return (
          <Link key={pelicula.id} href={`/detalleSerie/${pelicula.id}`}>
            <TarjetaSerie name={name} movie={pelicula} />
          </Link>
        );
      }
    })}
</div>



<div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
  {name === "disney" &&
    disney.results.filter((pelicula)=>pelicula.poster_path).map((pelicula) => {
      if (pelicula.media_type === "movie") {
        return (
          <Link key={pelicula.id} href={`/detalle/${pelicula.id}`}>
            <TarjetaSerie name={name} movie={pelicula} />
          </Link>
        );
      } else {
        return (
          <Link key={pelicula.id} href={`/detalleSerie/${pelicula.id}`}>
            <TarjetaSerie name={name} movie={pelicula} />
          </Link>
        );
      }
    })}
</div>

            </div>
        </div>
    )
}

export default PeticionesColecciones