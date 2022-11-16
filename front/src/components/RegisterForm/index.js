import PropTypes from 'prop-types';
import { Button, Divider, Form } from 'semantic-ui-react';

import Field from '../LoginForm/Field';

const sizes = [ 'tiny'];


const RegisterForm = ({
	firstname,
    lastname,
    email,
    password,
    confpassword,
    changeField,
    handleLogin,	
}) => {
	
	const handleSubmit = (evt) => {
		evt.preventDefault();
		handleLogin();
	};
	return (
		<div>
		{sizes.map((size) => (
		  <Form size={size} key={size} onSubmit={handleSubmit}>
			  <Field
						name="firstname"
						type="text"
						placeholder="Votre Prénom"
						onChange={ changeField }
						value={ firstname }
				/> 
			  <Field
						name="lastname"
						type="text"
						placeholder="Votre Nom"
						onChange={ changeField }
						value={ lastname }
				/> 
				
				<Field
						name="emailRegister"
						type="email"
						placeholder="Votre Email"
						onChange={ changeField }
						value={ email }
				/> 

				<Field
						name="passwordRegister"
						type="password"
						placeholder=" votre mot de passe"
						onChange={ changeField }
						value={ password }
				/> 
				<Field
						name="confpassword"
						type="password"
						placeholder="Merci de confirmer votre mot de passe"
						onChange={ changeField }
						value={ confpassword }
				/> 
        <Button type='submit' color='teal'>J'envoie</Button>
        <Divider hidden />
      </Form>
    ))}
  </div>
)
};

RegisterForm.propTypes = {
	firstname:PropTypes.string.isRequired,
	lastname:PropTypes.string.isRequired,
	changeField: PropTypes.func.isRequired,
	handleLogin: PropTypes.func.isRequired,
	
	};



export default RegisterForm;