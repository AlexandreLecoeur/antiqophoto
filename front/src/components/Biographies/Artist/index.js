import { Card, Button, Icon, Container} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';



// on pourrait rendre les cartes clickable en ajoutant un href dans <Card>
const Artist = ({  id,lastname, firstname, }) => {
	//console.log(id);
	//console.log(lastname);
	const name = `${lastname} ${firstname}`;
	//console.log(name);
	

	//admin
const isAdmin= useSelector(state => state.user.isAdmin);

	
  return (
	<Card  link color='purple' style={{ padding: ' .5em '}}>
      <Card.Content  >
        <Card.Header ><NavLink className='link' to={`/biographies/${id}`}>{name}</NavLink></Card.Header>
      </Card.Content>
    
{isAdmin && (
	
	  <Container>
	  <Button icon size='medium' floated='right' color='red'>
	    <Icon  name='trash alternate'/>
	  </Button> 
	  <Button icon size='medium' floated='right' color='blue'  >
	    <Icon  name='pencil alternate'/>
	  </Button> 
	  </Container>
		
)}
</Card>

  ); 
};

export default Artist;

Artist.propTypes = {
  lastname: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  deathplace: PropTypes.string.isRequired,
  deathdate: PropTypes.string.isRequired,
  periodactivity: PropTypes.string.isRequired,


};
