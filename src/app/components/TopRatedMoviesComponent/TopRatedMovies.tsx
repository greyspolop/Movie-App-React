'use client';
import { PopularMovieInterface } from '../../utils//PopularMovie';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { API_KEY, MESSAGE_ERROR } from '../../utils/Constants';
import { ENDPOINT_GET_TOP_RATED_MOVIE, ENDPOINT_URL_IMAGES } from '../../../app/enviroments/EndoPoints';
import { TitleCarrusel, settings, ImageTopRated, ContainerPaddingTop } from '../TopRatedMoviesComponent/StylesTopRated';


const TopRatedMovies = () => {

  const TITLE_MOVIES_TOP_RATED = "Películas más aclamadas";

  const [moviesTopRated, setMoviesTopRated] = useState<PopularMovieInterface[]>([]);

  useEffect(() => {
    const fetchMoviesTopRated = async () => {
      try {
        const response = await fetch(`${ENDPOINT_GET_TOP_RATED_MOVIE}?api_key=${API_KEY}`);
        if (response.ok) {
          const data = await response.json();

          setMoviesTopRated(data.results.slice(0, 4));
        } else {
          throw new Error(`${MESSAGE_ERROR}`);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMoviesTopRated();
  }, []);


  return (
    <ContainerPaddingTop>
      <TitleCarrusel>{TITLE_MOVIES_TOP_RATED}</TitleCarrusel>
      <Slider {...settings}>
        {moviesTopRated.map(movie => (
          <div key={movie.id}>
            <ImageTopRated src={`${ENDPOINT_URL_IMAGES}${movie.poster_path}`} alt={movie.title} />
          </div>
        ))}
      </Slider>
    </ContainerPaddingTop>
  );
};



export default TopRatedMovies;
