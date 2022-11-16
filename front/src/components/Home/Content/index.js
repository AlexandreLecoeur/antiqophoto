/* eslint-disable jsx-a11y/alt-text */
//import {Card} from 'semantic-ui-react';
import firstImage from '../../../data/images/pexels-laura-meinhardt-13248509.jpg';
import secondImage from'../../../data/images/IMG_8080.jpg';
import thirdImage from '../../../data/images/pexels-ryan-morris-12747521.jpg';
import { NavLink } from 'react-router-dom';
import { Message, Image,Card, Container } from 'semantic-ui-react';

import './style.scss';


const Content = () => {
	return (
		<Container style={{ paddingTop: '7em' }}>
<Card.Group  itemsPerRow={3}>
	 
	
 	 <Message Style='box-shadow:none'>
	 		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque assumenda repellat nemo, at in aliquid. Magnam a possimus voluptatum cupiditate laudantium saepe, inventore exercitationem ipsum quam distinctio, tempore consequuntur. Tenetur!</p>
	 </Message>
	 
	 <Card link href ='/biographies' color='teal' Style='box-shadow:none' >		
	 	<NavLink className='link'
		  to={`/biographies`}
		  >
		  <center class="header">
        <h1>Biographies</h1>
		</center>
		</NavLink>
		<center>
        <Image fluid src={ firstImage } circular/>
		</center>	
	</Card>
 		
	<Card link href='/galerie' color='teal' Style='box-shadow:none' >		
	 	<NavLink className='link'
		  to={`/galerie`}
		  >
		  <center class="header">
        <h1>Galerie</h1>
		</center>
		</NavLink>
		<center>
        <Image src={ secondImage } fluid circular/>
		</center>	
	</Card>
	<Card link href='/articles' color='teal' Style='box-shadow:none'>		
	 	<NavLink className='link'
		  to={`/articles`}
		  >
		  <center class="header">
        <h1>Articles</h1>
		</center>
		</NavLink>
		<center>
        <Image src={ thirdImage } fluid circular/>
		</center>	
	</Card>

</Card.Group>
</Container>
	);
};

export default Content;