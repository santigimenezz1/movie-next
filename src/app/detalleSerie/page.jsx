"use client"
import React, { useState } from 'react'
import './detalleSerie.css'
import BotonBack from '../../../components/BotonBack/BotonBack';
import TarjetaImagenDetalle from '../../../components/TarjetaImagenDetalle/TarjetaImagenDetalle';
import BotonVideoYoutube from '../../../components/BotonVideoYoutube/BotonVideoYoutube';
import Video from '../../../components/BotonVideoYoutube/Video/Video';

const DetalleSerie = ( {youtubeId, data} ) => {
  const [showVideo, setShowVideo] = useState(false);
  const [estadoBotonCerrar, setEstadoBotonCerrar] = useState(false)
  const openVideo = () => {
    setShowVideo(true);
  };
  
  const closeVideo = () => {
    setShowVideo(false);
  };

  let urlImagen = "";

  if (data && data.poster_path) {
    urlImagen = `https://image.tmdb.org/t/p/original/${data.poster_path}`;
  } else {
    urlImagen = "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699562010/App%20peliculas/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093_r2tucp.png";
  }
  


  return (
    <div className='detalle'>
        <div className='detalle__imagenPrincipal'>
        <BotonBack />
      <TarjetaImagenDetalle urlImagen={urlImagen}/>
        </div>
      <img className='detalle__imgFondo' src={urlImagen}></img>
      <div className='detalle__info'>
      <div className='detalle__info__titulo'>
          {data && data.title && <h1>{data.title} ({(data.release_date).slice(0, 4)})</h1>}
          {data && data.genres && data.genres.length > 0 && <h3>{data.genres[0].name}</h3>}
        </div>
        <div className='detalle__info__description'>
  <h1>Vista general</h1>
  {data && data.overview ? <span>{data.overview}</span> : <span>No hay descripción disponible.</span>}
</div>
         <div className='detalle__info__creador'>
            <h1>Vince Gilligan</h1>
            <h2>Creador</h2>
         </div>
         <div>
         <BotonVideoYoutube setEstadoBotonCerrar={setEstadoBotonCerrar} videoId={"EcKZysWvMno"} openVideo={openVideo} showVideo={openVideo} setShowVideo={setShowVideo} />
         </div>
      </div>
      <div className='videoReproductor'>
         <Video setEstadoBotonCerrar={setEstadoBotonCerrar} estadoBotonCerrar={estadoBotonCerrar} videoId={youtubeId} closeVideo={closeVideo} openVideo={openVideo} showVideo={showVideo} setShowVideo={setShowVideo} />
      </div>
      </div>
      

  )
}

export default DetalleSerie


