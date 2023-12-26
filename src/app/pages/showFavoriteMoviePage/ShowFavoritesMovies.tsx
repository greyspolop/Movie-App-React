import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { IMAGE_NOFOUND_URL, URL_ICON_LOVE } from '../../utils/Constants';
import { Container, ContainerListFavorit, ContainerSeacrch, Containertext, ContentText, IconText, ImageFavorite, ImageFavoriteNofound, ImageIco, Input, Li, TextSubTitle } from './ShowFavoriteStyle';
import configureStore from '../../../app/GlobalRedux/stores/ConfigureStore';

import { Provider} from "react-redux";

import { ENDPOINT_URL_IMAGES } from '../../../app/enviroments/EndoPoints';
import { deletedMovie } from '../../../app/GlobalRedux/actionss/actions';
import { useAppSelector } from '../../lib/hooks';


const ShowFavoritesMovies =()=> {


  const { state } = useLocation();

const {moviesList}=state.userData;

const listFavorite = useAppSelector((state:any)=>state.movies)

console.log(listFavorite)
    const store = configureStore();
    store.subscribe(() =>
    console.log(store.getState())
  )


  const deltedhandleClickFavorites = (id:String) => {
  
 store.dispatch(deletedMovie(id));
 window.location.reload();
  };


  return (
    <Provider store={store}>
      <div>
      <Container>
      <ContainerSeacrch>

        <Input placeholder='Buscar favoritos...' />
      </ContainerSeacrch>

      <TextSubTitle>Mis Favoritos</TextSubTitle>


      <ContainerListFavorit>

        { moviesList.map((movie: any) => (
          <Li key={movie.id}>


            <Link to={`/movie/${movie.id}`}>
              {movie.backdrop_path !== null &&
                <ImageFavorite src={`${ENDPOINT_URL_IMAGES}${movie.backdrop_path}`} alt=""
                />

              }
              {movie.backdrop_path == null &&
                <ImageFavoriteNofound src={`${IMAGE_NOFOUND_URL}`} alt='no imagen'
                  style={{ cursor: 'pointer' }} />
              }

            </Link>
            <ContentText>
              <h1>{movie.title}</h1>
              <p style={{ color: '#fd6d6d' }} >{movie.release_date}</p>

              <Containertext>
                <IconText onClick={()=>deltedhandleClickFavorites(movie.id)}>
                  < ImageIco src={`${URL_ICON_LOVE}`} alt=""></ ImageIco>
                  Eliminar de Favoritas
                </IconText>

              </Containertext>

            </ContentText>
          </Li>
        ))}
      </ContainerListFavorit>

    </Container> 
      </div>
   
    </Provider>
  );

}

export default ShowFavoritesMovies;
