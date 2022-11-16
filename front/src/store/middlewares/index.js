import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import authMiddleware from './middlewares/auth';
import photographerMiddleware from '../middlewares/photographer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
	applyMiddleware(photographerMiddleware,authMiddleware)
);

const store = createStore(reducer, enhancers);

export default store;