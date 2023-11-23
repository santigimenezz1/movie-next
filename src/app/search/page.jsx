"use client"
import React, { useEffect, useState } from 'react';
import '../search/search.css'
import Link from 'next/link';
import { useFormik } from 'formik';
import LoadingPersonalizado from '../../../components/LoadingPersonalizado/LoadingPersonalizado';
import TarjetaSerie from '../../../components/TarjetaSerie/TarjetaSerie';
import { Search } from '../../../components/PeticionesFetch/PeticionesFetch';

const Buscar = ( ) => {
  const [estado, setEstado] = useState([])
  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues: {
      nombre: '',
    },
    onSubmit: async function (values)  {
        setLoading(true)
      let peticion =  await Search(values.nombre)
      let result = await peticion.results
      setEstado(result)
      setLoading(false)
    },
    validateOnChange: false,
  });

  useEffect(()=>{
    estado.length > 0 &&
   setLoading(false)
  },[estado])


  return (
    <div style={{position:"relative"}}>
    <div className={loading ?'loading' :'loadingOff'}>
    <LoadingPersonalizado />
    </div>
    <div className='buscador'>
      <form onSubmit={formik.handleSubmit}>
        <input 
        className='buscador__input'
          onChange={formik.handleChange}
          name='nombre'
          placeholder='Título, personaje o genero'
          value={formik.values.nombre}
        />
        <button className='buscador__boton' type='submit'>Buscar</button>
      </form>
      <div className='buscar__tarjetas'>
      {
  estado.length > 0 ? (
    estado.map((pelicula) => {
      if (pelicula.media_type === "movie") {
        return (
          <Link key={pelicula.id} href={`/detalle/${pelicula.id}`}>
            <TarjetaSerie movie={pelicula} />
          </Link>
        );
      }else{
        return (
          <Link key={pelicula.id} href={`/detalleSerie/${pelicula.id}`}>
            <TarjetaSerie movie={pelicula} />
          </Link>
        )
      }
    })
  ) : (
    <h1 className='titulo__sinBusqueda'>Buscá tu película o serie preferida 😀</h1>
  )
}
      </div>
    </div>
    </div>
    )
};

export default Buscar;
