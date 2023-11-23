import React from "react";
import { RepartoSerie, buscarPelicula, buscarVideo } from "../../../../components/PeticionesFetch/PeticionesFetch";
import DetalleSerie from "../page";
import Temporadas from "../../../../components/Temporadas/Temporadas";
import RepartoActoresSerie from "../../../../components/RepartoActoresSerie/RepartoActoresSerie";

async function DetalleSeries({ params }) {
  let data = await buscarPelicula("tv" ,params.id);
  let video = await buscarVideo("tv", params.id)
  let reparto = await RepartoSerie(params.id);
   let youtubeId = null;
   let filter = []

   if (video && video.results) {
     let filter = video.results.filter((video) => video.type === "Trailer");
  }
   if (filter.length > 0 && filter[0].key) {
     youtubeId = filter[0].key;
   }
 



    return (
    <div>
    <DetalleSerie youtubeId={youtubeId} data={data}/>
    <Temporadas data={data} />
    <RepartoActoresSerie reparto={reparto} id={params.id} data={data} />
    </div>
  );
}

export default DetalleSeries;

