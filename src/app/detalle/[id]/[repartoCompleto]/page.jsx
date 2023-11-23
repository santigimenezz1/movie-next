import HeaderReparto from '../../../../../components/HeaderReparto/HeaderReparto';
import { RepartoPelicula, buscarPelicula } from '../../../../../components/PeticionesFetch/PeticionesFetch';
import TarjetaActor from '../../../../../components/TarjetaActor/TarjetaActor';
import '../[repartoCompleto]/repartoCompleto.css';
import Link from "next/link";

async function repartoCompleto({ params }) {
    const idPelicula = params.id;
   const reparto = await RepartoPelicula(params.id);
   const pelicula = await buscarPelicula("movie", params.id);
  let prueba = await reparto.crew


  console.log({prueba})
  return (
    <>
      <div className="repartoCompleto">
        <div>
          <HeaderReparto idPelicula={idPelicula} pelicula={pelicula} />
        </div>

        <div className="repartoCompletoTarjetas">
          <div className="contaier__repartoCompleto">
            <h1>Reparto</h1>
            <div className="repartoCompletoTarjetas__cast">
              {reparto.cast.filter((actor)=>actor.profile_path !== null).map((actor) => (
                <Link key={actor.id} style={{ textDecoration: "none" }} href={`/detalle/${params.id}/${params.id}/biografia/${actor.id}`}>
                  <TarjetaActor key={actor.cast_id || actor.id} actor={actor} />
                </Link>
              ))}
            </div>
          </div>
          <div className="contaier__repartoCompleto">
            <h1>Equipo</h1>
            <div className="repartoCompletoTarjetas__cast">
              {reparto.crew.filter((actor)=>actor.profile_path !== null).map((actor) => (
                <Link key={actor.id} style={{ textDecoration: "none" }} href={`/detalle/${params.id}/${params.id}/biografia/${actor.id}`}>
                  <TarjetaActor key={actor.crew_id || actor.id} actor={actor} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default repartoCompleto;
