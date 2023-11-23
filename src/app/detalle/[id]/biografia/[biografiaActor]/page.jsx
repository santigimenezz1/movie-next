"use client"
import BotonBack from '../../../../../../components/BotonBack/BotonBack'
import { peticionPersonaBiografia, peticionTrabajosActor } from '../../../../../../components/PeticionesFetch/PeticionesFetch'
import TarjetaBiografia from '../../../../../../components/TarjetaBiografia/TarjetaBiografia'
import '../[biografiaActor]/biografiaActor.css'
import Link from 'next/link'

async function BiografiaActor ( {params} ){
    let idActor = await params.biografiaActor
    let peticionActor = await peticionPersonaBiografia(idActor)
    let trabajosBiografia = await peticionTrabajosActor(idActor)

    let urlImagen = "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699587922/nophoto_cyyfpl.png";
    let name = "";

    if (peticionActor && peticionActor.profile_path && peticionActor.name) {
        urlImagen = `https://image.tmdb.org/t/p/original/${peticionActor.profile_path}`;
        name = peticionActor.name
      }
    return (
        <>
        <div className='botonVolver__biografia'>
        <BotonBack  />
        </div>
        <div className="biografia">
                <img src={urlImagen}></img>
                <div className="boigrafia__info">
                    <h1>{name}</h1>
                    <div className='biografia__info__biografia'>
                        <h2>Biografia</h2>
                        <span>{peticionActor.biography}</span>
                    </div>
                    <div className='biografia__info__infoPersonal'>
                            <h1>Informacion personal</h1>
                             <h2>Departamento: {peticionActor.known_for_department}</h2>
                             <h2>Fecha de nacimiento: {peticionActor.birthday}</h2>
                             <h2>Lugar de nacimiento: {peticionActor.place_of_birth}</h2>
                        </div>
                    <div className='biografia__info__trabajos'>
                        <h1>Conocido por:</h1>
                        <div style={{display:"flex", gap:"10px"}}>
                            {
                                trabajosBiografia.cast.slice(0,6).map((trabajo, index)=>(
                                    <TarjetaBiografia key={index}  trabajo={trabajo}  />

                                ))
                            }
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}
export default BiografiaActor