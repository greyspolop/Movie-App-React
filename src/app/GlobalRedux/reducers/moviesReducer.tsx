import initialState from './initialState';



export  const moviesReducer =(state = initialState.movies, action: { type: any; payload: any; }) =>{
    switch(action.type) {
        
        /* Add movies to the state array */
     
		case "ADD_MOVIE": {
			return {
				...state,
				moviesList: [...state.moviesList, action.payload],
			  };
			
		}
		case "DELETE_OBJECT":
			return {
			  ...state,
			  objects: state.moviesList.filter((obj :{id:string})=> obj.id !== action.payload), // Filtra el objeto a eliminar por su email
			};
        

	

		default: return state;
	}
}
export default moviesReducer;