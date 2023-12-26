'use client';
import React, { useState, useEffect, ChangeEvent } from 'react';
import PopularMovie from '../popularMoviePage/PopularMovie';
import { Link, Router } from 'react-router-dom';
import ImagenComponent from '../../components/ImagesIconsSearchComponent/ImagesIcons';
import { ENDPOINT_URL_IMAGES, ENPOINT_SEARCH_API } from '../../enviroments/EndoPoints';

import { ContainerCard, ImageHome, InputDiv } from './MoviesHomeStyle';

import { ContainerSummary, ImageDiv } from '../../assets/StylesComponents/ContainerSummary';
import { PopularMovieInterface } from '../../utils/PopularMovie';
import { API_KEY, IMAGE_NOFOUND_URL } from '../../utils/Constants';

const MoviesHome  = () => {

  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<PopularMovieInterface[]>([]);


  //Api para buscador de peliculas desde ell input
  useEffect(() => {
    const searchMovies = async () => {
      try {
        const response = await fetch(
          `${ENPOINT_SEARCH_API}?api_key=${API_KEY}&query=${query}`
        );
        if (response.ok) {
          const data = await response.json();
          setSearchResults(data.results);
        } else {
          throw new Error('Error al realizar la búsqueda');
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Realizar la búsqueda solo si hay un valor en el campo de búsqueda
    if (query !== '') {
      searchMovies();
    } else {
      setSearchResults([]); // Vaciar los resultados si no hay texto en el campo de búsqueda
    }
  }, [query]);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };


  const sliceTitle = (text: String) => { return text.slice(0, 14) + '...'; }
  const spliceOverview = (text: String) => {
    return text.slice(0, 123) + '...';
  }
  return (

    <div>
      
      <InputDiv>
        <input
          type="text"
          placeholder="Buscar películas..."
          value={query}
          onChange={handleInputChange}
        />
        <div className='textSearch'>
          {
            query && searchResults.length > 0 && <div>Resultados de la busqueda...</div>
          }
          {
            query.length > 0 && searchResults.length === 0 && <div>No hay resultados...</div>
          }
        </div>
      </InputDiv>

      <div>
        <ul>
          {searchResults.map((movie: PopularMovieInterface) => (
            <li key={movie.id}>
              <ContainerCard>
              
                <Link to={`/movie/${movie.id}`}>
                  {movie.backdrop_path !== null &&
                    <ImageHome src={`${ENDPOINT_URL_IMAGES}${movie.poster_path}`} alt={movie.title}
                      style={{ cursor: 'pointer' }} />
                  }
                  {movie.backdrop_path == null &&
                    <ImageHome src={`${IMAGE_NOFOUND_URL}`} alt='no imagen'
                      style={{ cursor: 'pointer' }} />
                  }


                  <h1>{sliceTitle(movie.title)}</h1>
                  <ContainerSummary>
                    <div>SUMARY </div>
                    <ImageDiv></ImageDiv>

                  </ContainerSummary>
                  <p>{spliceOverview(movie.overview)}</p>
                  < ImagenComponent></ImagenComponent>
                </Link>
              </ContainerCard>
            </li>
          ))}
        </ul>
      </div>

      <div>{/*Se intancia el componente de peliculas populares si no se encuentran resultados de la busqueda */}
        {
          query.length === 0 && <PopularMovie />}
      </div>


    </div>
  );
};

export default MoviesHome;
