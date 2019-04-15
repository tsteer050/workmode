import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';

const configureStore = () => (
  createStore(RootReducer)
);

export default configureStore;