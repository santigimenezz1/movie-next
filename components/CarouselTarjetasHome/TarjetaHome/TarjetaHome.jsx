"use client"
import React from 'react'
import './tarjetaHome.css'

const TarjetaHome = ( {movie} ) => {

  
const scrollToTop = () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 500);
};
   const urlImagen = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
    return (
    <div onClick={()=>scrollToTop()} className='tarjetaHome'>
      <h1>{movie.title}</h1>
    <img className='tarjetaHome___img' src={urlImagen}></img>
    </div>
  )
}

export default TarjetaHome