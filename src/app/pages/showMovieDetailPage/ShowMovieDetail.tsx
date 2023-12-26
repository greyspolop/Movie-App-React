import React, { useEffect, useState } from 'react';
import { Genre, PopularMovieInterface } from '../../utils/PopularMovie';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AlingContentFavorite, ButtonStyle, Container, Containertext, Descriptiontext, IconText, ImageDetails, ImageIcon, ImageIconStar, ImagePoster, ImgAndText, OrderTxtTypeMovie, PosterContent, PosterTexts, TextSubTitle, TextTitle, TxtTypeMovie } from './ShowMovieDetailStyle';
import { API_SEARCH, ENDPOINT_URL_IMAGES } from '../../../app/enviroments/EndoPoints';
import { API_KEY, URL_ICON, URL_ICON_LOVE } from '../../utils/Constants';
import { Provider } from 'react-redux';
import configureStore from '../../../app/GlobalRedux/stores/ConfigureStore';
import { addMovie} from '../../../app/GlobalRedux/actionss/actions';
import { useAppSelector } from '../../../app/lib/hooks';


const ShowMovieDetail=() =>{


  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<PopularMovieInterface>();
  
//obtnemos la lista del redux
  const listFavorite = useAppSelector((state:any)=>state.movies)


  const navigate = useNavigate()

  const store = configureStore();
 
  store.subscribe(() =>{
    console.log(store.getState())

   
  }
 )
 

  useEffect(() => {
    // Llamar a la API de TMDb con el ID de la película para obtener detalles
    //solicitud a la API usando fetch

    fetch(`${API_SEARCH}${id}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setMovieDetails(data);
      })
      .catch(error => {
        console.error('Error al obtener detalles de la película:', error);
      });
  }, [id]);

  if (!movieDetails) {
    return <div>Cargando detalles de la película...</div>;
  }


  const handleClick = () => {
    // Lógica navegar pagina anterior
   navigate(-1);
  };





  const handleAddObject = () => {
    store.dispatch(addMovie(movieDetails))
    navigate('/favorites',{ state: {userData:store.getState().movies} });
    alert('añadido correctamente'+listFavorite)


  };

  return (
    <Provider store={store}>
    <div>
  
     <div>
            <Container>
        <PosterTexts>
          <TextTitle>{movieDetails?.title}</TextTitle>
          <TextSubTitle>{movieDetails?.tagline}</TextSubTitle>
          <ImageIconStar src={`${URL_ICON}`} ></ImageIconStar>
        </PosterTexts>

        <ImageDetails alt='' src={`${ENDPOINT_URL_IMAGES}${movieDetails.backdrop_path}`} ></ImageDetails>

      </Container>

      <ImgAndText>
        <PosterContent>
          <ImagePoster src={`${ENDPOINT_URL_IMAGES}${movieDetails.backdrop_path}`} ></ImagePoster>
          <OrderTxtTypeMovie>
            {movieDetails.genres.map((moviex: Genre) => (
              <div key={moviex.id}>
                <TxtTypeMovie>
                  <label>{moviex.name}</label>
                </TxtTypeMovie>
              </div>
            ))}</OrderTxtTypeMovie>
        </PosterContent>

        <Descriptiontext>{movieDetails.overview}</Descriptiontext>

        < AlingContentFavorite>
          <Containertext>
            <IconText onClick={handleAddObject}>
              <ImageIcon src={`${URL_ICON_LOVE}`} alt=""></ImageIcon>
              Agregar a Favoritas
            </IconText>

          </Containertext>

          <ButtonStyle onClick={handleClick}>Regresar</ButtonStyle>

        </AlingContentFavorite>
      </ImgAndText>
      </div>


    </div>

</Provider>
  );

}

export default ShowMovieDetail;
