import { BrowserRouter, Route, Routes} from 'react-router-dom';

import MoviesHome from './app/pages/showMovieHomePage/MoviesHome';
import ShowMovieDetail from './app/pages/showMovieDetailPage/ShowMovieDetail';
import ShowFavoritesMovies from './app/pages/showFavoriteMoviePage/ShowFavoritesMovies';

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route index element={<MoviesHome/>} />
            <Route path="/movie/:id" element={<ShowMovieDetail />} />
            <Route path="/favorites/" element={<ShowFavoritesMovies />} />
             { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}    
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;