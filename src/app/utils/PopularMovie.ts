export interface PopularMovieInterface {
    id?:React.Key ;
    adult:             boolean;
    backdrop_path:     string;
    title:             string;
    original_language:String;
    original_title:    string;
    overview:          string;
    poster_path:       string;
    media_type:        String;
    genre_ids:         number[];
    popularity:        number;
    release_date:     String;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
    tagline: string;
    genres:[Genre]//agregar interfac
  }

  export interface Genre {
    id:   number;
    name: string;
}
