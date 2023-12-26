import { PopularMovieInterface } from "../../../utils/PopularMovie"

export const addMovie =(movie:PopularMovieInterface) => {
    return {
		type: "ADD_MOVIE",
        payload:movie
		
	}
}

export const deletedMovie =(id:String) => {
    return {
		type: "DELETED_CONTACT",
        payload:id
	}
}
