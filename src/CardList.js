import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	return(
		<div>
		{
			robots.map((element,i) => {
				return(
				//when looping or iterating, react needs key property. 
					<Card 
						key={element.id} 
						id={element.id} 
						name={element.name} 
						email={element.email}
					/>
				);
			})
		}
		</div>
	);
}

export default CardList;