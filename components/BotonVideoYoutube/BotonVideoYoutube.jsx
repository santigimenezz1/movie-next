"use client"
import React, { useState } from 'react';
import '../BotonVideoYoutube/botonVideoYoutube.css'
import Video from './Video/Video';
import YouTube from 'react-youtube';


const BotonVideoYoutube = ({setEstadoBotonCerrar,openVideo,showVideo, videoId }) => {
 
  const abrirVideo = ()=>{
    setEstadoBotonCerrar(true)
    openVideo ()
  }

  return (
    <div className='reproductosVideo'>
      <button className='botonAbrirTrailer' onClick={abrirVideo}>Ver Trailer</button>
    </div>
  );
};

export default BotonVideoYoutube;