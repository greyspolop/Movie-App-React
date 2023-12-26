import { configureStore,legacy_createStore as createStore } from '@reduxjs/toolkit'
import rootReducer from '../GlobalRedux/reducers/reducer';

export const makeStore = () => {
  return createStore(rootReducer);
}




// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']