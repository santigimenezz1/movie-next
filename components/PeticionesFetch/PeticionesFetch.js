//PELICULAS
export async function peticionPeliculaspPopulares() {
    const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    const endpoint = '/movie/popular';
    const apiUrl = `${tmdbBaseUrl}${endpoint}?api_key=${apiKey}&append_to_response=videos`;
  
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        return(data);
      } else {
        console.error('Error al recuperar datos de la API');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  export async function peticionPeliculasTendencia() {
    const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    const endpoint = '/movie/top_rated';
    const apiUrl = `${tmdbBaseUrl}${endpoint}?api_key=${apiKey}&append_to_response=videos`;
  
    try {
      const response = await fetch(apiUrl);
      // Verifica si la solicitud fue exitosa
      if (response.ok) {
        const data = await response.json();
        return(data);
      } else {
        console.error('Error al recuperar datos de la API');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  export async function peticionPeliculasSeViene() {
    const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    const endpoint = '/movie/upcoming';
    const apiUrl = `${tmdbBaseUrl}${endpoint}?api_key=${apiKey}&append_to_response=videos`;
  
    try {
      const response = await fetch(apiUrl);
      // Verifica si la solicitud fue exitosa
      if (response.ok) {
        const data = await response.json();
        return(data);
      } else {
        console.error('Error al recuperar datos de la API');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  export async function peticionPeliculasNuevas() {
    const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    const endpoint = '/movie/now_playing';
    const apiUrl = `${tmdbBaseUrl}${endpoint}?api_key=${apiKey}&append_to_response=videos`;
  
    try {
      const response = await fetch(apiUrl);
      // Verifica si la solicitud fue exitosa
      if (response.ok) {
        const data = await response.json();
        return(data);
      } else {
        console.error('Error al recuperar datos de la API');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  
  export async function buscarPelicula(type, id) {
    const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    const endpoint = `${type}`;
    const apiUrl = `${tmdbBaseUrl}/${endpoint}/${id}?api_key=${apiKey}&language=es-ES`;
    
  
    try {
      const response = await fetch(apiUrl);
      // Verifica si la solicitud fue exitosa
      if (response.ok) {
        const data = await response.json();
        return(data);
      } else {
        console.error('Error al recuperar datos de la API');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  export async function RepartoPelicula( id) {
    const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    const endpoint = `movie`;
    const apiUrl = `${tmdbBaseUrl}/${endpoint}/${id}/credits?api_key=${apiKey}&language=es-ES`;
    
  
    try {
      const response = await fetch(apiUrl);
      // Verifica si la solicitud fue exitosa
      if (response.ok) {
        const data = await response.json();
        return(data);
      } else {
        console.error('Error al recuperar datos de la API');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  
  export async function buscarVideo(type, id) {
    const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    const endpoint = `${type}`;
    const apiUrl = `${tmdbBaseUrl}/${endpoint}/${id}/videos?api_key=${apiKey}&language=es-ES`;
    
  
    try {
      const response = await fetch(apiUrl);
      // Verifica si la solicitud fue exitosa
      if (response.ok) {
        const data = await response.json();
        return(data);
      } else {
        console.error('Error al recuperar datos de la API');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  //-------------------------------------------------------
  //SERIES
  export async function peticionSeriesPopulares() {
    const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    const endpoint = '/tv/popular';
    const apiUrl = `${tmdbBaseUrl}${endpoint}?api_key=${apiKey}&append_to_response=videos`;
  
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        return(data);
      } else {
        console.error('Error al recuperar datos de la API');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  export async function peticionSeriesTendencia() {
    const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    const endpoint = '/tv/top_rated';
    const apiUrl = `${tmdbBaseUrl}${endpoint}?api_key=${apiKey}&append_to_response=videos`;
  
    try {
      const response = await fetch(apiUrl);
      // Verifica si la solicitud fue exitosa
      if (response.ok) {
        const data = await response.json();
        return(data);
      } else {
        console.error('Error al recuperar datos de la API');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  export async function peticionSeriesEnElAire() {
    const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    const endpoint = '/tv/on_the_air';
    const apiUrl = `${tmdbBaseUrl}${endpoint}?api_key=${apiKey}&append_to_response=videos`;
  
    try {
      const response = await fetch(apiUrl);
      // Verifica si la solicitud fue exitosa
      if (response.ok) {
        const data = await response.json();
        return(data);
      } else {
        console.error('Error al recuperar datos de la API');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  export async function peticionCapituloTemporada(numeroTemporada, id ) {
    const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    const endpoint = '/tv';
    const apiUrl = `${tmdbBaseUrl}${endpoint}/${id}/season/${numeroTemporada}?api_key=${apiKey}&append_to_response=videos&language=es-ES`;
  
    try {
      const response = await fetch(apiUrl);
      // Verifica si la solicitud fue exitosa
      if (response.ok) {
        const data = await response.json();
        return(data);
      } else {
        console.error('Error al recuperar datos de la API');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  export async function RepartoSerie( id) {
    const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    const endpoint = `tv`;
    const apiUrl = `${tmdbBaseUrl}/${endpoint}/${id}/credits?api_key=${apiKey}&language=es-ES`;
    
  
    try {
      const response = await fetch(apiUrl);
      // Verifica si la solicitud fue exitosa
      if (response.ok) {
        const data = await response.json();
        return(data);
      } else {
        console.error('Error al recuperar datos de la API');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  
  
  
  //BIOGRAFIA
  
  export async function peticionPersonaBiografia(persona) {
    const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    const endpoint = '/person';
    const apiUrl = `${tmdbBaseUrl}${endpoint}/${persona}?api_key=${apiKey}&language=es-ES`;
  
    try {
      const response = await fetch(apiUrl);
      // Verifica si la solicitud fue exitosa
      if (response.ok) {
        const data = await response.json();
        return(data);
      } else {
        console.error('Error al recuperar datos de la API');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  export async function peticionTrabajosActor(persona) {
    const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    const endpoint = '/person';
    const apiUrl = `${tmdbBaseUrl}${endpoint}/${persona}/combined_credits?api_key=${apiKey}&language=es-ES`;
  
    try {
      const response = await fetch(apiUrl);
      // Verifica si la solicitud fue exitosa
      if (response.ok) {
        const data = await response.json();
        return(data);
      } else {
        console.error('Error al recuperar datos de la API');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  
  //SEARCH 
  
  export async function Search(nombre) {
    const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    const apiUrl =`${tmdbBaseUrl}/search/multi?api_key=${apiKey}&language=es-ES&page=1&include_adult=false&query=${nombre}`;
    
    try {
      const response = await fetch(apiUrl);
      // Verifica si la solicitud fue exitosa
      if (response.ok) {
        const data = await response.json();
        return(data);
      } else {
        console.error('Error al recuperar datos de la API');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  
  
  
  
  export async function SearchColeccion(id) {
    const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    const apiUrl = `${tmdbBaseUrl}/collection/${id}?api_key=${apiKey}&language=es-ES`;
    
    try {
      const response = await fetch(apiUrl);
      // Verifica si la solicitud fue exitosa
      if (response.ok) {
        const data = await response.json();
        return(data);
      } else {
        console.error('Error al recuperar datos de la API');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  
  
  export async function BuscarColl(coleccion) {
    const apiKey = '641eb2676131a3aa4fafc93460d6ae1f';
    const tmdbBaseUrl = 'https://api.themoviedb.org/3';
    const apiUrl =`${tmdbBaseUrl}/search/collection?api_key=${apiKey}&language=es-ES&page=1&include_adult=false&query=${coleccion}`;
    
    try {
      const response = await fetch(apiUrl);
      // Verifica si la solicitud fue exitosa
      if (response.ok) {
        const data = await response.json();
        return(data);
      } else {
        console.error('Error al recuperar datos de la API');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  }
  
  
  
  
  
  