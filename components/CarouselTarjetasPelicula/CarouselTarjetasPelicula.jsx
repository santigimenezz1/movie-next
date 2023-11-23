"use client"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TarjetaPelicula from "../TarjetaPelicula/TarjetaPelicula";
import './carouselTarjetaPelicula.css';
import Link from 'next/link';

export default function CarouselTarjetasPelicula({ data, text }) {

  const CustomPrevArrow = (props) => (
    <button className="slick-arrow slick-prev" onClick={props.onClick}>
      Anterior
    </button>
  );

  const CustomNextArrow = (props) => (
    <button className="slick-arrow slick-next" onClick={props.onClick}>
      Siguiente
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,  // Cambiar a 'true' para hacer un ciclo infinito de tarjetas.
    speed: 500,
    slidesToShow: 1,  // Cambiar a 1 para mostrar una tarjeta a la vez.
    slidesToScroll: 1,  // Cambiar a 1 para desplazarse una tarjeta a la vez.
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className='container__carouselPelicula' style={{ paddingLeft: "35px", paddingRight: "35px"}}>
      <Slider {...settings}>
        {data.results.map((movie) => (
          <div  key={movie.id} style={{ width: "100%" }}>
            <Link href={`/detalle/${movie.id}`}>
              <TarjetaPelicula movie={movie} />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
