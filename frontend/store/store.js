import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk_middleware';

const configureStore = (preloadedState) => (
  createStore(RootReducer, preloadedState, applyMiddleware(thunk))
);

export default configureStore;