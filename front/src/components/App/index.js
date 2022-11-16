import { BrowserRouter, Route, Routes }  from 'react-router-dom';

import Home from '../Home';
import NotFound from '../NotFound';
import Galerie from'../Galerie';
import Biographies from '../Biographies';
import Articles from '../Articles';
import Admin from '../Admin';
import Biographie from '../Biographie';



function App() {
  return (
	
    <BrowserRouter>
		<div className="App">
			<Routes>
				<Route path="/" element={ <Home/> } />
				<Route path="/galerie" element={< Galerie/>} />
				<Route path="/biographies" element={<Biographies />} />
				<Route path="/biographies/:id" element={ <Biographie /> } />
				<Route path="/articles" element={<Articles />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
     
	 	</div>
      
    </BrowserRouter>
  
    
  );
}

export default App;
