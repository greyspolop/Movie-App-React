import {legacy_createStore as createStore} from 'redux';  
import rootReducer from '../reducers/reducer';
  

/*Crea la funcion configureStore */

export const configureStore=() =>{  
  return createStore(rootReducer);
}
export default  configureStore;
