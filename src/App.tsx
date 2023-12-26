import React from 'react';
import './App.css'
import { Provider } from 'react-redux';
import { configureStore } from './app/GlobalRedux/stores/ConfigureStore';
import { BrowserRouter ,Routes } from 'react-router-dom';
import MoviesHome from './app/pages/showMovieHomePage/MoviesHome';
import ShowMovieDetail from './app/pages/showMovieDetailPage/ShowMovieDetail';
import ShowFavoritesMovies from './app/pages/showFavoriteMoviePage/ShowFavoritesMovies';
import Router from './Router';

const store = configureStore();

 const App=()=> {
  
  return (
    <Provider store={store} >

<Router />
</Provider>
  );
}

export default App;
