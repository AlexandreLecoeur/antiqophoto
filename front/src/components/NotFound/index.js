import { Header, Segment } from 'semantic-ui-react';

const NotFound = () => {
  return (

    <Segment>
      <Header as="h1">
        Erreur 404
      </Header>
      <p>La Page que vous demandez n'a pas été trouvée.</p>
    </Segment>
  );
};

export default NotFound;