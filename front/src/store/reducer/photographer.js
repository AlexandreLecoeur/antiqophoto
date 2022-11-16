import data from '../../data/photographer';
import { SET_PHOTOGRAPHER } from '../actions/photographer';


export const initialState = {
	// renvoi les 3photographes en local voir le fichier importe au dessus
	 list: data,
};

const reducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_PHOTOGRAPHER:
			//alert('SET SET  SET');
			return {
				...state,
				list: action.photographer,
			};
		default:
			return state;
	}
};

export default reducer;