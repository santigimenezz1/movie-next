import HeaderReparto from '../../../../../components/HeaderReparto/HeaderReparto';
import { RepartoSerie, buscarPelicula } from '../../../../../components/PeticionesFetch/PeticionesFetch';
import TarjetaActor from '../../../../../components/TarjetaActor/TarjetaActor';
import '../[repartoCompleto]/repartoCompleto.css';
import Link from "next/link";

async function repartoCompletoSerie({ params }) {
  try {
    const idSerie = params.id;
    const reparto = await RepartoSerie(params.id);
    const pelicula = await buscarPelicula("tv", params.id);
    let testtt = await reparto.crew

    if (!reparto || !reparto.cast || !reparto.crew) {
      // Manejar el caso en el que los datos de reparto no estén disponibles
      return <div>Cargando datos...</div>;
    }

    console.log({testtt})
    return (
      <div className="repartoCompleto">
        <HeaderReparto idSerie={idSerie} pelicula={pelicula} />
        <div className="repartoCompletoTarjetas">
          <div className="contaier__repartoCompleto">
            <h1>Reparto</h1>
            <div className="repartoCompletoTarjetas__cast">
              {reparto.cast.filter((actor)=>actor.profile_path !== null).map((actor) => (
                <Link style={{textDecoration:"none"}} key={actor.id} href={`/detalle/${params.id}/${params.id}/biografia/${actor.id}`}>
                  <TarjetaActor key={actor.cast_id || actor.id} actor={actor} />
                </Link>
              ))}
            </div>
          </div>
          <div className="contaier__repartoCompleto">
            <h1>Equipo</h1>
            <div className="repartoCompletoTarjetas__cast">
              {reparto.crew.filter((actor)=>actor.profile_path !== null).map((actor) => (
                <Link style={{textDecoration:"none"}} key={actor.id} href={`/detalle/${params.id}/${params.id}/biografia/${actor.id}`}>
                  <TarjetaActor key={actor.crew_id || actor.id} actor={actor} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    // Manejar errores de la solicitud
    console.error("Error en la solicitud de datos:", error);
    return <div>Error al cargar los datos.</div>;
  }
}
export default repartoCompletoSerie;
