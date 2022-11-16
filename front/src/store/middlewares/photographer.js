import axios from 'axios';
//import instance from '../../utils/axios';
import { FETCH_PHOTOGRAPHER, setPhotographer } from '../actions/photographer';

//alert('MIDDLEWARE');
const photographerMiddleware = (store) => (next) => async (action) => {
	//alert('MIDDLEWARE PHOTOGRAPHER');
	//debugger;
	//console.log('ICI');
	switch (action.type){
		case FETCH_PHOTOGRAPHER :{
			//console.log('ok photografmiddleware');
			const {data}  = await axios.get('http://localhost:3001/photographer');
			//console.log('DATAMIDDLEWARE>>',data);
			store.dispatch(setPhotographer(data));
			break;
		}
		default:
			next(action);
			break;
	}
};

export default photographerMiddleware;
