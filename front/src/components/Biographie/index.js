import { useSelector } from "react-redux";
import { useParams,Navigate } from "react-router-dom";

import { findBiographie } from "../selectors/photographer";

import  AppHeader from '../Home/AppHeader';
import { Card } from "semantic-ui-react";

const Biographie = ({lastname,firstname,birthdate,birthplace,birthdepartmentn,birthcountry,deathcountry,periodactivity,adress1,adress2,adress3,biography,portrait}) => {

	const { id } = useParams();
	console.log('TEST>',id);

	const biographie = useSelector((state) => findBiographie(state.photographer.list,id)

	);

	if(!biographie) {
		return <Navigate to='/NotFound' replace />;
	}
	return (
		<>
		<AppHeader style={{ marginTop: ' 5em '}}/>
		<Card  link color='purple' style={{ padding: ' 5em '}}>
     		<Card.Content  >
        		<Card.Header >{`${lastname} ${firstname}`}</Card.Header>
				<Card.Meta>
        			<span className='date'>{periodactivity}</span>
     			</Card.Meta>
				<Card.Description>
        			{`${birthdate} ${birthplace}${birthdepartmentn}${birthcountry}${deathcountry}`}
      			</Card.Description>
      		</Card.Content>
		</Card>	  
	 </>
    

	)
};

export default Biographie;
/*
"id" : "13",
        "lastname" : "GRUMEAU",
        "firstname" : "Alphonse Victor",
        "birthdate" : "15/04/1835",
        "birthplace" : "Equeurdreville",
        "birthdepartmentn" : "Manche",
        "birthcountry" : "France",
        "deathdate" :"3/12/1889",
        "deathplace" : "Cherbourg",
        "deathdepartmentn" : "Manche",
        "deathcountry" : "France",
        "periodactivity" : "1868-1887",
        "adress1" : "24, rue Tour-Carrée",
        "adress2" : "",
        "adress3" : "",
        "biography" : "",
        "portrait" : ""

 */
/*
<img
			src={ thumbnail }
			alt="Bonnes crêpes"
			className="presentation-image"
		/>
 */