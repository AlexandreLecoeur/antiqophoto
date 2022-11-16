import {Image,List,Container,Segment} from 'semantic-ui-react';
import logo from '../../../data/logo/logo.png';

const Footer = () => {
	return (
		<Segment vertical style={{ margin: '0.5em 0em 0em', padding: '1em 0em ' }}>

<Container>
        {/*<Image left size='mini' src={logo} />*/}
		
          <Image size='mini' src={logo} floated='left'  />
         
        
        <List horizontal  divided link size='small' floated='left'>
          <List.Item as='a' href='/404'>
            Site Map
          </List.Item>
          <List.Item as='a' href='/404'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='/404'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='/404'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
	  </Segment>
   


	)
};


export default Footer;