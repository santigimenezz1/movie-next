'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TarjetaCapitulo from "../TarjetaCapitulo/TarjetaCapitulo";
import { useState } from "react";

export default function CarouselTarjetasCapitulos( {capitulosTemporada} ) {
    const CustomPrevArrow = (props) => (
        <button className="slick-arrow slick-prev" onClick={props.onClick} style={{ top: "100px", position: "absolute" }}>
          Anterior
        </button>
      );
    
      const CustomNextArrow = (props) => (
        <button className="slick-arrow slick-next" onClick={props.onClick} style={{  top: "100px", right:"-10px", position: "absolute" }}>
          Siguiente
        </button>
      );
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
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
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    ],
  };
  const [capitulos, setCapitulos] = useState(capitulosTemporada)


  return (
    <div style={{padding:"0px"}}>
      <Slider {...settings}>
        
          {
            capitulosTemporada.map((capitulo, index)=>(
              <div key={index}>
              <TarjetaCapitulo capitulo={capitulo} index={index} />
              </div> 
            ))
          }
       
     
      </Slider>
    </div>
  );
}
