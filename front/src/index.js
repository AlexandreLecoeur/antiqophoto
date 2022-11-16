import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import { Provider} from 'react-redux';
import store from './store';


const rootReactElement = <Provider store={ store }>
	<React.StrictMode>
    <App />
  </React.StrictMode>
</Provider>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(rootReactElement);

