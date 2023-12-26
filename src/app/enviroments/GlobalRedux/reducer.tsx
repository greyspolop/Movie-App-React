import { PopularMovieInterface } from "../../utils/PopularMovie";


const initialState = {
  objects: [], // Lista de objetos inicial vacía
};

const objectReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case 'ADD_OBJECT':
      return {
        ...state,
        objects: [...state.objects, action.payload],
      };
    case 'DELETE_OBJECT':
      return {
        ...state,
        objects: state.objects.filter((obj:PopularMovieInterface)=> obj.id !== action.payload), // Suponiendo que cada objeto tiene una propiedad 'id'
      };
    default:
      return state;
  }
};

export default objectReducer;
