"use client"
import React from 'react'
import './tarjetaSerie.css'
import Link from 'next/link'
import '../../components/MediaQuery/MediaQuery.css'

const scrollToTop = () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 500);
};


const TarjetaSerie = ( {movie} ) => {
  let urlImagen = "";
if (movie.poster_path) {
  urlImagen = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
} else {
  urlImagen = "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699589371/http-error-404-not-found_zxyjkx.png";

}  return (
    <div onClick={()=>scrollToTop()} className='tarjetaSerie'>
    <img className='tarjetaSerie__img' src={urlImagen}></img>
    </div>
  )
}

export default TarjetaSerie