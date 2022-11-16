import React from 'react';

import {useDispatch, useSelector} from'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../../data/logo/logo.png';
import { Header,Button, Grid,Modal,Message,Image,Menu,Container,Icon,Segment } from 'semantic-ui-react'; 
import LoginForm from '../../LoginForm';
import RegisterForm from '../../RegisterForm';

import { signIn } from '../../../store/actions/user';
import { RegisterIn } from '../../../store/actions/user';
import { logout } from '../../../store/actions/user';
import { changeUserField } from '../../../store/actions/user';

// Style
import './style.scss';




const AppHeader = () => {
	
	const [open, setOpen] = React.useState(false);
	const dispatch = useDispatch();
	// on veut aller piocher dans le store avec useSelector
	// on a plusieurs reducer alors on precise dans lequel on veut aller state.user
	//loginform
	const emailLogin= useSelector(state => state.user.emailLogin);
	const passwordLogin = useSelector(state => state.user.passwordLogin);
	const logged = useSelector(state => state.user.logged);
	//const pseudo =useSelector(state => state.user.pseudo);
	//register form
	const firstname =  useSelector(state => state.user.user.firstname);
	const lastname = useSelector(state => state.user.lastname);
	const emailRegister= useSelector(state => state.user.emailRegister);
    const passwordRegister = useSelector(state => state.user.passwordRegister);
    const confpassword= useSelector(state => state.user.confpassword);
	//admin
	const isAdmin= useSelector(state => state.user.isAdmin);

	// on veut recup value et name ,on va dans le reducer User definir tout ca
	const handleChangeField = (value,name) => {
		//on dispatch pour changer la valeur des champs
		dispatch(changeUserField(value,name));
	};

	const handleLogin = () => {
		// on emet intention de se connecter signIn = dispatch puis action creator
		dispatch(signIn());
	};

	const handleLogout = () => {
		dispatch(logout());
		setOpen(false);
	};
	// On veut s'enregistrer
    const handleRegister = () => {
        // on emet intention de se connecter signIn = dispatch puis action creator
        dispatch(RegisterIn());
    };

	
	return (
		<>
			<Menu fixed='top'  >
      			<Container>
        			<Menu.Item as='a' header>
          				<Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
						  <NavLink className='link' to='/' > Antiq O Photo</NavLink>
        			</Menu.Item>
        			<Menu.Item>
						<NavLink className='link' to='/biographies'> Biographies </NavLink>
					</Menu.Item>
					<Menu.Item>
						<NavLink className='link' to='/galerie'>Galerie</NavLink>
					</Menu.Item>
					<Menu.Item>
						<NavLink className='link' to='/articles'>Articles</NavLink>
					</Menu.Item>
				
					{/*Connecté = Message + Déconnexion*/ } 
					{logged && (
						<div className="login-form-logged">
							&nbsp;&nbsp;
							<Icon name='user'  />

							<p className="login-form-message">
								{`Bonjour ${ firstname }`}
							</p>
							{isAdmin && (
								<Button icon labelPosition='left' color='green'>
									<NavLink className='link'to='/admin' > ADMIN</NavLink>
									<Icon name='adn' />
								</Button> 
								
							)}
							<Button
								type="button"
								//className="login-form-button"
								color='teal'
								onClick={ handleLogout }
								floated='right'
							>
            					Déconnexion
							</Button>
						</div>
					)}
					{/*Non connecté = début modal*/ }
					{!logged && (
						<Modal
      						onClose={() => setOpen(false)}
      						onOpen={() => setOpen(true)}
      						open={open}
     	 					trigger={<Container><Segment basic><Button  color='teal' floated='right'>Mon Compte</Button></Segment></Container>}
    					>
							{/* Contenu Modale Mon espace */}
      						<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    							<Grid.Column style={{ maxWidth: 450 }}>
      								<Header as='h2' color='teal' textAlign='center'>
        								<Image src={logo} /> Mon espace
      								</Header>
	  								{/* Formulaire de connexion */}
	   								<LoginForm
										email={emailLogin}
										password={passwordLogin}
										changeField= { handleChangeField }
										handleLogin={ handleLogin }
										handleLogout={ handleLogout }
										isLogged ={logged}
									/>
									<Message>
        								Rejoignez nous!
									
										
										< RegisterForm 
										firstname={firstname}
										lastname={lastname}
										email={emailRegister}
										password={passwordRegister}
										confpassword={confpassword}
										changeField= { handleChangeField }
										handleLogin={ handleRegister }
										/>
									</Message>	
									
	  								
    							</Grid.Column>
  							</Grid>
    					</Modal>	
					)}
				</Container>
    		</Menu>
		</>	
	);
};

export default AppHeader;
