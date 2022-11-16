import PropTypes from 'prop-types';
//import { Form } from 'semantic-ui-react';

import Field from './Field';

import './style.scss';

const LoginForm = ({
	email,
	password,
	changeField,
	handleLogin,
	handleLogout,
	isLogged,
	loggedMessage,
}) => {
	const handleSubmit = (evt) => {
		evt.preventDefault();
		handleLogin();
	};

	return (
		<div className="login-form">
			{isLogged && (
				<div className="login-form-logged">
					<p className="login-form-message">
						{loggedMessage}
					</p>
					<button
						type="button"
						className="login-form-button"
						onClick={ handleLogout }
					>
            Déconnexion
					</button>
				</div>
			)}
			{!isLogged && (
				<div>
					
				<form autoComplete="off" className="login-form-element" onSubmit={ handleSubmit }>
					<Field
						name="emailLogin"
						type="email"
						placeholder="Adresse Email"
						onChange={ changeField }
						value={ email }
					/>
					<Field
						name="passwordLogin"
						type="password"
						placeholder="Mot de passe"
						onChange={ changeField }
						value={ password }
					/>
					<button
						type="submit"
						className="login-form-button"
					>
            Connexion
					</button>
				</form>
				<p>
				<center>
				<hr className='divider' width='50%'/>
				</center>
				</p>
				
				</div>
			)}
		</div>
	);
};

LoginForm.propTypes = {
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	changeField: PropTypes.func.isRequired,
	handleLogin: PropTypes.func.isRequired,
	handleLogout: PropTypes.func.isRequired,
	isLogged: PropTypes.bool,
	loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
	isLogged: false,
	loggedMessage: 'Connecté',
};

export default LoginForm;
