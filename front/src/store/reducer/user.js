import { CHANGE_USER_FIELD, SET_USER_DATA, LOGOUT} from "../actions/user";


export const initialState ={
	token:null,
	logged:false,
	emailLogin:'tefgfgst@gmail.com',
	passwordLogin:'Antiqophoto1',
	firstname:'',
	lastname:'',
	emailRegister:'',
    passwordRegister:'',
    confpassword:'',
	isAdmin:null,

};

const reducer = (state = initialState, action ={}) => {
	switch(action.type){
		case CHANGE_USER_FIELD:
		// debugger;
		return {
			...state,
			//[action.name] permet d'utiliser une variable qui sera évaluée (on récup a valeur de cette variable 
			//pour défénir le nom de la propriété)
			[action.name] : action.value,
		};
		case SET_USER_DATA:
			return {
				...state,
				...action.data,

			};
			case LOGOUT:
				return {
					...state,
					logged:false,
					pseudo:null,
					token:null,
					isAdmin:null,
				}
		default:
			return state;
	}
};

export default reducer;