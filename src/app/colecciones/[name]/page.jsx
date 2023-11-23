import '../[name]/colecciones.css'
import { BuscarColl, Search, SearchColeccion, buscarCollec, peticionPeliculasSeViene } from '../../../../components/PeticionesFetch/PeticionesFetch'
import PeticionesColecciones from '../../../../components/PeticionesColecciones/PeticionesColecciones';
const Colecciones = async ({ params }) => {
  
  let toy = await BuscarColl("cars");
  let ress = toy.results;
  let name = params.name;
  let coleccionSpiderman = await SearchColeccion(531241);
  let coleccionGuardianes = await SearchColeccion(284433);
  let coleccionCapitan = await SearchColeccion(131295);
  let coleccionIronMan = await SearchColeccion(131292);
  let coleccionHulk = await SearchColeccion(114431);
  let coleccionVengadores = await SearchColeccion(86311);
  let starWars = await Search("star wars");
  let national = await Search("national geographic");
  let coleccionToyStorie = await SearchColeccion(10194);
  let coleccionMonster = await SearchColeccion(137696);
  let coleccionCars = await SearchColeccion(87118);
  let disney = await Search("Disney");


  const collectionProps = {
    name,
    disney,
    coleccionCars,
    coleccionMonster,
    coleccionToyStorie,
    national,
    starWars,
    coleccionVengadores,
    coleccionHulk,
    coleccionIronMan,
    coleccionSpiderman,
    coleccionCapitan,
    coleccionGuardianes,
  };

  return <PeticionesColecciones {...collectionProps} />;
};

export default Colecciones;
