import './tarjetaColeccion.css';

const TarjetaColeccion = ( {imagen, video} ) => {
  return (
    <div className="tarjetaColeccion">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="videoFondo"
      >
        <source src={video} type="video/mp4" />
        Tu navegador no admite la reproducción de videos.
      </video>
      <img src={imagen} alt="Imagen de la tarjeta" />
    </div>
  );
};

export default TarjetaColeccion;
