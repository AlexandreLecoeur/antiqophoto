import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import auth from './middlewares/auth';
import photographerMiddleware from './middlewares/photographer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
// en parametre on met nos middleware
const enhancers = composeEnhancers(
	applyMiddleware( auth,photographerMiddleware));
// la fonction me retourne mon objet store
// Elle prend en paramètre le reducer en premier puis si besoin d'autre utilitaire comme le redux devtools
const store = createStore(
	reducer, 
	enhancers
	//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// que je peux exporter pour m'en servir ailleurs
export default store;
