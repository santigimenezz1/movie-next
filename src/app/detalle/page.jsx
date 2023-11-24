"use client"
import React, { useEffect, useState } from 'react';
import './detalle.css';
import { Button } from '@mui/base';
import BotonBack from '../../../components/BotonBack/BotonBack';
import TarjetaImagenDetalle from '../../../components/TarjetaImagenDetalle/TarjetaImagenDetalle';
import BotonVideoYoutube from '../../../components/BotonVideoYoutube/BotonVideoYoutube';
import Video from '../../../components/BotonVideoYoutube/Video/Video';

const Detalle = ({ idYoutube, data }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [estadoBotonCerrar, setEstadoBotonCerrar] = useState(false);

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
  urlImagen = "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699577858/no-user-profile-picture-hand-260nw-99335579_bccgqo.jpg";
}

return (
  <>
    <div className='detalle'>
      <div className='detalle__imagenPrincipal'>
        <div>
        <BotonBack />
        </div>
        <TarjetaImagenDetalle urlImagen={urlImagen} />
      </div>
      <img className='detalle__imgFondo' src={urlImagen} alt="Imagen de la película" />
      <div className='detalle__info'>
        <div className='detalle__info__titulo'>
          {data && data.title && <h1>{data.title} ({(data.release_date).slice(0, 4)})</h1>}
          {data && data.genres && data.genres.length > 0 && <h3>{data.genres[0].name}</h3>}
        </div>
        <div className='detalle__info__description'>
          <h1>Vista general</h1>
          {data && data.overview && <span>{data.overview}</span>}
        </div>
        <div className='detalle__info__creador'>
          <h1>Vince Gilligan</h1>
          <h2>Creador</h2>
        </div>
        <div>
          <BotonVideoYoutube setEstadoBotonCerrar={setEstadoBotonCerrar} videoId={"EcKZysWvMno"} openVideo={openVideo} showVideo={showVideo} setShowVideo={setShowVideo} />
        </div>
      </div>
      <div className='videoReproductor'>
        <Video setEstadoBotonCerrar={setEstadoBotonCerrar} estadoBotonCerrar={estadoBotonCerrar} videoId={idYoutube} closeVideo={closeVideo} openVideo={openVideo} showVideo={showVideo} setShowVideo={setShowVideo} />
      </div>
    </div>
  </>
);

};

export default Detalle;


