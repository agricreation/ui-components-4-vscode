import { createStore, combineReducers, Store, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // For Redux DevTools Extension
import thunk from 'redux-thunk'; // For async actions if needed

import { ComponentsState, componentsReducer } from '../Reducers/Components.reducer';

// Define the root state interface
interface RootState {
  components: ComponentsState;
}

// Combine reducers
const rootReducer = combineReducers<RootState>({
  components: componentsReducer,
});

// Define the type for the Redux store
export type AppStore = Store<RootState>;

// Create the store with middleware
const store: AppStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
