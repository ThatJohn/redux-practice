import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import { forbiddenWordMiddleware } from '../middleware';

const store = createStore(rootReducer, applyMiddleware(forbiddenWordMiddleware));

export default store;