import axios from 'axios';
import { SIGN_IN, setUserData, REGISTER_IN } from '../actions/user';
 

const auth = (store) => (next) => async (action) => {

	switch(action.type) {
		case SIGN_IN:{
		//	console.log('hello Auth');
			const {user} = store.getState();
			const { emailLogin, passwordLogin } = user;
			const { data } = await axios.post('http://localhost:5050/account/login', {
				email:emailLogin,
				password: passwordLogin,
			});
			console.log(data);
			store.dispatch(setUserData(data));
			break;
		}
		case REGISTER_IN:{

            const {user} = store.getState();
            //const { firstname, lastname, emailRegister, passwordRegister, confpassword } = user;
            
            console.log(user);

//          const { data } = await axios.post('http://localhost:3001/register', {
//              firstname,
//              lastname,
//              email:emailRegister,
//              password:passwordRegister,
//              confpassword,
//          });
//          store.dispatch(setUserData(data));
            break;
        }
		default:
			next(action);
			break;

	}
};

export default auth;
