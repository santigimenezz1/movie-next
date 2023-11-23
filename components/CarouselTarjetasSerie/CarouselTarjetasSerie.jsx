'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TarjetaSerie from "../TarjetaSerie/TarjetaSerie";
import Link from "next/link";

export default  function CarouselTarjetasSerie ( {data ,text} ) {
  
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
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
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
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

 

  return (
    <div style={{padding:"30px"}}>
      <h1 style={{color:"white", letterSpacing:"4px", fontSize:"25px", paddingLeft:"15px"}}>{text}</h1>
      <Slider {...settings}>
      
      {
        data.results ?
      data.results.map((movie) => (
          <div key={movie.id}>
            <Link href={`/detalle/${movie.id}`}>
            <TarjetaSerie movie={movie} />
            </Link>
          </div>
        ))
        :
        data.parts.map((movie) => (
          <div key={movie.id}>
            <Link href={`/detalle/${movie.id}`}>
            <TarjetaSerie movie={movie} />
            </Link>
          </div>
        ))
        }
      </Slider>
    </div>
  );
}
