//import Loading from './Loading';
import { Card,Button,Segment,Icon } from 'semantic-ui-react';
import Artist from './Artist';
//import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { fetchPhotographer } from '../../store/actions/photographer';
import AppHeader from '../Home/AppHeader';




const Biographies =  () => {
	
	const dispatch = useDispatch();
	useEffect(() => {
		// je lance lappel a lapi pour recup les photographes
		// avex axios les données sont retournées dans la propriété data
		// on deporte lappel axios onva creer un action creator fetchPhotographer
		// et on limporte voir l7
		dispatch(fetchPhotographer());
		//debugger;
		//on laisse le tableau de dependance vide pour le 1er chargement 
			},[]);

			const photographer = useSelector((state) => state.photographer.list);

			//admin
	const isAdmin= useSelector(state => state.user.isAdmin);

	return (
		<>
		<AppHeader/>
		<Segment style={{ paddingTop: '4em' }}>
			{isAdmin && (
				<Button color='blue'style={{ margin: '1.5em' }}>
					<Icon name='add'/> Ajouter une biographie
		   		 </Button> 						
			)}

			<Card.Group itemsPerRow={5} >
			{
		  		photographer.map((artist) => (
				<Artist key={artist.id} {...artist} />
		  		))
			}
	  		</Card.Group>	
			  </Segment>
	  </>

	);
	
};

export default Biographies;


