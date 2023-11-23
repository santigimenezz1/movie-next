'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TarjetaSerie from "../TarjetaSerie/TarjetaSerie";
import Link from "next/link";
import TarjetaHome from "./TarjetaHome/TarjetaHome";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Slider from "react-slick";

export default function CarouselTarjetaHome( {data ,text} ) {

// Inicializa AOS en el componente principal
useEffect(() => {
  AOS.init();
}, [])


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
        infinite: false,
        speed: 500,
        slidesToShow: 4, // Número predeterminado de tarjetas en una fila
        slidesToScroll: 4, // Número predeterminado de tarjetas para desplazarse
        initialSlide: 0,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            },
          },
          {
            breakpoint: 1000, // Agrega un breakpoint personalizado para 1000px
            settings: {
              slidesToShow: 3, // Cambia el número de tarjetas a 2 para 1000px o menos
              slidesToScroll: 3, // Cambia el número de tarjetas para desplazarse a 2 para 1000px o menos
              dots: false,
            },
          },
          {
            breakpoint: 900, // Agrega un breakpoint personalizado para 1000px
            settings: {
              slidesToShow: 3, // Cambia el número de tarjetas a 2 para 1000px o menos
              slidesToScroll: 3, // Cambia el número de tarjetas para desplazarse a 2 para 1000px o menos
              dots: false,
            },
          },
          {
            breakpoint: 800, // Agrega un breakpoint personalizado para 1000px
            settings: {
              slidesToShow: 2, // Cambia el número de tarjetas a 2 para 1000px o menos
              slidesToScroll: 2, // Cambia el número de tarjetas para desplazarse a 2 para 1000px o menos
              dots: false,
            },
          },
          {
            breakpoint: 500, // Agrega un breakpoint personalizado para 1000px
            settings: {
              slidesToShow: 1, // Cambia el número de tarjetas a 2 para 1000px o menos
              slidesToScroll: 1, // Cambia el número de tarjetas para desplazarse a 2 para 1000px o menos
              dots: false,
            },
          },
        ],
      };

  return (
    <div style={{padding:"15px 35px 0px 35px"}}>
      <h1 style={{color:"white", letterSpacing:"4px", fontSize:"25px", paddingLeft:"15px"}}>{text}</h1>
      <Slider {...settings}>
      
      {
        data.results ?
      data.results.map((movie) => (
        <div data-aos="fade-left"  key={movie.id}>
 <Link href={`/detalle/${movie.id}`}>
            <TarjetaHome movie={movie} />
            </Link>
        </div>
        ))
        :
        data.parts.map((movie) => (
          <div key={movie.id}>
            <Link href={`/detalle/${movie.id}`}>
            <TarjetaHome movie={movie} />
            </Link>
          </div>
        ))
        }
      </Slider>
    </div>
  );
}
