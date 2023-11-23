"use client"
import React from 'react';
import '../TarjetaActor/tarjetaActor.css';
import '../../src/app/mediaQuery.css'

const TarjetaActor = ({ actor }) => {
  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  };
  let name = "Nombre Desconocido";
  let castId = actor && actor.cast_id ? actor.cast_id : 0; // Usar 0 si cast_id es undefined o nulo
   let urlImagen = "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699587775/unknown-person1_dka30f.gif"
  if (actor && actor.profile_path && actor.name) {
    urlImagen = `https://image.tmdb.org/t/p/original/${actor.profile_path}`;
    name = actor.name;
  }

  return (
    <div onClick={()=>scrollToTop()} className='tarjetaActor'>
      <img className='tarjetaActor__img' src={urlImagen} alt={name} />
      <div className='tarjetaActor__info'>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default TarjetaActor;
