'use client';

import React, { useState, useEffect } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, ImageSeries, TitleCarrusel, settings } from './PopularSeriesStyle';
import { ENDPOINT_GET_POPULAR_SERIES, ENDPOINT_URL_IMAGES } from '../../enviroments/EndoPoints';
import { PopularMovieInterface } from '../../utils/PopularMovie';
import { API_KEY } from '../../utils/Constants';


const PopularSeries = () => {

  const TITLE_SERIES = "Series populares";
  const [series, setSeries] = useState<PopularMovieInterface[]>([]);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch(`${ENDPOINT_GET_POPULAR_SERIES}?api_key=${API_KEY}`);
        if (response.ok) {
          const data = await response.json();

          setSeries(data.results.slice(0, 10));
        } else {
          throw new Error('Error al obtener las películas');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSeries();
  }, []);


  return (
    <div>
      <Container>
        <TitleCarrusel>{TITLE_SERIES}</TitleCarrusel>
        <Slider {...settings}>
          {series.map(serie => (
            <div key={serie.id}>

              <ImageSeries src={`${ENDPOINT_URL_IMAGES}${serie.poster_path}`} alt={serie.title} />

            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};



export default PopularSeries;
