import { combineReducers } from "@reduxjs/toolkit/react";
import actions from "./moviesReducer";


const rootReducer =combineReducers({
    
    movies: actions,

})

export default rootReducer;