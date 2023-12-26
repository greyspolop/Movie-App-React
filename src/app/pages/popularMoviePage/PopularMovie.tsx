'use client';
import { PopularMovieInterface } from '../../utils/PopularMovie';
import React, { useState, useEffect} from 'react';
import PopularMoviesList from '../../../app/components/PopularMoviesComponent/PopularMoviesList';
import PopularSeries from '../../../app/components/PopularSeriesComponent/PopularSeries';
import TopRatedMovies from '../../../app/components/TopRatedMoviesComponent/TopRatedMovies';
import { API_KEY, POPULAR_IMG_URL } from '../../utils/Constants';
import { ENDPOINT_GET_POPULARMOVIES, ENDPOINT_URL_IMAGES } from '../../../app/enviroments/EndoPoints';
import { Container, ContainerMoviePage, ImageMovie, ImageMoviePopular, TextSubTitle, TextTitle } from './popularMovieStyle';

import { Provider} from "react-redux";
import configureStore from '../../GlobalRedux/stores/ConfigureStore';

const PopularMovie = () => {
  const [movies, setMovies] = useState<PopularMovieInterface>();

  //obteneromos el estados de redux
  const store = configureStore();

  store.subscribe(() =>
   console.log(store.getState())
 )
//llamdo de api peliculas populares
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${ENDPOINT_GET_POPULARMOVIES}?api_key=${API_KEY}`);
        if (response.ok) {
          const data = await response.json();
          setMovies(data.results[0]);
        } else {
          throw new Error('Error al obtener las películas');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

//iinstanciamos componentes que comforman la pageenima de peliculas populares
  return (

    <Provider store={store}>

    <ContainerMoviePage>

      <Container>
        <ImageMoviePopular src={`${ENDPOINT_URL_IMAGES}${movies?.backdrop_path}`} alt={movies?.title}>
        </ImageMoviePopular>
        <TextTitle>{movies?.title}</TextTitle>
        <TextSubTitle >Más Popular</TextSubTitle>
        <ImageMovie src={`${POPULAR_IMG_URL}`} ></ImageMovie>

      </Container>
      <div className='contenedor'>
        <div><PopularMoviesList></PopularMoviesList></div>
        <div>  <PopularSeries></PopularSeries></div>
        <div><TopRatedMovies></TopRatedMovies></div>

      </div>

    </ContainerMoviePage>
</Provider> 

  );
};

export default PopularMovie;
