
import { RepartoPelicula, buscarPelicula, buscarVideo } from "../../../../components/PeticionesFetch/PeticionesFetch";
import RepartoActores from "../../../../components/RepartoActores/RepartoActores";
import Detalle from "../page"
async function Prueba({ params }) {
  let data = await buscarPelicula("movie" ,params.id);
  let video = await buscarVideo("movie", params.id)
  let reparto = await RepartoPelicula(params.id)
  let id = params.id
  let test= reparto.cast
  let trailer = await video.results.filter((video) => video.type === "Trailer");
  let idYoutube = null;
  
  if (trailer && trailer[0]) {
    idYoutube = trailer[0].key;
  }
  


  return (
    <>
      < Detalle idYoutube={idYoutube} data={data} />
      <RepartoActores reparto={reparto} id={id} data={data} />
    </>
  );
}

export default Prueba;

