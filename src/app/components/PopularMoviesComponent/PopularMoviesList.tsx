'use client';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, ContainerPaddingMovie, ImagePosterMovie, TitleCarrusel, settings } from './Style';
import { ENDPOINT_URL_IMAGES, ENDPONT_GET_POPULARMOVIE } from '../../enviroments/EndoPoints';
import { API_KEY, IMAGE_NOFOUND_URL, MESSAGE_ERROR } from '../../utils/Constants';
import { PopularMovieInterface } from '../../utils/PopularMovie';


const PopularMoviesList = () => {

  const TITLE_POPULAR_MOVIES = "Películas populares";

  //Inicializamos el estado para pasar los datos de la api 
  const [movies, setMovies] = useState<PopularMovieInterface[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${ENDPONT_GET_POPULARMOVIE}?api_key=${API_KEY}`);
        if (response.ok) {
          const data = await response.json();
          //Se obtienen todos los resultado y se hace un slice para tener 10 resultados solamente
          setMovies(data.results.slice(0, 10));
        } else {
          throw new Error(`${MESSAGE_ERROR}`);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (

    <ContainerPaddingMovie>
      <Container>
        <TitleCarrusel>{TITLE_POPULAR_MOVIES}</TitleCarrusel>
        <Slider {...settings}>
          {movies.map((movie: PopularMovieInterface) => (
            <div  key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                {movie.poster_path !== null &&
                  <ImagePosterMovie src={`${ENDPOINT_URL_IMAGES}${movie.poster_path}`} alt={movie.title}
                    style={{ cursor: 'pointer' }} />
                }
                {movie.poster_path == null &&
                  <ImagePosterMovie src={`${IMAGE_NOFOUND_URL}`} alt='no imagen'
                  />
                }

              </Link>


            </div>
          ))}
        </Slider>
      </Container>
    </ContainerPaddingMovie>
  );
};



export default PopularMoviesList;
