import React from 'react'
import '../TarjetaImagenDetalle/tarjetaImagenDetalle.css'

const TarjetaImagenDetalle = ( {urlImagen} ) => {
  return (
    <div className='tarjetaImagenDetalle'>
      <img src={urlImagen}></img>
    </div>
  )
}

export default TarjetaImagenDetalle
